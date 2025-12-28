import { render, screen } from '@testing-library/react';
import App from './app';
import { MemoryHistory, createMemoryHistory } from 'history';
import { NameSpace } from 'store/constants';
import { ensureAuthorizedUser, withHistory, withStore } from 'lib/test-utils/mock-component';
import {
  makeFakeUserData,
  makeFakeOffers,
  makeFakeReviews,
  makeFakeDetailedOffer,
  makeFakeFavoriteOffers
} from 'lib/test-utils/mocks';
import { makeFakeStore } from 'lib/test-utils/store-utils';
import { AppRoute, AuthorizationStatus, CITIES, DefaultCity } from '@constants';

vi.mock('services/process-error-handle', () => ({
  processErrorHandle: vi.fn(),
}));

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore(),
    );
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);

    expect(screen.getByRole('link', { name: /Sign in/i })).toBeInTheDocument();
    CITIES.forEach((city) => {
      expect(screen.getByText(city.name)).toBeInTheDocument();
    });
    expect(screen.getByTestId('offer-list')).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigate to "/login" and unauthorized', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    mockHistory.push(AppRoute.Login);

    render(withStoreComponent);

    expect(screen.getByRole('heading', { name: /Sign in/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign in/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it('should render "MainPage" when user navigate to "/login" and authorized', () => {
    const mockUser = makeFakeUserData();
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.Auth,
          userData: mockUser,
        },
      })
    );
    mockHistory.push(AppRoute.Login);

    render(withStoreComponent);

    ensureAuthorizedUser(mockUser.email);
    CITIES.forEach((city) => {
      expect(screen.getByText(city.name)).toBeInTheDocument();
    });
    expect(screen.getByTestId('offer-list')).toBeInTheDocument();
  });

  it('should render "LoadingScreen" when user authorization checking', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.Unknown,
          userData: null
        }
      })
    );
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('should render "LoadingScreen" when offers loading', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        [NameSpace.Offers]: {
          offers: [],
          city: DefaultCity,
          isOffersDataLoading: true
        }
      })
    );
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('should render "LoadingScreen" when favourite offers loading and user authorized', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.Auth,
          userData: makeFakeUserData()
        },
        [NameSpace.FavoriteOffers]: {
          offers: [],
          isOffersDataLoading: true,
          isOfferStatusUpdating: false,
        },
      })
    );
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('should render "FavoritesPage" when user navigate to "/favorites" and authorized', () => {
    const mockUser = makeFakeUserData();
    const mockFavoriteOffers = makeFakeFavoriteOffers(7);

    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.Auth,
          userData: mockUser
        },
        [NameSpace.FavoriteOffers]: {
          offers: mockFavoriteOffers,
          isOffersDataLoading: false,
          isOfferStatusUpdating: false,
        }
      })
    );
    mockHistory.push(AppRoute.Favorites);

    render(withStoreComponent);

    ensureAuthorizedUser(mockUser.email);
    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    const favouriteLocations = screen.getAllByTestId('favorite-location-items');
    expect(favouriteLocations.length).toBeGreaterThanOrEqual(1);
  });

  it('should render "LoginPage" when user navigate to "/favorites" and unauthorized', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    mockHistory.push(AppRoute.Favorites);

    render(withStoreComponent);

    expect(screen.getByRole('heading', { name: /Sign in/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign in/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it('should render "OfferPage" when user navigate to "/offer/:id" and offer exists', () => {
    const mockSelectedOffer = makeFakeDetailedOffer();
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        [NameSpace.SelectedOffer]: {
          selectedOffer: mockSelectedOffer,
          nearbyOffers: makeFakeOffers(7),
          isOfferDataLoading: false,
          isNearbyOffersDataLoading: false,
          reviews: makeFakeReviews(mockSelectedOffer.id, 17),
          isReviewsDataLoading: false,
          isReviewDataSending: false
        },
      })
    );
    mockHistory.push(`${AppRoute.Offer}/${mockSelectedOffer.id}`);

    render(withStoreComponent);

    expect(screen.queryByText(mockSelectedOffer.title)).toBeInTheDocument();
    const bookmarkButtons = screen.getAllByTestId('bookmark-button');
    expect(bookmarkButtons.length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.queryByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to "/offer/:id" and offer not exists', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    mockHistory.push(`${AppRoute.Offer}/not-existed-id`);

    render(withStoreComponent);

    expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Вернуться на главную/i })).toBeInTheDocument();
  });
});

import { clearFavoriteOffers, favoriteOffersData } from './favorite-offers-data';
import { FavoriteOffersData } from 'types/state';
import { makeFakeFavouriteOffers } from 'lib/test-utils/mocks';
import { getRandomNumber } from 'lib/number-utils';

describe('FavouriteOffersData Slice', () => {
  const initialState: FavoriteOffersData = {
    offers: [],
    isOffersDataLoading: false,
    isOfferStatusUpdating: false,
    hasError: false,
  };

  const fakeState: FavoriteOffersData = {
    offers: makeFakeFavouriteOffers(getRandomNumber(0, 15)),
    isOffersDataLoading: false,
    isOfferStatusUpdating: false,
    hasError: false,
  };

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = fakeState;
    const result = favoriteOffersData.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const result = favoriteOffersData.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should clear favourit offer data with "clearFavoriteOffers" action', () => {
    const expectedState = {
      ...fakeState,
      offers: [],
    };
    const result = favoriteOffersData.reducer(fakeState, clearFavoriteOffers());
    expect(result).toEqual(expectedState);
  });
});

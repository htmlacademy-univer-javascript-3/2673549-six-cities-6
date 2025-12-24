import LoadingScreen from 'pages/login-page';
import { FavoriteLocationItems } from 'components/favorites-page/favorite-location-items';
import PageHeader from 'components/base/page-header';
import Page from 'components/base/page';
import Footer from 'components/base/footer';
import { useAppSelector } from 'hooks/index';
import {
  getFavoriteOffersByCity,
  getFavoriteOffersDataLoadingStatus
} from 'store/favorite-offers-data/selectors';

function FavoritesPage(): JSX.Element {
  const isFavoriteOffersDataLoading = useAppSelector(getFavoriteOffersDataLoadingStatus);
  const offersByCities = useAppSelector(getFavoriteOffersByCity);

  if (isFavoriteOffersDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <Page>
      <div className="page">
        <PageHeader />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  Object.entries(offersByCities).map(([city, cityOffers]) => (
                    <FavoriteLocationItems key={city} city={city} offers={cityOffers} />
                  ))
                }
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </Page>
  );
}

export default FavoritesPage;

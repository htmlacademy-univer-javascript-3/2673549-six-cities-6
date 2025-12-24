import { useEffect } from 'react';
import LoadingScreen from 'pages/login-page';
import { FavouriteLocationItems } from 'components/favorites-page/favorite-location-items';
import PageHeader from 'components/base/page-header';
import Page from 'components/base/page';
import Footer from 'components/base/footer';
import { useAppDispatch, useAppSelector } from 'hooks/index';
import { clearFavouriteOffers } from 'store/favorite-offers-data/favorite-offers-data';
import { getFavouriteOffersByCity, getFavouriteOffersDataLoadingStatus } from 'store/favorite-offers-data/selectors';
import { fetchFavoriteOffersAction } from 'store/api-actions';

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const isFavouriteOffersDataLoading = useAppSelector(getFavouriteOffersDataLoadingStatus);
  const offersByCities = useAppSelector(getFavouriteOffersByCity);

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());

    return () => {
      dispatch(clearFavouriteOffers);
    };
  }, [dispatch]);

  if (isFavouriteOffersDataLoading) {
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
                    <FavouriteLocationItems key={city} city={city} offers={cityOffers} />
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

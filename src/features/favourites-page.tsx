import { FavouriteLocationItems } from 'components/favourites-page/favourite-location-items';
import PageHeader from 'components/base/page-header';
import Page from 'components/base/page';
import { Offer } from 'types/offer-types/offer';
import { Link } from 'react-router-dom';
import { AppRoute } from '@constants';
import { useOffers } from 'hooks/store-hooks/offer-hooks';

function getFavouritesByCity(offers: Offer[]) {
  return offers.reduce<Record<string, Offer[]>>((acc, offer) => {
    const cityName = offer.city.name;

    if (!acc[cityName]) {
      acc[cityName] = [];
    }

    acc[cityName].push(offer);
    return acc;
  }, {});
}

function FavouritesPage(): JSX.Element {
  const offers = useOffers();
  const favouriteOffers = offers.filter((offer) => offer.isFavourite);
  const offersByCities = getFavouritesByCity(favouriteOffers);

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
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.Main}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      </div>
    </Page>
  );
}

export default FavouritesPage;

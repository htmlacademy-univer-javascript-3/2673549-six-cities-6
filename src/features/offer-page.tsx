import { Link, useParams } from 'react-router-dom';
import Page from 'components/base/page';
import OfferSection from 'components/offer-page/offer-section';
import NearPlacesList from 'components/offer-page/near-places-list';
import NotFoundPage from './not-found-page';
import { Offer } from 'types/offer-types/offer';
import { Review } from 'types/offer-types/review';
import { AppRoute, MAX_NEAR_PLACE_COUNT } from '@constants';

type OfferPageProps = {
  offers: Offer[];
  reviews: Review[];
}

function OfferPage({ offers, reviews }: OfferPageProps): JSX.Element {
  const { offerId } = useParams<{ offerId: string }>();
  const foundOffer = offers.filter((offer) => offer.id === offerId).pop();

  if (!foundOffer) {
    return NotFoundPage();
  }

  const nearestOffers = offers
    .filter((offer) => offer.city.name === foundOffer.city.name && offer.id !== foundOffer.id)
    .slice(0, MAX_NEAR_PLACE_COUNT);
  const offerReviews = reviews.filter((review) => review.offerId === foundOffer.id);

  return (
    <Page>
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to={AppRoute.Main}>
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favourites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--offer">
          <OfferSection offer={foundOffer} reviews={offerReviews} nearestOffers={nearestOffers} />
          <NearPlacesList offers={nearestOffers} />
        </main>
      </div>
    </Page>
  );
}

export default OfferPage;

import { useParams } from 'react-router-dom';
import PageHeader from 'components/base/page-header';
import Page from 'components/base/page';
import OfferSection from 'components/offer-page/offer-section';
import NearPlacesList from 'components/offer-page/near-places-list';
import NotFoundPage from './not-found-page';
import { Review } from 'types/offer-types/review';
import { MAX_NEAR_PLACE_COUNT } from '@constants';
import { useOffers } from 'hooks/store-hooks/offer-hooks';

type OfferPageProps = {
  reviews: Review[];
}

function OfferPage({ reviews }: OfferPageProps): JSX.Element {
  const offers = useOffers();
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
        <PageHeader/>
        <main className="page__main page__main--offer">
          <OfferSection offer={foundOffer} reviews={offerReviews} nearestOffers={nearestOffers} />
          <NearPlacesList offers={nearestOffers} />
        </main>
      </div>
    </Page>
  );
}

export default OfferPage;

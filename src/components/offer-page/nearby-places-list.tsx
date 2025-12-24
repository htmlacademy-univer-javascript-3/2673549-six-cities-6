import { PlaceCard } from 'components/cards/place-card';
import { Offers } from 'types/offer-types/offer';
import { useFavoriteOfferUpdate } from 'hooks/use-favorite-offer-update';

type NearbyPlacesListProps = {
  offers: Offers;
};

export default function NearbyPlacesList({ offers }: NearbyPlacesListProps): JSX.Element {
  const handleFavoriteUpdate = useFavoriteOfferUpdate();

  return (
    <div className="container">
      <section className="near-places places" >
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => (
            <PlaceCard
              key={offer.id}
              offer={offer}
              blockName='near-places'
              imageWidth={260}
              imageHeight={200}
              onFavoriteClick={handleFavoriteUpdate}
            />))}
        </div>
      </section>
    </div>
  );
}

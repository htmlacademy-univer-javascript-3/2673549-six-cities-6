import { PlaceCard } from 'components/сards/place-card';
import { Offer } from 'types/offer-types/offer';

type NearPlacesListProps = {
  offers: Offer[];
};

export default function NearPlacesList({ offers }: NearPlacesListProps): JSX.Element {
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
            />))}
        </div>
      </section>
    </div>
  );
}

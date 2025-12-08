import { Link } from 'react-router-dom';
import { Offer } from 'types/offer-types/offer';
import { AppRoute, PlaceCardFeature } from '@constants';
import { PlaceCard } from 'components/сards/place-card';

type FavouriteLocationItemsProps = {
  city: string;
  offers: Offer[];
}

export function FavouriteLocationItems({ city, offers }: FavouriteLocationItemsProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            blockName='favorites'
            feature={PlaceCardFeature.FavouritesCard}
            imageWidth={150}
            imageHeight={110}
          />
        ))}
      </div>
    </li>
  );
}

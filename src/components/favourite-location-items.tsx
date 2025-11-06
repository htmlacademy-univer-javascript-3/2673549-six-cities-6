import { Link } from 'react-router-dom';
import { FavouriteCard } from './сards/favourite-card';
import { Offer } from 'types/offer-types/offer';
import { AppRoute } from '@constants';

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
          <FavouriteCard key={offer.id} offer={offer} />
        ))}
      </div>
    </li>
  );
}

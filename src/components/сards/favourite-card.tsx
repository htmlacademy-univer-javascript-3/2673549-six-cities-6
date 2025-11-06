import { Link } from 'react-router-dom';
import { CardPremium } from './card-premium.tsx';
import { CardFavourite } from './card-favourite.tsx';
import { CardRating } from './card-rating';
import { Offer } from 'types/offer-types/offer.ts';
import { AppRoute } from '@constants';

type FavouriteCardProps = {
  offer: Offer;
};

export function FavouriteCard({ offer }: FavouriteCardProps) {
  return (
    <article className="favorites__card place-card">
      <CardPremium isPremium={offer.isPremium} />
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="150" height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <CardFavourite isFavourite={offer.isFavourite} />
        </div>
        <CardRating rating={offer.rating} />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

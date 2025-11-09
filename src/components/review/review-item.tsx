import { Review } from 'types/offer-types/review';
import { getMonthWithYear } from 'lib/date-utils';
import { getPercentage } from 'lib/number-utils';
import { MaxRating } from '@constants';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem({ review }: ReviewItemProps) {

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {review.author}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${getPercentage(review.rating, MaxRating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date.toISOString()}>{getMonthWithYear(review.date)}</time>
      </div>
    </li>
  );
}

export default ReviewItem;

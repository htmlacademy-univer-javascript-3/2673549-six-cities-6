import ReviewItem from 'components/review/review-item';
import ReviewForm from 'components/review/review-form';
import { Review } from 'types/offer-types/review';
import { MAX_REVIEWS_COUNT_PER_PAGE } from '@constants';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({ reviews }: ReviewListProps) {
  const reviewsToShow = reviews
    .sort((first, second) => first.date.getTime() - second.date.getTime())
    .slice(0, MAX_REVIEWS_COUNT_PER_PAGE);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">
          {reviews.length}
        </span>
      </h2>
      <ul className="reviews__list">
        {
          reviewsToShow.map((review) => <ReviewItem key={review.id} review={review} />)
        }
      </ul>
      <ReviewForm />
    </section>
  );
}

export default ReviewList;

import ReviewItem from 'components/review/review-item';
import ReviewForm from 'components/review/review-form';
import { Review } from 'types/offer-types/review';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({ reviews }: ReviewListProps) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">
          {reviews.length}
        </span>
      </h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => <ReviewItem key={review.id} review={review} />)
        }
      </ul>
      <ReviewForm />
    </section>
  );
}

export default ReviewList;

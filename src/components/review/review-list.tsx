import { useEffect } from 'react';
import ReviewItem from 'components/review/review-item';
import ReviewForm from 'components/review/review-form';
import PrivateComponent from 'components/base/private-component';
import { useAppDispatch, useAppSelector } from 'hooks/index';
import { fetchOfferReviewsAction } from 'store/api-actions';
import {
  getReviews,
  getReviewSendingStatus,
  getSelectedOffer
} from 'store/selected-offer-data/selectors';
import { AuthorizationStatus } from '@constants';

function ReviewList() {
  const dispatch = useAppDispatch();
  const selectedOffer = useAppSelector(getSelectedOffer);
  const isReviewDataPosting = useAppSelector(getReviewSendingStatus);
  const reviews = useAppSelector(getReviews);

  useEffect(() => {
    if (selectedOffer?.id) {
      dispatch(fetchOfferReviewsAction(selectedOffer?.id));
    }
  }, [dispatch, selectedOffer?.id, isReviewDataPosting]);

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
      <PrivateComponent restrictedFor={AuthorizationStatus.NoAuth} >
        <ReviewForm />
      </PrivateComponent>
    </section>
  );
}

export default ReviewList;

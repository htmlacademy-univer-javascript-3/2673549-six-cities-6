import { SelectedOfferData } from 'types/state';
import { makeFakeDetailedOffer, makeFakeOffers } from 'lib/test-utils/mocks';
import { getRandomNumber } from 'lib/number-utils';
import { clearOfferData, selectedOfferData } from './selected-offer-data';

describe('SelectedOfferData Slice', () => {
  const initialState: SelectedOfferData = {
    selectedOffer: null,
    nearbyOffers: [],
    reviews: [],
    isOfferDataLoading: false,
    isNearbyOffersDataLoading: false,
    isReviewsDataLoading: false,
    isReviewDataSending: false,
    hasError: false
  };

  const fakeState: SelectedOfferData = {
    selectedOffer: makeFakeDetailedOffer(),
    nearbyOffers: makeFakeOffers(getRandomNumber(1, 10)),
    reviews: [],
    isOfferDataLoading: false,
    isNearbyOffersDataLoading: false,
    isReviewsDataLoading: false,
    isReviewDataSending: false,
    hasError: false
  };

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = fakeState;
    const result = selectedOfferData.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const result = selectedOfferData.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should clear offer data with "clearOfferData" action', () => {
    const expectedState = {
      ...fakeState,
      selectedOffer: null,
      nearbyOffers: [],
      reviews: [],
    };
    const result = selectedOfferData.reducer(fakeState, clearOfferData());
    expect(result).toEqual(expectedState);
  });
});

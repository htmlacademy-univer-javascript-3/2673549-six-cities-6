import { NameSpace } from 'store/constants';
import { State } from 'types/state';
import { Offers } from 'types/offer-types/offer';
import { DetailedOffer } from 'types/offer-types/detailed-offer';
import { Reviews } from 'types/offer-types/review';

type SelectedOfferState = Pick<State, NameSpace.SelectedOffer>;

export const getSelectedOffer = (state: SelectedOfferState): DetailedOffer | null => state[NameSpace.SelectedOffer].selectedOffer;

export const getNearbyOffers = (state: SelectedOfferState): Offers => state[NameSpace.SelectedOffer].nearbyOffers;

export const getReviews = (state: SelectedOfferState): Reviews => state[NameSpace.SelectedOffer].reviews;

export const getOfferDataLoadingStatus = (state: SelectedOfferState): boolean => state[NameSpace.SelectedOffer].isOfferDataLoading;

export const getNearbyOffersLoadingStatus = (state: SelectedOfferState): boolean => state[NameSpace.SelectedOffer].isNearbyOffersDataLoading;

export const getReviewLoadingStatus = (state: SelectedOfferState): boolean => state[NameSpace.SelectedOffer].isReviewsDataLoading;

export const getReviewSendingStatus = (state: SelectedOfferState): boolean => state[NameSpace.SelectedOffer].isReviewDataSending;

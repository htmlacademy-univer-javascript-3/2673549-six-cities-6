import { NameSpace } from 'store/constants';
import { State } from 'types/state';
import { Offers } from 'types/offer-types/offer';
import { DetailedOffer } from 'types/offer-types/detailed-offer';
import { Reviews } from 'types/offer-types/review';

export const getSelectedOffer = (state: State): DetailedOffer | null => state[NameSpace.SelectedOffer].selectedOffer;

export const getNearbyOffers = (state: State): Offers => state[NameSpace.SelectedOffer].nearbyOffers;

export const getReviews = (state: State): Reviews => state[NameSpace.SelectedOffer].reviews;

export const getOfferDataLoadingStatus = (state: State): boolean => state[NameSpace.SelectedOffer].isOfferDataLoading;

export const getNearbyOffersLoadingStatus = (state: State): boolean => state[NameSpace.SelectedOffer].isNearbyOffersDataLoading;

export const getReviewLoadingStatus = (state: State): boolean => state[NameSpace.SelectedOffer].isReviewsDataLoading;

export const getReviewSendingStatus = (state: State): boolean => state[NameSpace.SelectedOffer].isReviewDataSending;

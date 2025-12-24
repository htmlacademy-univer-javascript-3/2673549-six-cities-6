import { Offers } from 'types/offer-types/offer';
import { DetailedOffer } from 'types/offer-types/detailed-offer';
import { UserData } from 'types/auth-types/user-data';
import { Reviews } from 'types/offer-types/review';
import { City } from 'types/city';
import { store } from 'store/index';
import { AuthorizationStatus } from '@constants';

export type ServiceData = {
  error: string | null;
}

export type OffersData = {
  city: City;
  offers: Offers;
  isOffersDataLoading: boolean;
  hasError: boolean;
};

export type FavoriteOffersData = {
  offers: Offers;
  isOffersDataLoading: boolean;
  isOfferStatusUpdating: boolean;
  hasError: boolean;
};

export type SelectedOfferData = {
  selectedOffer: DetailedOffer | null;
  nearbyOffers: Offers;
  reviews: Reviews;
  isOfferDataLoading: boolean;
  isNearbyOffersDataLoading: boolean;
  isReviewsDataLoading: boolean;
  isReviewDataSending: boolean;
  hasError: boolean;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

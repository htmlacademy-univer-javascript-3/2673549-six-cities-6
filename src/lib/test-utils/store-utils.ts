import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createAPI } from 'services/api';
import { State } from 'types/state';
import { AuthorizationStatus, DefaultCity } from '@constants';
import { makeFakeOffer, makeFakeOffers } from './mocks';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeStore = (initialState?: Partial<State>): Partial<State> => ({
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userData: null,
  },
  OFFERS: {
    city: DefaultCity,
    offers: makeFakeOffers(10).concat(makeFakeOffer(DefaultCity)),
    isOffersDataLoading: false,
  },
  FAVORITE_OFFERS: {
    offers: [],
    isOffersDataLoading: false,
    isOfferStatusUpdating: false,
  },
  SELECTED_OFFER: {
    selectedOffer: null,
    nearbyOffers: [],
    reviews: [],
    isOfferDataLoading: false,
    isNearbyOffersDataLoading: false,
    isReviewsDataLoading: false,
    isReviewDataSending: false
  },
  SERVICE: {
    error: null,
  },
  ...initialState ?? {},
});

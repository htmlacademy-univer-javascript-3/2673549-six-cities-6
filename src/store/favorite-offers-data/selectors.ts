import { NameSpace } from 'store/constants';
import { State } from 'types/state';
import { Offers } from 'types/offer-types/offer';

type FavoriteOffersState = Pick<State, NameSpace.FavoriteOffers>;

export const getFavoriteOffers = (state: FavoriteOffersState): Offers => state[NameSpace.FavoriteOffers].offers;

export const getFavoriteOffersDataLoadingStatus = (state: FavoriteOffersState): boolean => state[NameSpace.FavoriteOffers].isOffersDataLoading;

export const getFavoriteOfferUpdatingStatus = (state: FavoriteOffersState): boolean => state[NameSpace.FavoriteOffers].isOfferStatusUpdating;

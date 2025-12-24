import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from 'store/constants';
import { userProcess } from 'store/user-process/user-process';
import { offersData } from 'store/offers-data/offers-data';
import { selectedOfferData } from 'store/selected-offer-data/selected-offer-data';
import { favoriteOffersData } from 'store/favorite-offers-data/favorite-offers-data';
import { serviceData } from './service-data/service-data';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.SelectedOffer]: selectedOfferData.reducer,
  [NameSpace.FavoriteOffers]: favoriteOffersData.reducer,
  [NameSpace.Service]: serviceData.reducer,
});

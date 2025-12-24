import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from 'store/constants';
import { userProcess } from 'store/user-process/user-process';
import { offersData } from './offers-data/offers-data';
import { selectedOfferData } from './selected-offer-data/selected-offer-data';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.SelectedOffer]: selectedOfferData.reducer,
});

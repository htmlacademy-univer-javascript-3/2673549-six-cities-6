import { createReducer } from '@reduxjs/toolkit';
import { setCity, setError, loadOffers, setOffersDataLoadingStatus, requireAuthorization, setUserData } from 'store/action';
import { Offer } from 'types/offer-types/offer';
import { City } from 'types/offer-types/сity';
import { UserData } from 'types/auth-types/user-data';
import { AuthorizationStatus, DefaultCity } from '@constants';

interface State {
  city: City;
  offers: Offer[];
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  error: string | null;
}

const initialState: State = {
  city: DefaultCity,
  offers: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;

      if (action.payload === AuthorizationStatus.NoAuth) {
        state.userData = null;
      }
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export default reducer;

import { createReducer } from '@reduxjs/toolkit';
import { setCity, setError, loadOffers, setOffersDataLoadingStatus } from 'store/action';
import { Offer } from 'types/offer-types/offer';
import { City } from 'types/offer-types/сity';
import { CITIES, CityNames } from '@constants';

interface State {
  city: City;
  offers: Offer[];
  isOffersDataLoading: boolean;
  error: string | null;
}

const initialState: State = {
  city: CITIES.find((city) => city.name === CityNames.Paris)!,
  offers: [],
  isOffersDataLoading: false,
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export default reducer;

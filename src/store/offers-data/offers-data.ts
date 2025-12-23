import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from 'types/city';
import { OffersData } from 'types/state';
import { fetchOffersAction } from 'store/api-actions';
import { NameSpace } from 'store/constants';
import { DefaultCity } from '@constants';

const initialState: OffersData = {
  city: DefaultCity,
  offers: [],
  isOffersDataLoading: false,
  hasError: false,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    setHasError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      });
  }
});

export const { setCity, setHasError } = offersData.actions;

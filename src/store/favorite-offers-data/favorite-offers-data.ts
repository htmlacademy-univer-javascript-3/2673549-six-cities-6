import { createSlice } from '@reduxjs/toolkit';
import { FavoriteOffersData } from 'types/state';
import { fetchFavoriteOffersAction, logoutAction, updateFavoriteOfferStatus } from 'store/api-actions';
import { NameSpace } from 'store/constants';

const initialState: FavoriteOffersData = {
  offers: [],
  isOffersDataLoading: false,
  isOfferStatusUpdating: false,
  hasError: false,
};

export const favoriteOffersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    clearFavoriteOffers: (state) => {
      state.offers = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })

      .addCase(updateFavoriteOfferStatus.pending, (state) => {
        state.isOfferStatusUpdating = true;
        state.hasError = false;
      })
      .addCase(updateFavoriteOfferStatus.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        const updatedOfferIndex = state.offers.findIndex((offer) => offer.id === updatedOffer.id);

        if (updatedOffer.isFavorite && updatedOfferIndex === -1) {
          state.offers = [updatedOffer, ...state.offers];
        } else if (updatedOffer.isFavorite) {
          state.offers[updatedOfferIndex] = updatedOffer;
        } else {
          state.offers = state.offers.filter((offer) => offer.id !== updatedOffer.id);
        }

        state.isOfferStatusUpdating = false;
        state.hasError = false;
      })
      .addCase(updateFavoriteOfferStatus.rejected, (state) => {
        state.isOfferStatusUpdating = false;
        state.hasError = true;
      })

      .addCase(logoutAction.fulfilled, (state) => {
        state.offers = [];
      });
  }
});

export const { clearFavoriteOffers } = favoriteOffersData.actions;

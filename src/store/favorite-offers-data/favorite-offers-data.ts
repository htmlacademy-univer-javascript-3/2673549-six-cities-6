import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteOffersData as FavoriteOffersData } from 'types/state';
import { fetchFavoriteOffersAction, updateFavoriteOfferStatus } from 'store/api-actions';
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
    clearFavouriteOffers: (state) => {
      state.offers = [];
    },
    setHasError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
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
        } else {
          state.offers[updatedOfferIndex] = updatedOffer;
        }

        state.isOfferStatusUpdating = false;
        state.hasError = false;
      })
      .addCase(updateFavoriteOfferStatus.rejected, (state) => {
        state.isOfferStatusUpdating = false;
        state.hasError = true;
      });
  }
});

export const { clearFavouriteOffers, setHasError } = favoriteOffersData.actions;

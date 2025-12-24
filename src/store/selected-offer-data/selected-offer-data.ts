import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DetailedOffer } from 'types/offer-types/detailed-offer';
import { Offers } from 'types/offer-types/offer';
import { SelectedOfferData } from 'types/state';
import {
  fetchOfferAction,
  fetchNearbyOffersAction,
  fetchOfferReviewsAction,
  sendOfferReviewAction,
  updateFavoriteOfferStatus,
} from 'store/api-actions';
import { NameSpace } from 'store/constants';

const initialState: SelectedOfferData = {
  selectedOffer: null,
  nearbyOffers: [],
  reviews: [],
  isOfferDataLoading: false,
  isNearbyOffersDataLoading: false,
  isReviewsDataLoading: false,
  isReviewDataSending: false,
  hasError: false
};

export const selectedOfferData = createSlice({
  name: NameSpace.SelectedOffer,
  initialState,
  reducers: {
    clearOfferData: (state) => {
      state.selectedOffer = null;
      state.nearbyOffers = [];
      state.reviews = [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action: PayloadAction<DetailedOffer | null>) => {
        state.selectedOffer = action.payload;
        state.isOfferDataLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOfferDataLoading = false;
        state.selectedOffer = null;
      })

      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isNearbyOffersDataLoading = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action: PayloadAction<Offers>) => {
        state.nearbyOffers = action.payload;
        state.isNearbyOffersDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.nearbyOffers = [];
        state.isNearbyOffersDataLoading = false;
      })

      .addCase(fetchOfferReviewsAction.pending, (state) => {
        state.isReviewsDataLoading = true;
      })
      .addCase(fetchOfferReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsDataLoading = false;
      })
      .addCase(fetchOfferReviewsAction.rejected, (state) => {
        state.reviews = [];
        state.isReviewsDataLoading = false;
      })

      .addCase(sendOfferReviewAction.pending, (state) => {
        state.isReviewDataSending = true;
      })
      .addCase(sendOfferReviewAction.fulfilled, (state, action) => {
        state.reviews = [action.payload, ...state.reviews];
        state.isReviewDataSending = false;
      })
      .addCase(sendOfferReviewAction.rejected, (state) => {
        state.isReviewDataSending = false;
      })

      .addCase(updateFavoriteOfferStatus.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        const updatedOfferIndex = state.nearbyOffers.findIndex((offer) => offer.id === updatedOffer.id);

        if (state.selectedOffer?.id === updatedOffer.id) {
          state.selectedOffer = updatedOffer;
        }

        if (updatedOfferIndex !== -1) {
          state.nearbyOffers[updatedOfferIndex] = action.payload;
        }
      });
  }
});

export const { clearOfferData } = selectedOfferData.actions;

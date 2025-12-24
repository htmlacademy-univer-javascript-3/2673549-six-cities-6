import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from 'types/state';
import { OfferId, Offers } from 'types/offer-types/offer';
import { Review, Reviews } from 'types/offer-types/review';
import { DetailedOffer } from 'types/offer-types/detailed-offer';
import { AuthData } from 'types/auth-types/auth-data';
import { UserData } from 'types/auth-types/user-data';
import { redirectToRoute } from 'store/middlewares/action';
import { dropToken, saveToken } from 'services/token';
import ApiRouteBuilder from 'services/api-route-builder';
import { AppRoute } from '@constants';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offers>(ApiRouteBuilder.Offers());
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<DetailedOffer | null, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchDetailedOffer',
  async (offerId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<DetailedOffer>(ApiRouteBuilder.Offer(offerId));
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }

    return null;
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<Offers, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Offers>(ApiRouteBuilder.OffersNearby(offerId));
    return data;
  },
);

export const fetchOfferReviewsAction = createAsyncThunk<Reviews, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferReviews',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Reviews>(ApiRouteBuilder.Reviews(offerId));
    return data;
  },
);

export const sendOfferReviewAction = createAsyncThunk<
  Review,
  {
    offerId: string;
    rating: number;
    comment: string;
  }, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/sendOfferReview',
    async ({ offerId, rating, comment }, { extra: api }) => {
      const { data } = await api.post<Review>(ApiRouteBuilder.SendReview(offerId), { rating, comment });
      return data;
    },
  );

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(ApiRouteBuilder.Login());
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(ApiRouteBuilder.Login(), { email, password });
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(ApiRouteBuilder.Logout());
    dropToken();
  },
);

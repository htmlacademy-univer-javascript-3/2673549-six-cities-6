import { createAction } from '@reduxjs/toolkit';
import { City } from 'types/offer-types/сity';
import { Offers } from 'types/offer-types/offer';
import { AuthorizationStatus } from '@constants';
import { UserData } from 'types/auth-types/user-data';

export const setCity = createAction<{ city: City }>('main/changeCity');

export const loadOffers = createAction<Offers>('main/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setError = createAction<string | null>('main/setError');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserData = createAction<UserData | null>('user/setUserData');

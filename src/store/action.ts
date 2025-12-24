import { createAction } from '@reduxjs/toolkit';
import { City } from 'types/offer-types/сity';
import { Offers } from 'types/offer-types/offer';

export const setCity = createAction<{ city: City }>('main/changeCity');

export const loadOffers = createAction<Offers>('main/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setError = createAction<string | null>('main/setError');

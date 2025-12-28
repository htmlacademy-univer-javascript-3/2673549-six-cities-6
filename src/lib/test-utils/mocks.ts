import { image, internet } from 'faker';
import { User } from 'types/user';
import { City } from 'types/city';
import { Offer, Offers } from 'types/offer-types/offer';
import { getRandomCityName, getRandomLocation } from './city-utils';
import { getRandomGoods } from './offer-utils';
import { getRandomString } from 'lib/string-utils';
import { getRandomNumber } from 'lib/number-utils';
import { getRandomBoolean } from 'lib/boolean-utils';
import { MAX_RATING } from '@constants';
import { DetailedOffer } from 'types/offer-types/detailed-offer';
import { getRandomArray } from 'lib/array-utils';
import { UserData } from 'types/auth-types/user-data';

export const makeFakeCity = (): City => ({
  name: getRandomCityName(),
  location: getRandomLocation()
} as City);

export const makeFakeUser = (): User => ({
  avatarUrl: image.avatar(),
  isPro: getRandomBoolean(),
  name: getRandomString(20)
});

export const makeFakeOffer = (): Offer => ({
  id: getRandomString(10),
  city: makeFakeCity(),
  goods: getRandomGoods(getRandomNumber(0, 10)),
  isFavorite: getRandomBoolean(),
  isPremium: getRandomBoolean(),
  location: getRandomLocation(),
  previewImage: image.imageUrl(),
  price: getRandomNumber(1, 10000),
  rating: getRandomNumber(1, MAX_RATING),
  title: getRandomString(50),
  type: getRandomString(10),
});

export const makeFakeFavouriteOffer = (): Offer => ({
  ...makeFakeOffer(),
  isFavorite: true,
});

export const makeFakeDetailedOffer = (): DetailedOffer => ({
  ...makeFakeOffer(),
  bedrooms: getRandomNumber(1, 10),
  description: getRandomString(120),
  host: makeFakeUser(),
  images: getRandomArray(6, () => image.imageUrl()),
  maxAdults: getRandomNumber(1, 10),
});

export const makeFakeOffers = (count: number): Offers => getRandomArray(count, () => makeFakeOffer());

export const makeFakeFavouriteOffers = (count: number): Offers => getRandomArray(count, () => makeFakeFavouriteOffer());

export const makeFakeAuthToken = (): string => getRandomString(30);

export const makeFakeUserData = (): UserData => ({
  name: getRandomString(15),
  avatarUrl: image.avatar(),
  isPro: getRandomBoolean(),
  email: internet.email(),
  token: makeFakeAuthToken(),
});

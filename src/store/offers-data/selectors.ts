import { City } from 'types/city';
import { State } from 'types/state';
import { Offers } from 'types/offer-types/offer';
import { NameSpace } from 'store/constants';

export const getSelectedCity = (state: State): City => state[NameSpace.Offers].city;

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;

export const getSelectedCityOffersOffers = (state: State): Offers => {
  const city = state[NameSpace.Offers].city;
  return state[NameSpace.Offers].offers.filter((offer) =>
    offer.city.name === city.name
  );
};

export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;

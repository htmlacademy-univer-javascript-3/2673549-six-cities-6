import { City } from 'types/city';
import { State } from 'types/state';
import { Offers } from 'types/offer-types/offer';
import { NameSpace } from 'store/constants';

type OffersState = Pick<State, NameSpace.Offers>;

export const getSelectedCity = (state: OffersState): City => state[NameSpace.Offers].city;

export const getOffers = (state: OffersState): Offers => state[NameSpace.Offers].offers;

export const getSelectedCityOffers = (state: OffersState): Offers => {
  const city = state[NameSpace.Offers].city;
  return state[NameSpace.Offers].offers.filter((offer) =>
    offer.city.name === city.name
  );
};

export const getOffersDataLoadingStatus = (state: OffersState): boolean => state[NameSpace.Offers].isOffersDataLoading;

import { NameSpace } from 'store/constants';
import {
  getSelectedCity,
  getOffers,
  getSelectedCityOffers,
  getOffersDataLoadingStatus,
} from './selectors';
import { makeFakeCity, makeFakeOffers } from 'lib/test-utils/mocks';
import { getRandomNumber } from 'lib/number-utils';

describe('OffersData selectors', () => {
  const state = {
    [NameSpace.Offers]: {
      offers: makeFakeOffers(getRandomNumber(20, 100)),
      city: makeFakeCity(),
      isOffersDataLoading: true,
    }
  };

  it('should return selected city from state', () => {
    const { city } = state[NameSpace.Offers];
    const result = getSelectedCity(state);
    expect(result).toEqual(city);
  });

  it('should return offers from state', () => {
    const { offers } = state[NameSpace.Offers];
    const result = getOffers(state);
    expect(result).toEqual(offers);
  });

  it('should return selected city offers from state', () => {
    const { offers, city } = state[NameSpace.Offers];
    const selectedCityOffers = offers.filter((offer) => offer.city.name === city.name);
    const result = getSelectedCityOffers(state);
    expect(result).toEqual(selectedCityOffers);
  });

  it('should return offers loading status from state', () => {
    const { isOffersDataLoading } = state[NameSpace.Offers];
    const result = getOffersDataLoadingStatus(state);
    expect(result).toBe(isOffersDataLoading);
  });
});

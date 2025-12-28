import { NameSpace } from 'store/constants';
import {
  getFavoriteOffers,
  getFavoriteOfferUpdatingStatus,
  getFavoriteOffersDataLoadingStatus
} from './selectors';
import { makeFakeFavoriteOffers } from 'lib/test-utils/mocks';
import { getRandomNumber } from 'lib/number-utils';

describe('FavoriteOffersData selectors', () => {
  const state = {
    [NameSpace.FavoriteOffers]: {
      offers: makeFakeFavoriteOffers(getRandomNumber(0, 15)),
      isOffersDataLoading: true,
      isOfferStatusUpdating: true,
    }
  };

  it('should return favorite offers from state', () => {
    const { offers } = state[NameSpace.FavoriteOffers];
    const result = getFavoriteOffers(state);
    expect(result).toEqual(offers);
  });

  it('should return favourite offer updating status from state', () => {
    const { isOfferStatusUpdating } = state[NameSpace.FavoriteOffers];
    const result = getFavoriteOfferUpdatingStatus(state);
    expect(result).toBe(isOfferStatusUpdating);
  });

  it('should return favourite offers loading status from state', () => {
    const { isOffersDataLoading } = state[NameSpace.FavoriteOffers];
    const result = getFavoriteOffersDataLoadingStatus(state);
    expect(result).toBe(isOffersDataLoading);
  });
});

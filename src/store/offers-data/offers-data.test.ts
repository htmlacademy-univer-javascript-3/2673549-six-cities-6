import { OffersData } from 'types/state';
import { makeFakeCity, makeFakeOffers } from 'lib/test-utils/mocks';
import { offersData, setCity } from './offers-data';
import { DefaultCity } from '@constants';
import { getRandomNumber } from 'lib/number-utils';

describe('OffersData Slice', () => {
  const initialState: OffersData = {
    city: DefaultCity,
    offers: [],
    isOffersDataLoading: false,
  };

  const fakeState: OffersData = {
    city: makeFakeCity(),
    offers: makeFakeOffers(getRandomNumber(0, 50)),
    isOffersDataLoading: false,
  };

  const fakeCity = makeFakeCity();

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = fakeState;
    const result = offersData.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const result = offersData.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should set city with "setCity" action', () => {
    const expectedState = { ...fakeState, city: fakeCity };
    const result = offersData.reducer(fakeState, setCity(fakeCity));
    expect(result).toEqual(expectedState);
  });
});

import { ServiceData } from 'types/state';
import { serviceData, setError } from './service-data';

describe('ServiceData Slice', () => {
  const initialState: ServiceData = {
    error: null,
  };

  const fakeState: ServiceData = {
    error: 'error'
  };

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = fakeState;
    const result = serviceData.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const result = serviceData.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should set error with "setError" action', () => {
    const expectedState = {
      error: 'error example'
    };
    const result = serviceData.reducer(fakeState, setError(expectedState.error));
    expect(result).toEqual(expectedState);
  });
});

import { UserProcess } from 'types/state';
import { AuthorizationStatus } from '@constants';
import { makeFakeUserData } from 'lib/test-utils/mocks';
import { userProcess } from './user-process';

describe('UserProcess Slice', () => {
  const initialState: UserProcess = {
    authorizationStatus: AuthorizationStatus.Unknown,
    userData: null,
  };

  const fakeAuthState: UserProcess = {
    authorizationStatus: AuthorizationStatus.Auth,
    userData: makeFakeUserData(),
  };

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = fakeAuthState;
    const result = userProcess.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const result = userProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });
});

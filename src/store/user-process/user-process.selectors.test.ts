import { NameSpace } from 'store/constants';
import {
  getAuthorizationStatus,
  getUserData
} from './selectors';
import { makeFakeUserData } from 'lib/test-utils/mocks';
import { AuthorizationStatus } from '@constants';

describe('UserProcess selectors', () => {
  const state = {
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: makeFakeUserData(),
    }
  };

  it('should return authorization status from state', () => {
    const { authorizationStatus } = state[NameSpace.User];
    const result = getAuthorizationStatus(state);
    expect(result).toEqual(authorizationStatus);
  });

  it('should return user data from state', () => {
    const { userData } = state[NameSpace.User];
    const result = getUserData(state);
    expect(result).toEqual(userData);
  });

});

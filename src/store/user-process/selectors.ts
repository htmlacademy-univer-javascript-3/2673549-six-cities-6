import { AuthorizationStatus } from '@constants';
import { NameSpace } from 'store/constants';
import { State } from 'types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getUserData = (state: State) => state[NameSpace.User].userData;

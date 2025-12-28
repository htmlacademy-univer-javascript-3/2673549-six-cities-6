import { AuthorizationStatus } from '@constants';
import { NameSpace } from 'store/constants';
import { State } from 'types/state';

type UserState = Pick<State, NameSpace.User>;

export const getAuthorizationStatus = (state: UserState): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getUserData = (state: UserState) => state[NameSpace.User].userData;

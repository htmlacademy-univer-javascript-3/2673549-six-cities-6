import { State } from 'types/state';
import { NameSpace } from 'store/constants';

type ServiceState = Pick<State, NameSpace.Service>;

export const getError = (state: ServiceState): string | null => state[NameSpace.Service].error;

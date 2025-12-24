import { State } from 'types/state';
import { NameSpace } from 'store/constants';

export const getError = (state: State): string | null => state[NameSpace.Service].error;

import { store } from 'store';
import { setError } from 'store/service-data/service-data';
import { clearErrorAction } from 'store/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};

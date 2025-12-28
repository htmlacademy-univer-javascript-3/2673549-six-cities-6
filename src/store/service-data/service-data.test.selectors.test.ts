import { getError } from './selectors';
import { NameSpace } from 'store/constants';

describe('ServiceData selectors', () => {
  const state = {
    [NameSpace.Service]: {
      error: 'error',
    }
  };

  it('should return error from state', () => {
    const { error } = state[NameSpace.Service];
    const result = getError(state);
    expect(result).toEqual(error);
  });
});

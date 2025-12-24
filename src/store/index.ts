import { configureStore } from '@reduxjs/toolkit';
import reducer from 'store/reducer';

import { createAPI } from '../services/api';
import { redirectMiddleware } from './middlewares/redirect-middleware';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirectMiddleware),
});

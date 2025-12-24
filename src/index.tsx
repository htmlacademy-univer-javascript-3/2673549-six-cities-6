import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'features/app';
import { reviews } from 'mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchOffersAction } from 'store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews} />
    </Provider>
  </React.StrictMode>
);

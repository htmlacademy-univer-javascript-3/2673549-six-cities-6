import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ServiceData } from 'types/state';
import { NameSpace } from 'store/constants';

const initialState: ServiceData = {
  error: null,
};

export const serviceData = createSlice({
  name: NameSpace.Service,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { setError } = serviceData.actions;

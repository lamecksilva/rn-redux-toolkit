import {createSlice} from '@reduxjs/toolkit';

const store = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    name: '',
  },
  reducers: {
    request: state => {
      state.loading = true;
    },
    success: state => {
      state.name = 'John Doe';
      state.loading = false;
    },
    failure: state => {
      state.name = '';
      state.loading = false;
    },
  },
});

export const {request, failure, success} = store.actions;
export default store.reducer;

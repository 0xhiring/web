import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  theme: 'dark' | 'light';
}

const initialState: UserState = (function () {
  return {
    theme: 'dark',
  };
})();

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme(state, action: PayloadAction<void>) {
      if (state.theme === 'dark') {
        state.theme = 'light';
      } else {
        state.theme = 'dark';
      }
    },
  },
});

const selectors = (function <S extends { user: UserState }>() {
  const getState = (state: S) => state.user;
  const selectTheme = createSelector(getState, (state) => state.theme);

  return {
    selectTheme,
  };
})();

export default {
  actions,
  reducer,
  selectors,
};

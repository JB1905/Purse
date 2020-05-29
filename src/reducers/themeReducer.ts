import { SET_THEME } from '../actions';

import { Theme } from '../enums/Theme';

interface BottomTabsState {
  theme: Theme;
}

const initialState: BottomTabsState = {
  theme: Theme.Light,
};

interface SetThemeAction {
  type: typeof SET_THEME;
  payload: Theme;
}

type ThemeActionTypes = SetThemeAction;

export const themeReducer = (
  state = initialState,
  action: ThemeActionTypes
) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};

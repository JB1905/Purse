import { SET_THEME } from '../actions';

import { Theme } from '../enums/Theme';

export interface ThemeState {
  readonly theme: Theme;
}

export interface SetThemeAction {
  readonly type: typeof SET_THEME;
  readonly payload: Theme;
}

import { TOGGLE_LOCAL_AUTH } from '../actions';

export interface LocalAuthState {
  readonly localAuth: boolean;
}

export interface ToggleLocalAuthAction {
  readonly type: typeof TOGGLE_LOCAL_AUTH;
}

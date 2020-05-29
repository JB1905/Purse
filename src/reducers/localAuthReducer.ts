import { TOGGLE_LOCAL_AUTH } from '../actions';

interface LocalAuthState {
  localAuth: boolean;
}

const initialState: LocalAuthState = {
  localAuth: false,
};

interface ToggleLocalAuthAction {
  type: typeof TOGGLE_LOCAL_AUTH;
}

type LocalAuthActionTypes = ToggleLocalAuthAction;

export const localAuthReducer = (
  state = initialState,
  action: LocalAuthActionTypes
) => {
  switch (action.type) {
    case TOGGLE_LOCAL_AUTH:
      return {
        ...state,
        localAuth: !state.localAuth,
      };

    default:
      return state;
  }
};

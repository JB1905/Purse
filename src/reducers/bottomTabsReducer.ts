import { ADD_ITEM, REMOVE_ITEM, REORDER_ITEMS } from '../actions';

import { BottomTabsState } from '../interfaces/BottomTabsState';

import type { BottomTabsActionTypes } from '../types/BottomTabsActionTypes';

const initialState: BottomTabsState = {
  items: [],
};

export const bottomTabsReducer = (
  state = initialState,
  action: BottomTabsActionTypes
) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item !== action.payload),
      };

    case REORDER_ITEMS:
      return {
        ...state,
      };

    default:
      return state;
  }
};

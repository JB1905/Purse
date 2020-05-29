import { ADD_ITEM, REMOVE_ITEM, REORDER_ITEMS } from '../actions';

interface BottomTabsState {
  items: string[];
}

const initialState: BottomTabsState = {
  items: [],
};

interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: any;
}

interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  payload: any;
}

interface ReorderItemsAction {
  type: typeof REORDER_ITEMS;
}

type BottomTabsActionTypes =
  | AddItemAction
  | RemoveItemAction
  | ReorderItemsAction;

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

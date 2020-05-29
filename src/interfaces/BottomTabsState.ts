import { ADD_ITEM, REMOVE_ITEM, REORDER_ITEMS } from '../actions';

export interface BottomTabsState {
  readonly items: string[];
}

export interface AddItemAction {
  readonly type: typeof ADD_ITEM;
  readonly payload: any;
}

export interface RemoveItemAction {
  readonly type: typeof REMOVE_ITEM;
  readonly payload: any;
}

export interface ReorderItemsAction {
  readonly type: typeof REORDER_ITEMS;
}

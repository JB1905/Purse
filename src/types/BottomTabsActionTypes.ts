import {
  AddItemAction,
  RemoveItemAction,
  ReorderItemsAction,
} from '../interfaces/BottomTabsState';

export type BottomTabsActionTypes =
  | AddItemAction
  | RemoveItemAction
  | ReorderItemsAction;

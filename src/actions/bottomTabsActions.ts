export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const REORDER_ITEMS = 'REORDER_ITEMS';

export const addItem = (payload) => ({
  type: ADD_ITEM,
  payload,
});

export const removeItem = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});

export const reorderItems = (payload) => ({
  type: REORDER_ITEMS,
  payload,
});

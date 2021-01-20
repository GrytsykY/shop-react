export const addedToCart = obj =>({
  type: 'ADD_TO_CART',
  payload: obj
});

export const removeFromCart = id =>({
  type: 'REMOVE_FROM_CART',
  payload: id
});

export const plusCartItem = id =>({
  type: 'PLUS_CART_ITEM',
  payload: id
});

export const minusCartItem = id =>({
  type: 'MINUS_CART_CART_ITEM',
  payload: id
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});
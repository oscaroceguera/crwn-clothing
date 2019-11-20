export const addItemToCart = (cartITems, cartItemToAdd) => {
  const existingCartitem = cartITems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartitem) {
    return cartITems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartITems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartITems, cartItemToRemove) => {
  const existingCartitem = cartITems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartitem.quantity === 1) {
    return cartITems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartITems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

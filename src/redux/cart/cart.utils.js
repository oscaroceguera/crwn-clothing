export const addItemToCart = (cartITems, cartItemToAdd) => {
  const existingCartitem = cartITems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  )

  if(existingCartitem) {
    return cartITems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    )
  }

  return [...cartITems, { ...cartItemToAdd, quantity: 1}]
}
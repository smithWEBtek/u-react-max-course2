import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 12.30,
  addItem: (item) => { },
  removeItem: (id) => { }
})

export default CartContext;
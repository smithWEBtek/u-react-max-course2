import Modal from '../UI/Modal/Modal';

import classes from './Cart.module.css';

const Cart = props => {
  const cartData = [
    { id: 'c1', name: 'Sushi Treat', amount: 1, price: 12.99 },
    { id: 'c2', name: 'Burger Bomb', amount: 1, price: 15.99 },
    { id: 'c3', name: 'Caeser Salad', amount: 1, price: 5.99 },
    { id: 'c4', name: 'Mock Turtle Soup', amount: 1, price: 4.99 }
  ]

  const cartItems = cartData.map(item => {
    return <li>{item.name}</li>
  })

  return (
    <Modal>
      <div>
        <ul className={classes['cart-items']}>
          {cartItems}
        </ul>
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal >
  )
};

export default Cart;
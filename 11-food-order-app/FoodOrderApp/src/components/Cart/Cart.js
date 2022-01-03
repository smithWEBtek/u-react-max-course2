import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';

const Cart = props => {
  const cartCtx = useContext(CartContext);


  // const cartData = [
  //   { id: 'c1', name: 'Sushi Sweet', amount: 1, price: 12.99 },
  //   { id: 'c2', name: 'Burgee Bomb', amount: 1, price: 15.99 },
  //   { id: 'c3', name: 'Cobb Salad', amount: 1, price: 5.99 },
  //   { id: 'c4', name: 'Mock Muhi Soup', amount: 1, price: 4.99 }
  // ]

  const cartItems = cartCtx.items.map((item, index) => {
    return <li key={`${item.name}_${item.id}_` + index}>{item.name}</li>
  })

  return (
    <Modal onClose={props.onClose}>
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
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal >
  )
};

export default Cart;
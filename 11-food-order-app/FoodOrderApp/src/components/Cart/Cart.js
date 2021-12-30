import classes from './Cart.module.css';

const Cart = props => {
  const itemsData = [
    { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 },
    { id: 'c2', name: 'Burger', amount: 1, price: 15.99 },
    { id: 'c3', name: 'Soup', amount: 1, price: 7.99 },
  ];

  const cartItems = itemsData.map(item => {
    return <li>{item.name}</li>
  })

  return (
    <div className={classes.cart}>
      <ul className={classes['cart-items']}>
        {cartItems}
      </ul>
      <div>
        <span>Total Amount</span>
        <span>$35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div >
  )
};

export default Cart;

import React, { useContext } from 'react';
import '../CartItems/CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitem-format">
                <img src={e.image || 'placeholder.jpg'} alt={e.name} className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                <p>{e.new_price * cartItems[e.id]}</p>
                <img src={remove_icon} alt="Remove" onClick={() => removeFromCart(e.id)} />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-total">
        <h1>Cart Totals</h1>
        <div>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount().toFixed(2)}</p>
          </div>
          <hr />
          <div className='cartitems-total-item'>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className='cartitems-total-item'>
            <h3>Total</h3>
            <h3>${getTotalCartAmount().toFixed(2)}</h3>
          </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
      </div>
      <div className="cartitems-promocode">
        <p>If you have a promo code, enter it here</p>
        <div className="cartitems-promobox">
          <input type="text" placeholder='Promo code' />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

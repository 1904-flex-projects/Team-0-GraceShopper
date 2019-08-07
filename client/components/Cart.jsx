import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  signedIn: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
  sessionId: PropTypes.number.isRequired,
  getCartByUser: PropTypes.func.isRequired,
  getCartBySession: PropTypes.func.isRequired,
};

class Cart extends Component {
  componentDidMount() {
    const {
      signedIn, userId, sessionId, getCartByUser, getCartBySession,
    } = this.props;
    if (signedIn) {
      getCartByUser(userId);
    } else {
      getCartBySession(sessionId);
    }
  }

  render() {
    const { cartItems } = this.props;
    return (
      <div className="">
        <h1>Shopping Cart</h1>
        {cartItems.map(item => (
          <div>
            <img src={item.imageUrl} alt="" />
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>{item.price}</span>
            <span>{item.price * item.quantity}</span>
          </div>
        ))}
      </div>
    );
  }
}

Cart.propTypes = propTypes;

export default Cart;

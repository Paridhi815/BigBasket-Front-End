import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = props => (
  <div className="Header">
    <div className="random-div" >
      <i className="material-icons shopping-cart">shopping_cart</i>
      <span className="Shopper-Text" >E-shopper</span>
    </div>
    <button
      className="Header-All-Orders-Button"
      onClick={() => props.onAllOrdersClick()}
    >All Orders
    </button>
    <button
      className="Header-My-Basket-Button"
      onClick={() => props.onMyBasketClick()}
    >
      <i className="material-icons red">shopping_basket</i>
      My Basket
      <br />
      {props.totalItemsInCart} items
    </button>
  </div>
);

Header.propTypes = {
  onAllOrdersClick: PropTypes.func.isRequired,
  onMyBasketClick: PropTypes.func.isRequired,
  totalItemsInCart: PropTypes.func,
};

Header.defaultProps = {
  totalItemsInCart: 0,
};

export default Header;

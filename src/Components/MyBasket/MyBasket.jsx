import React from 'react';
import PropTypes from 'prop-types';
import './MyBasket.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import MyCartTable from '../MyCartTable/MyCartTable';

// const

const MyBasket = props => (
  <div className="MyBasket">
    <Header>
      Paridhi
      <button className="Header-My-Basket-Button">My Basket {props.totalItemsInCart} items</button>
    </Header>
    <Body>
      Mohindra
      {
          Object.keys(props.quantityObj).map(eachCartItemId => (
            <MyCartTable
              eachCartItemId={eachCartItemId}
              items={props.items}
              eachItemQuantity={props.quantityObj[eachCartItemId]}
            />))
      }
    </Body>
  </div>
);

MyBasket.propTypes = {
  totalItemsInCart: PropTypes.number,
  quantityObj: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
};

MyBasket.defaultProps = {
  totalItemsInCart: 0,
};

export default MyBasket;

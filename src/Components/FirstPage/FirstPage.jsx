import React from 'react';
import PropTypes from 'prop-types';
import './FirstPage.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import GroupedItems from '../GroupedItems/GroupedItems';

const FirstPage = props => (
  <div className="FirstPage">
    <Header>
      Paridhi
      <button
        className="Header-My-Basket-Button"
        onClick={() => props.onMyBasketClick()}
      >My Basket {props.totalItemsInCart} items
      </button>
    </Header>
    <Body>
      Mohindra
      {
  Object.keys(props.items).map(category =>
    (
      <GroupedItems
        category={category}
        items={props.items[category]}
        key={category}
        onTotalAddRemoveItems={count => props.onTotalAddRemoveItems(count)}
      />
    ))
      }
    </Body>
  </div>
);

FirstPage.propTypes = {
  items: PropTypes.array.isRequired,
  totalItemsInCart: PropTypes.number.isRequired,
  onMyBasketClick: PropTypes.func.isRequired,
};

FirstPage.defaultProps = {
};

export default FirstPage;

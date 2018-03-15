import React from 'react';
import PropTypes from 'prop-types';
import './MyBasket.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import MyCartTable from '../MyCartTable/MyCartTable';
import TotalCard from '../TotalCard/TotalCard';

const Axios = require('axios');

class MyBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  onCheckout=() => {
    Axios({
      method: 'POST',
      url: '/orders',
      data: {
        orderDetailsObj: this.props.quantityObj,
      },
    });
  }

  render() {
    return (

      <div className="MyBasket">
        <Header>
      Paridhi
          <button className="Header-My-Basket-Button">My Basket {this.props.totalItemsInCart} items</button>
        </Header>
        <Body>
      Mohindra
          <table>
            <tr>
              <th>Item Description</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>SubTotal</th>
            </tr>
            {
          Object.keys(this.props.quantityObj).map(eachCartItemId => (

            <MyCartTable
              eachCartItemId={eachCartItemId}
              items={this.props.items}
              eachItemQuantity={this.props.quantityObj[eachCartItemId]}
            />))
      }

          </table>
          <TotalCard
            onCheckout={() => this.onCheckout()}
          />
        </Body>
      </div>
    );
  }
}

MyBasket.propTypes = {
  totalItemsInCart: PropTypes.number,
  quantityObj: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
};

MyBasket.defaultProps = {
  totalItemsInCart: 0,
};

export default MyBasket;

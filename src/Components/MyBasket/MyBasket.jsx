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
      allCart: [],
      total: 0,
    };
  }
  componentWillMount() {
    this.getTotal();
  }
  onCheckout=() => {
    Axios({
      method: 'POST',
      url: '/orders',
      data: {
        orderDetailsObj: this.props.quantityObj,
      },
    }).then(() => {
      this.props.onAllOrdersClick();
    });
  }

  getTotal = () => {
    let subtotal = this.state.total;
    Object.keys(this.props.quantityObj).map((eachCartItemId) => {
      const costValue = this.props.selectedItems[eachCartItemId].cost;
      subtotal += costValue * this.props.quantityObj[eachCartItemId];
    });
    this.setState({
      total: subtotal,
    });
  }

  appendToCart = (orderItem) => {
    let arrayModify = this.state.allCart;
    arrayModify = arrayModify.concat(orderItem);
    this.setState({
      allCart: arrayModify,
    });
  };

  render() {
    return (

      <div className="MyBasket">
        <Header
          totalItemsInCart={this.props.totalItemsInCart}
          onAllOrdersClick={() => this.props.onAllOrdersClick()}
          onMyBasketClick={() => this.props.onMyBasketClick()}
        />
        <Body>
          <table>
            <tr>
              <th>Item Description</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>SubTotal</th>
              <th />
            </tr>
            {
          Object.keys(this.props.quantityObj).map(eachCartItemId => (

            <MyCartTable
              eachCartItemId={eachCartItemId}
              selectedItem={this.props.selectedItems[eachCartItemId]}
              eachItemQuantity={this.props.quantityObj[eachCartItemId]}
              onDeleteItem={itemId => this.props.onDeleteItem(itemId)}
              appendToCart={orderItem => this.appendToCart(orderItem)}
              sendTotal={totalValue => this.sendTotal(totalValue)}
            />))
      }

          </table>
          <TotalCard
            onCheckout={() => this.onCheckout()}
            total={this.state.total}
          />
        </Body>
      </div>
    );
  }
}

MyBasket.propTypes = {
  onAllOrdersClick: PropTypes.func.isRequired,
  totalItemsInCart: PropTypes.number,
  quantityObj: PropTypes.object.isRequired,
  selectedItems: PropTypes.object.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onMyBasketClick: PropTypes.func.isRequired,
};

MyBasket.defaultProps = {
  totalItemsInCart: 0,
};

export default MyBasket;

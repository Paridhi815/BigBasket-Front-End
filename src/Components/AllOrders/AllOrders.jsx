import React from 'react';
import PropTypes from 'prop-types';
import './AllOrders.css';
import Header from '../Header/Header';

const Axios = require('axios');

class AllOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderArray: [],
      itemObj: {},
    };
  }

  componentDidMount() {
    Axios({
      method: 'GET',
      url: '/orders',
    }).then((response) => {
      this.setState({
        orderArray: response.data,
      });
    }).then(() => {
      const obj = {};
      Object.values(this.props.items).map((eachCategory) => {
        eachCategory.map((eachItem) => {
          obj[eachItem.itemId] = eachItem;
        });
      });
      this.setState({
        itemObj: obj,
      }, () => {
        console.log(this.state.itemObj);
      });
    });
  }

  render() {
    return (
      <div className="AllOrders">
        <Header
          totalItemsInCart={this.props.totalItemsInCart}
          onAllOrdersClick={() => this.props.onAllOrdersClick()}

          onMyBasketClick={() => this.props.onMyBasketClick()}
        />
        <p className="All-Orders-Display">All Orders</p>
        <hr />
        <p className="Past-Orders-Display">Past Orders(10)</p>
        <table className="Order-Table">
          <tr>
            <th>Item Description</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>SubTotal</th>
            <th />
          </tr>
          {

    this.state.orderArray.map((orders) => {
        // console.log(orders[0].orderdetails, 'mckinsey');
        if (orders[0].orderdetails.length !== 0) {
       return orders[0].orderdetails.map((eachItem) => {
            console.log(eachItem, 'pari');
            console.log(this.state.itemObj[eachItem.itemId], 'dhi');
    if (this.state.itemObj[eachItem.itemId] !== undefined) {
      return (
        <tr>
          <td>
            <div className="Item-Description">
              {this.state.itemObj[eachItem.itemId].brand}
              <div className="Name-Description">
                {this.state.itemObj[eachItem.itemId].title}
                &nbsp;{this.state.itemObj[eachItem.itemId].description}
              </div>
            </div>
          </td>
          <td>{this.state.itemObj[eachItem.itemId].cost}</td>
          <td>{eachItem.quantity}</td>
          <td>{Number(this.state.itemObj[eachItem.itemId].cost) * Number(eachItem.quantity)}</td>
        </tr>
                  );
    }
        });
    }
    })
    }
        </table>
      </div>
    );
  }
}
AllOrders.propTypes = {
  items: PropTypes.array.isRequired,
  totalItemsInCart: PropTypes.number,
  onAllOrdersClick: PropTypes.func.isRequired,
  onMyBasketClick: PropTypes.func.isRequired,
};

AllOrders.defaultProps = {
  totalItemsInCart: 0,
};

export default AllOrders;


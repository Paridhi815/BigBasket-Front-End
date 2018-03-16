import React from 'react';
import PropTypes from 'prop-types';
import './AllOrders.css';

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

  //   categorize = () => {
  //     let categorizedArray = {};
  //     this.state.orderArray.map((orders) => {
  //     // console.log(orders[0].orderdetails, '%%');
  //       if (orders[0].orderdetails.length !== 0) {
  //         categorizedArray = orders[0].orderdetails.reduce((categorizeArray, eachItem) => {
  //           console.log(eachItem, '*');
  //           console.log(this.state.itemObj[eachItem.itemId], '$$');
  //           if (this.state.itemObj[eachItem.itemId] !== undefined) {
  //             if (this.state.itemObj[eachItem.itemId].category in categorizedArray) {
  //               categorizedArray[this.state.itemObj[eachItem.itemId].category] = this.state.itemObj[eachItem.itemId].category.concat(eachItem);
  //             } else {
  //               categorizedArray[this.state.itemObj[eachItem.itemId].category] = eachItem;
  //             }
  //           }
  //         }, {});
  //       }
  //     });
  //     this.setState({
  //       categorizedArray,
  //     });
  //   };

  render() {
    //   const
    return (
    //   <div>Anmol</div>
      <div className="AllOrders">
        {
    this.state.orderArray.map((orders) => {
        // console.log(orders[0].orderdetails, '%%');
        if (orders[0].orderdetails.length !== 0) {
       return orders[0].orderdetails.map((eachItem) => {
            console.log(eachItem, '*');
            console.log(this.state.itemObj[eachItem.itemId], '$$');
    if (this.state.itemObj[eachItem.itemId] !== undefined) {
      return (
        <div>
          <div>{this.state.itemObj[eachItem.itemId].brand} {this.state.itemObj[eachItem.itemId].title} {this.state.itemObj[eachItem.itemId].description}</div>
          <div>{this.state.itemObj[eachItem.itemId].cost}</div>
          <div>{eachItem.quantity}</div>
          <div>{Number(this.state.itemObj[eachItem.itemId].cost) * Number(eachItem.quantity)}</div>
        </div>
                  );
    }
        });
    }
    })
    }
      </div>
    );
  }
}
AllOrders.propTypes = {
  children: PropTypes.node.isRequired,
};

AllOrders.defaultProps = {
};

export default AllOrders;


// const categorize = () => {
//     let categorizedArray;
//     this.state.orderArray.map((orders) => {
//       // console.log(orders[0].orderdetails, '%%');
//       if (orders[0].orderdetails.length !== 0) {
//         categorizedArray = orders[0].orderdetails.reduce((categorizedArray, eachItem) => {
//           console.log(eachItem, '*');
//           console.log(this.state.itemObj[eachItem.itemId], '$$');
//           if (this.state.itemObj[eachItem.itemId] !== undefined) {
//             if (this.state.itemObj[eachItem.itemId].category in categorizedArray) {
//               categorizedArray[this.state.itemObj[eachItem.itemId].category] = this.state.itemObj[eachItem.itemId].category.concat(eachItem);
//             } else {
//               categorizedArray[this.state.itemObj[eachItem.itemId].category] = eachItem;
//             }
//             return categorizedArray;
//           }
//         }, {});
//       }
//     });
//     this.setState({
//       categorizedArray,
//     });
//   };

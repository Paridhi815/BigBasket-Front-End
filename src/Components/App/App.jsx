import React from 'react';
import './App.css';
import FirstPage from '../FirstPage/FirstPage';
import MyBasket from '../MyBasket/MyBasket';
import AllOrders from '../AllOrders/AllOrders';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 0,
      items: {},
      totalItemsInCart: 0,
      quantityObj: {},
      selectedItems: {},
    };
  }

  componentDidMount() {
    fetch('/items', {
      method: 'POST',
    }).then(response => response.json())
      .then((itemsObj) => {
        this.setState({
          items: itemsObj.items,
        });
      });
  }

  onTotalAddRemoveItems=(obj) => {
    this.state.quantityObj[Object.keys(obj)[0]] = Object.values(obj)[0];
    let sum = 0;
    Object.values(this.state.quantityObj).forEach((countElement) => {
      sum += countElement;
    });

    this.setState({
      totalItemsInCart: sum,
    });
  }

  onMyBasketClick=() => {
    this.setState({
      pageNumber: 1,
    });
  }

  onAllOrdersClick=() => {
    this.setState({
      pageNumber: 2,
    });
  }

  onDeleteItem=(itemId) => {
    console.log(itemId);
    const obj = this.state.selectedItems;
    const obj2 = this.state.quantityObj;
    delete obj[itemId];
    delete obj2[itemId];
    this.setState({
      selectedItems: obj,
      quantityObj: obj2,
    });
  }
  addToCart=(itemObj) => {
    console.log(itemObj, '>>>>>');

    const newObject = this.state.selectedItems;
    if (this.state.quantityObj[itemObj.itemId] === 0) { delete newObject[itemObj.itemId]; } else {
      newObject[itemObj.itemId] = itemObj;
    }
    this.setState({
      selectedItems: newObject,
    });
  }
  render() {
    if (this.state.pageNumber === 0) {
      return (
        <div className="App">
          <FirstPage
            items={this.state.items}
            onTotalAddRemoveItems={count => this.onTotalAddRemoveItems(count)}
            totalItemsInCart={this.state.totalItemsInCart}
            onMyBasketClick={() => this.onMyBasketClick()}
            addToCart={obj => this.addToCart(obj)}
            onAllOrdersClick={() => this.onAllOrdersClick()}
          />
        </div>
      );
    } else if (this.state.pageNumber === 1) {
      return (
        <div className="App">
          <MyBasket
            totalItemsInCart={this.state.totalItemsInCart}
            items={this.state.items}
            quantityObj={this.state.quantityObj}
            selectedItems={this.state.selectedItems}
            onDeleteItem={itemId => this.onDeleteItem(itemId)}
            onAllOrdersClick={() => this.onAllOrdersClick()}
            onMyBasketClick={() => this.onMyBasketClick()}
            disableValue={Object.keys(this.state.selectedItems).length === 0}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <AllOrders
          items={this.state.items}
          totalItemsInCart={this.state.totalItemsInCart}
          onAllOrdersClick={() => this.onAllOrdersClick()}
          onMyBasketClick={() => this.onMyBasketClick()}
        />
      </div>
    );
  }
}

export default App;

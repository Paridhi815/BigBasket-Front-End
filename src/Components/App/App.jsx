import React from 'react';
import './App.css';
import FirstPage from '../FirstPage/FirstPage';


// const Axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 0,
      items: {},
      ckeckedOutOrNot: false,
      totalItemsInCart: 0,
      quantityObj: {},
    };
  }

  componentDidMount() {
    fetch('/items', {
      method: 'POST',
    }).then(response => response.json())
      .then((itemsObj) => {
        console.log('pari', itemsObj);

        this.setState({
          items: itemsObj.items,
        });
        console.log('>>>>', this.state.items);
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

  render() {
    return (
      <div className="App">
        <FirstPage
          items={this.state.items}
          onTotalAddRemoveItems={count => this.onTotalAddRemoveItems(count)}
          totalItemsInCart={this.state.totalItemsInCart}
        />
      </div>
    );
  }
}

export default App;

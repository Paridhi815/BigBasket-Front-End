import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import GroupedItems from '../GroupedItems/GroupedItems';


// const Axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: {},
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

  render() {
    return (
      <div className="App">
        <Header>
      Paridhi
        </Header>
        <Body>
      Mohindra
          {
  Object.keys(this.state.items).map(category =>
    // console.log('hello', this.state.books[category]);
    (
      <GroupedItems
        category={category}
        items={this.state.items[category]}
        key={category}
      />
    ))
      }
        </Body>
      </div>
    );
  }
}

export default App;

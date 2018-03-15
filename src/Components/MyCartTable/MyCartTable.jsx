import React from 'react';
// import PropTypes from 'prop-types';
import './MyCartTable.css';

class MyCartTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCartItems: [],
    };
  }
  componentDidMount() {
    this.populateBody();
  }
    populateBody=() => {
      const arr = [...this.state.allCartItems];
      Object.keys(this.props.items).map((item) => {
        console.log(this.props.items[item]);
        for (let i = 0; i < this.props.items[item].length; i += 1) {
          if (this.props.items[item][i].itemId === Number(this.props.eachCartItemId)) {
            const obj = {};
            obj.brand = this.props.items[item][i].brand;
            obj.title = this.props.items[item][i].title;
            obj.cost = this.props.items[item][i].cost;
            obj.category = this.props.items[item][i].category;
            obj.itemId = this.props.items[item][i].itemId;
            arr.push(obj);
          }
        }
      });

      this.setState({
        allCartItems: arr,
      });
    }

    render() {
      console.log('here', this.state.allCartItems);

      return (
        <div className="MyCartTable">
   Hello
          {
              this.state.allCartItems.map(eachItem => (
                <div>
                  <div>{eachItem.brand}</div>
                  <div>{eachItem.title}</div>
                  <div>{eachItem.cost}</div>
                  <div>{eachItem.category}</div>
                  <div>{eachItem.itemId}</div>
                </div>))

            }

        </div>
      );
    }
}

MyCartTable.propTypes = {
//   items: PropTypes.object.isRequired,
//   eachCartItemId: PropTypes.number.isRequired,
};

MyCartTable.defaultProps = {
};

export default MyCartTable;

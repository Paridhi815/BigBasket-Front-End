import React from 'react';
import PropTypes from 'prop-types';
import './ItemCard.css';

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  removeItem=(index) => {
    const obj = {};
    this.setState({
      count: this.state.count - 1,
    }, () => {
      if (this.state.count < 0) {
        this.setState({
          count: 0,
        });
      } else {
        obj[index] = this.state.count;
        this.props.onTotalAddRemoveItems(obj);
      }
    });
  }
  addItem=(index) => {
    const obj = {};
    this.setState({
      count: this.state.count + 1,
    }, () => {
      obj[index] = this.state.count;
      this.props.onTotalAddRemoveItems(obj);
    });
  }

  render() {
    return (
      <div className="ItemCard">
        <img
          src={this.props.imageUrl}
          className="Item-img"
          alt="Item"
        />
        <div className="Item-info">

          <p className="Item-brand" >{this.props.brand}</p>
          <p className="Item-title" >{this.props.title}</p>
          <p className="Item-cost" >{this.props.cost}</p>
          <p className="Item-author" >{this.props.description}</p>
          <div className="Add-Remove">
            <button onClick={() => this.removeItem(this.props.itemIndex)}>-
            </button>
            <input type="text" value={`${this.state.count} in Basket`} />
            <button onClick={() => this.addItem(this.props.itemIndex)}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

ItemCard.propTypes = {
  itemIndex: PropTypes.number.isRequired,
  brand: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.number.isRequired,
  onTotalAddRemoveItems: PropTypes.func.isRequired,
};


export default ItemCard;

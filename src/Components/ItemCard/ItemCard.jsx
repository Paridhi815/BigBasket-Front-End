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

  removeItem=(item) => {
    const obj = {};
    this.setState({
      count: this.state.count - 1,
    }, () => {
      if (this.state.count < 0) {
        this.setState({
          count: 0,
        });
      } else {
        obj[item.itemId] = this.state.count;
        this.props.onTotalAddRemoveItems(obj);
      }
      this.props.addToCart(item);
    });
  }
  addItem=(item) => {
    const obj = {};
    obj[item.itemId] = this.state.count + 1;
    this.props.onTotalAddRemoveItems(obj);
    this.props.addToCart(item);
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div className={this.props.availableNumber === 0 ? 'ItemCard zero' : 'ItemCard'}>
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
            <button onClick={() => this.removeItem(this.props.item)}>-
            </button>
            <input type="text" value={`${this.state.count} in Basket`} />
            <button
              disabled={this.props.availableNumber === 0}
              onClick={() => this.addItem(this.props.item)}
            >+
            </button>
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
  availableNumber: PropTypes.number.isRequired,
};


export default ItemCard;

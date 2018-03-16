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
    }, () => {
      if (this.state.count > this.props.availableNumber) {
        this.setState({
          count: this.props.availableNumber,
        });
      }
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
          <p className="Item-description" >{this.props.description}</p>
          <div className="Count-Box">
            <p className="Item-cost" >MRP {this.props.cost}/-</p>
            <div className="Add-Remove">
              <button
                className="Remove-Item-Button"
                disabled={this.props.availableNumber === 0}
                onClick={() => this.removeItem(this.props.item)}
              >-
              </button>
              <input
                className={this.state.count === 0 ? 'NoOfItems zero' : 'NoOfItems'}
                type="text"
                value={`${this.state.count} in Basket`}
              />
              <button
                className="Add-Item-Button"
                disabled={this.state.count > this.props.availableNumber}
                onClick={() => this.addItem(this.props.item)}
              >+
              </button>
            </div>
          </div>
          {this.props.availableNumber} items available totally
        </div>
      </div>
    );
  }
}

ItemCard.propTypes = {
  addToCart: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  brand: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.number.isRequired,
  onTotalAddRemoveItems: PropTypes.func.isRequired,
  availableNumber: PropTypes.number.isRequired,
};


export default ItemCard;

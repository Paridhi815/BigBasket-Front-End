import React from 'react';
import PropTypes from 'prop-types';
import './ItemCard.css';

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  //   handleLike(Itemid) {
  //     const url = this.state.like === 0 ? `/opinion/${Itemid}/1` : `/opinion/${Itemid}/0`;
  //     fetch(url, {
  //       method: 'PUT',
  //     }).then(() => {
  //       this.setState({
  //         like: this.state.like === 0 ? 1 : 0,
  //       });
  //     });
  //   }


  render() {
    return (
      <div className="ItemCard">
        <img
          src={this.props.imageUrl}
          className="Item-img"
          alt="Item"
        />
        <div className="Item-info">
          {/* <button
            className={this.state.like === 1 ? 'Item-like-button-liked' : 'Item-like-button'}
            onClick={() => this.handleLike(this.props.Itemid)}
          >
            <i className="material-icons">favorite</i>
          </button> */}
          {/* {console.log('this is the stuff', this.props.Items)} */}

          <p className="Item-brand" >{this.props.brand}</p>
          <p className="Item-title" >{this.props.title}</p>
          <p className="Item-cost" >{this.props.cost}</p>
          <p className="Item-author" >{this.props.description}</p>
        </div>
      </div>
    );
  }
}

ItemCard.propTypes = {
//   brand: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
//   author: PropTypes.string.isRequired,
//   like: PropTypes.number.isRequired,
};

ItemCard.defaultProps = {
//   Item: {},
};

export default ItemCard;

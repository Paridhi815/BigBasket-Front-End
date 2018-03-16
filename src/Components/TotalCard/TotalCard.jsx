import React from 'react';
import PropTypes from 'prop-types';
import './TotalCard.css';


class TotalCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="TotalCard">

        <p>TOTAL Rs.{this.props.total}</p>
        <hr />
        <button
          className="Checkout-Button"
          onClick={() => this.props.onCheckout()}
        >
        Checkout
          <i className="material-icons">arrow_forward</i>
        </button>
      </div>
    );
  }
}

TotalCard.propTypes = {
  onCheckout: PropTypes.func.isRequired,
  total: PropTypes.number,
};

TotalCard.defaultProps = {
  total: 0,
};

export default TotalCard;

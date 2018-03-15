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
        <button onClick={() => this.props.onCheckout()}>Checkout</button>
      </div>
    );
  }
}

TotalCard.propTypes = {
  onCheckout: PropTypes.func.isRequired,
};

TotalCard.defaultProps = {
};

export default TotalCard;

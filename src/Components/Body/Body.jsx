import React from 'react';
import PropTypes from 'prop-types';
import './Body.css';

const Body = props => (
  <div className="Body">
    {props.children}
  </div>
);

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

Body.defaultProps = {
};

export default Body;

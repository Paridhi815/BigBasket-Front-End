import React from 'react';
// import PropTypes from 'prop-types';
import './MyCartTable.css';

class MyCartTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  //   populateBody=() => {
  //     {
  //       Object.values(this.props.items).forRach((item) => {
  //         if (item.itemId === this.props.eachCartItemId) {
  //           return (
  //             <div>
  //         Parampara
  //             </div>
  //           );
  //         }
  //       });
  //     }
  //   }
  render() {
    console.log('kolo');

    return (
      <div className="MyCartTable">
   Hello
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

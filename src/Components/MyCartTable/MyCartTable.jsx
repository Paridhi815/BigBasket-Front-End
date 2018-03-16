import React from 'react';
import PropTypes from 'prop-types';
import './MyCartTable.css';

class MyCartTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <tbody className="MyCartTable">

        {
          <tr>
            <td>
              <div className="Item-Description">{this.props.selectedItem.brand}
                <div className="Name-Description">
                  {this.props.selectedItem.title}
                  {this.props.selectedItem.description}
                </div>
              </div>
            </td>
            <td>{this.props.selectedItem.cost}</td>
            <td>{this.props.eachItemQuantity}</td>
            <td>{Number(this.props.eachItemQuantity) * Number(this.props.selectedItem.cost)}</td>
            <td>
              <button
                onClick={() => this.props.onDeleteItem(this.props.eachCartItemId)}
              >x
              </button>
            </td>
          </tr>

            }

      </tbody>
    );
  }
}

MyCartTable.propTypes = {
  selectedItem: PropTypes.object.isRequired,
  eachItemQuantity: PropTypes.number,
  eachCartItemId: PropTypes.number,
  onDeleteItem: PropTypes.func.isRequired,
};

MyCartTable.defaultProps = {
  eachItemQuantity: 0,
  eachCartItemId: 0,
};

export default MyCartTable;

import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../ItemCard/ItemCard';
import './GroupedItems.css';

const GroupedItems = (props) => {
  console.log('yaaar', props.category);

  return (
    <div className="GroupedItems">
      <h2 className="Grouped-category">
        {props.category}
      </h2>
      <div className="GroupedItems-pane">
        {console.log(props.items)
      }
        {props.items.map(item =>
(
  <ItemCard
    category={item.category}
    brand={item.brand}
    title={item.title}
    cost={item.cost}
    description={item.description}
    imageUrl={item.imageUrl}
  />
))}
      </div>
    </div>
  );
};

GroupedItems.propTypes = {
  category: PropTypes.arrayOf(),
  items: PropTypes.arrayOf(),
};

GroupedItems.defaultProps = {
  category: [],
  items: [],
};

export default GroupedItems;

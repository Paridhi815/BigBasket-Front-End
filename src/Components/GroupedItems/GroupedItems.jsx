import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../ItemCard/ItemCard';
import './GroupedItems.css';

const GroupedItems = props =>
  // console.log('yaaar', props.category);

  (
    <div className="GroupedItems">
      <h2 className="Grouped-category">
        {props.category}
      </h2>
      <div className="GroupedItems-pane">
        {props.items.map(item =>
              (
                <ItemCard
                  availableNumber={item.availableQuantity}
                  itemIndex={item.itemId}
                  category={item.category}
                  brand={item.brand}
                  title={item.title}
                  cost={item.cost}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  onTotalAddRemoveItems={count => props.onTotalAddRemoveItems(count)}
                />
              ))}
      </div>
    </div>
  );
GroupedItems.propTypes = {
  category: PropTypes.arrayOf(),
  items: PropTypes.arrayOf(),
};

GroupedItems.defaultProps = {
  category: [],
  items: [],
};

export default GroupedItems;

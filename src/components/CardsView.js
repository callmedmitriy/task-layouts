import React from 'react';

import ShopCard from './ShopCard';

import './CardsView.scss';

function CardsView(props) {
  return (
    <div className='card-view'>
        {props.productsList.map(
          o => <ShopCard key={o.img} item={o} />
        )}
    </div>
  );
}

export default CardsView;
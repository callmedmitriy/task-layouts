import React from 'react';

import ShopItem from './ShopItem';

import './ListView.scss';

function ListView(props) {
  return (
    <table className='list-view'>
      <tbody>
        {props.productsList.map(
          o => <ShopItem key={o.img} item={o} />
        )}
      </tbody>
    </table>
  );
}

export default ListView;
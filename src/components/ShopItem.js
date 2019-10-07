import React from 'react';

import './ShopItem.scss';

function ShopItem(props) {
  const item = props.item
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.color}</td>
      <td><img src={item.img} alt={item.name}/></td>
    </tr>
  );
}

export default ShopItem;
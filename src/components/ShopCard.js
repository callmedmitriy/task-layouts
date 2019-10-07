import React from 'react';

import './ShopCard.scss';

function ShopCard(props) {
	const item = props.item

	return (
		<div className="card">
			<div><img className="img" src={item.img} alt={item.name}/></div>
			<div className="name">{item.name}</div>
			<div className="wrapper">
				<div className="price">{item.price}</div>
				<div className="color">{item.color}</div>
			</div>
		</div>
	);
}

export default ShopCard;
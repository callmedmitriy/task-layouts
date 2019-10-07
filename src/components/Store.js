import React, {useState} from 'react';

import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';



function Store() {
  const [view, setView] = useState('card');
  const [ico, setIco] = useState('view_module')
  
  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

  const iconSwitch = () => {
    if (view === 'card') {
      setView('list')
      setIco('view_list')
    } else {
      setView('card')
      setIco('view_module')
    }
  };

  return (
    <div>
      <IconSwitch icon={ico} onSwitch={iconSwitch}/>
      {view === 'card' ? <CardsView productsList={products}/> : <ListView productsList={products}/>}
    </div>
  );
}

export default Store;
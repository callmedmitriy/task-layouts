import React from 'react';

import './IconSwitch.scss';

function IconSwitch(props) {

  const onSwitch = change => {
    props.onSwitch(change);
  }

  return (
    <i onClick={onSwitch} className='material-icons button-top'>{props.icon}</i>
  );
}

export default IconSwitch;

import React from 'react';

const GifsTemp = props => {
  return(
    <ul>
      <li>
        <img src={props.puppy.images.fixed_height.url} />
      </li>
    </ul>
  );
}

export default GifsTemp;

import React from 'react';

const Widget=(props)=> {
    return (
      <div className='product'>
        <h2>{props.name}</h2>
        <p>Price: {props.price}</p>
      </div>
    );
  }

  export default Widget;
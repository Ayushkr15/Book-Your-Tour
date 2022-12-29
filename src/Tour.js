import React, { useState } from 'react';


const Tour = ({id,name,info,image,price , removeTour}) => {
  const [readMore , setReadMore] = useState(false);
  return(
    <article>
        <div className='single-tour'>
          <img src={image} alt={name}></img>
          <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p>
          { readMore ? info : `${info.substring(0,150)}...`} 
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more' }
          </button>      
          </p>

          <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>

          </footer>
        </div>
    </article>
    
    );
};

export default Tour;

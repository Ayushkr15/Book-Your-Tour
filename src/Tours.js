import React from 'react';
import Tour from './Tour';

const Tours = ({tours , removeTour}) => {
  return(
       <section>
          <div className='title'>
            <h3> Our Tours</h3>
            <div className='underline'></div>
          </div>

      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />
      })}



       </section>
    );
};

export default Tours;

  
import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTours}) => {
  return (
  <section>
    <div className="title">
      <h2>
        Our tours
        <div className="underline"></div>
      </h2>
    </div>
    <div>
    {tours.map(tour=>{
      return <Tour key={tour.id}{...tour} removeTours={removeTours}/>
    })}
      
    </div>
  </section>
  );
};

export default Tours;
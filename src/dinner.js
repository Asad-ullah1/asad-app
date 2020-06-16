import React from 'react';

function Dinner(props){
    return (
     <div>
        
        <h1> COUNTRY {props.country}</h1>
        <h2>Famous city : {props.sweetCity }</h2>
        <h3>National Park :  {props.park}</h3>
        <h3> Population : {props.population}</h3>
        <h3>National animal : {props.animal}</h3>
       
     </div>
    );
}
export default Dinner;
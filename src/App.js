import React from 'react';
import './App.css';
import Dinner from './dinner.js';


function App() {
  return (
  <div className="App">
   
    <Dinner country="Pakistan" sweetCity="Lahore" park="Deosai Plains"  population="220,892,340"  game="Hockey" animal="Markhor"/>
    <div class="pic"> 
    <h1>Lahore</h1>
       <p>Lahore is the capital of the Pakistani
          province of Punjab, and is the country's 
          2nd largest city after Karachi, 
         as well as the 18th largest city
          proper in the world.</p> 
    <h1>Deosai National Park</h1>
     <p>is located 
    between Kharmang,
     Astore and Skardu 
     in Pakistan.
     ... The park protects an 
     area of 3,000 square 
     kilometres (1,200 sq mi).
      It is well known for 
     its rich flora and fauna
      of the Karakoram-West
      Tibetan Plateau alpine
       steppe eco region.</p>
       
       <h1>Pakistan Poplulation</h1>
       <p>The current population of Pakistan 
         is 220,685,460 as of Tuesday, June 16, 
         2020, based on Worldometer elaboration
          of the latest United Nations data. 
          Pakistan 2020 population is estimated 
          at 220,892,340  at mid year according 
          to UN data. Pakistan population is equivalent
          to 2.83% of the total world population. </p>
       <h1>markhor </h1>
       <p>The markhor is the national animal
          of Pakistan. It was one of the
           72 animals featured on the WWF 
         Conservation Coin Collection in 
         1976. Markhor marionettes are used in The
          shows known as buz-baz. </p></div>
</div>
  );
   
}

export default App;

import React from 'react';
import './Gears.css';

function Gears(){

  const path = './images/graphics/';

  return(
    <div className="Gears">
      <div className="Gears-Content">
        <img id='gear1' className="gear" src={require(path + 'gear1.svg')}  />
        <img id='gear2' className="gear" src={require(path + 'gear2.svg')} />
        <img id='gear3' className="gear" src={require(path + 'gear3.svg')} />
        <img id='gear4' className="gear" src={require(path + 'gear4.svg')}/>
        <img id='gear5' className="gear" src={require(path + 'gear5.svg')}/>
      </div>
    </div>
  );
}

export default Gears;

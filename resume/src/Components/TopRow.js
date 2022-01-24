import React from 'react';
import Text from './Text';
import Image from './Image';
import ScrollDown from './ScrollDown';

function TopRow() {
  return <div className='row' style={{border:"solid 0px red",marginTop:"10vh"}}>
    <div className='container'>
      <div className="row">
        <Text />
        <Image />
      </div>
      </div>
      <div className="row">
        <ScrollDown/> 
      </div>
  </div>;
}

export default TopRow;

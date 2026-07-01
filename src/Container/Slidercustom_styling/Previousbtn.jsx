import React from 'react';
import Prevarrow from '../../Images/rightarrow.png'
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, marginTop:'16%',width:'50px',height:'50px', display: "block", background: `url(${Prevarrow})` }}
        onClick={onClick}
      />
    );
  }
  export default React.memo(SamplePrevArrow);
import React from 'react';
import Nextarrow from '../../Images/leftarrow.png'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, width:'50px',position:'relative',marginTop:'14%',height:'50px',display: "block", background: `url(${Nextarrow})` }}
      onClick={onClick}
    />
  );
}
export default React.memo(SampleNextArrow);
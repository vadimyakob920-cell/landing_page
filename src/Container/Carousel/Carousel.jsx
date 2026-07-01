import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Cartoon1 from "../../Images/cartoon1.png";
import Cartoon2 from "../../Images/cartoon2.png";
import Cartoon3 from "../../Images/cartoon3.png";
import Cartoon4 from "../../Images/cartoon4.png";
import Cartoon5 from "../../Images/cartoon5.png";
const breakPoints = [
   {width:1,itemsToShow:1},
  { width: 444, itemsToShow: 2 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const settings =  {
  autoplay: true
};
function MultipleItems() {
  return (
    <>
      <div className="App">
        <Carousel breakPoints={breakPoints} {...settings}>
          <Item style={{backgroundImage:`url(${Cartoon1})`,backgroundRepeat:"no-repeat"}}>
          </Item>
          <Item style={{backgroundImage:`url(${Cartoon2})`,backgroundRepeat:"no-repeat"}}>
          </Item>
          <Item style={{backgroundImage:`url(${Cartoon3})`,backgroundRepeat:"no-repeat"}}>
          </Item>
          <Item style={{backgroundImage:`url(${Cartoon4})`,backgroundRepeat:"no-repeat"}}>
          </Item>
          <Item style={{backgroundImage:`url(${Cartoon5})`,backgroundRepeat:"no-repeat"}}>
          </Item>
        </Carousel>
      </div>
    </>
  );
}

export default MultipleItems;

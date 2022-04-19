import React from 'react'; 

//Images
import  images from "../../constants/images";

const SubHeading = ({title}) => (
  <div style={{marginBottom:'irem'}} >
    <p className='p__cormorant'>{ title}</p>
     <img src={images.spoon} alt="spoon"  className='spoon__img'/>
  </div>
);

export default SubHeading;

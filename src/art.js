import React from 'react'
import image5 from './assets/5.jpg'
import image6 from './assets/6.jpg'
import image1 from './assets/1.jpg'

import image9 from './assets/9.jpg'
import image7 from './assets/7.jpg'
import image2 from './assets/2.jpg'
import image8 from './assets/8.jpg'
import image15 from './assets/15.JPG'
import image16 from './assets/16.JPG'
// import art from "./assets/artbg.jpg";
const Art = () => {
  return (
    <React.Fragment>
      <div
        // className="artbg"
        style={{
          // width: "100%",
          // height: "80vh",
          // backgroundColor:'black',
          //   overflow: "hidden",
          // objectFit: "fill",
          //   position: "absolute",
          marginTop: '70px',
          height: '100%',
          // overflow: "hidden",
        }}
      >
        <img src={image5} style={{ height: '300px' }}></img>
        <img src={image6} style={{ height: '300px' }}></img>
        <img src={image9} style={{ height: '300px' }}></img>
        <img src={image7} style={{ height: '300px' }}></img>
        <img src={image2} style={{ height: '300px' }}></img>
        <img src={image15} style={{ height: '300px' }}></img>
        <img src={image16} style={{ height: '300px' }}></img>
        <img src={image8} style={{ height: '300px' }}></img>
        <img src={image1} style={{ height: '300px' }}></img>

        {/* <div style={{ background: "white", height: 100 }}></div> */}
        {/* <img src={art} style={{ height: "100vh", width: "200vh" }}></img> */}
      </div>
    </React.Fragment>
  )
}
export default Art

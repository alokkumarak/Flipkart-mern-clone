import React from 'react';
import { makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import {bannerData} from './data'

const useStyles=makeStyles({
    image:{
       width:'100%',
       height:280
    }
})

const Banner=()=>{
    const classes=useStyles();



    return(
       <Carousel 
       autoPlay={true}
       animation='slide'
       indicators={false}
       navButtonsAlwaysVisible={true}
       cycleNavigation={true}
       navButtonsProps={{
           style:{
               background:'#ffffff',
               color:'#494949',
               borderRadius:'0px 2px 2px 0',
               margin:0,
               padding:'18px 5px'

           }
       }}
       >
           {
               bannerData.map(data=>(
                   <img src={data} alt="image" className={classes.image} />
               ))
           }
       </Carousel>
    )
}
export default Banner
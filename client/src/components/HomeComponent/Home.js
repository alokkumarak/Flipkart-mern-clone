import { Box,makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import Nav from './Nav'
import Banner from './Banner';
import Slide from './Slide';
import MidSection from './MidSection';
import Poster from './Poster';
// import {products} from './data';

import { useDispatch, useSelector } from 'react-redux';
import {getProducts as listProducts} from '../../redux/actions/productAction'

const useStyles=makeStyles({
    banner:{
           padding:10,
           background:'#f2f2f6'
    },
    rightSide:{
          background:'#f7f3f2',
          padding:20,
          margin:'12px 0 0 10px',
          width:'17%'
    }
})

function Home() {
    const classes=useStyles();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70'

    const {products}=useSelector(state=>state.getProducts)
    const dispatch=useDispatch();


    useEffect(()=>{
       dispatch(listProducts());
    },[dispatch])

    return (
        <Box>
        <Nav />
        <Box className={classes.banner}>
            <Banner />
        </Box>
        <Box style={{display:'flex'}}>
            <Box style={{width:'80%'}}>
            <Slide 
              timer={true}
              title='Deal of the Day'
              products={products}
            />
            </Box>
            <Box className={classes.rightSide}>
                <img src={adURL} style={{width:'250px'}}/>
            </Box>
              
        </Box>

        <MidSection />
             
        <Slide  
        timer={false}
        title='Discounts for you'
        products={products}
        />
        <Poster />
        <Slide  
        timer={false}
        title='Suggested Items'
        products={products}
        />
        <Slide  
        timer={false}
        title='Top Selections'
        products={products}
        />
        <Slide  
        timer={false}
        title='Recommanded'
        products={products}
        />
        <Slide  
        timer={false}
        title='Best Sellers'
        products={products}
        />
        
        
        </Box>
    )
}

export default Home

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles,Box,Typography,Button } from '@material-ui/core';
import Countdown from 'react-countdown';
import Devider from '@material-ui/core/Divider'
import {Link} from 'react-router-dom'

const responsive = { 
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const useStyle=makeStyles({
    image:{
        height:150,
    },
    component:{
        marginTop:12,
        background:'white'
    },
    deal:{
       padding:'15px 20px',
       display:'flex',
       
    },
    dealText:{
        fontSize:22,
        fontWeight:'bold',
        lineHeight:'32px',
        marginRight:25
    },
    timer:{
        color:'green',
        display:'flex',
        alignItems:'center',
        marginLeft:30
    },
    button:{
        marginLeft:'auto',
        background:'#2674f6',
        borderRadius:2,
        textTransform:'none',
        fontSize:18,
        marginRight:20,
        '&:hover':{
          background:'#4b7dd1'
        }
    },
    text:{
      font:14,
      
    },
    card:{
      cursor:'pointer',
      transition:'all 0.5s',
      marginBottom:20,
      padding:'35px 15px',
      '&:hover':{
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      }
    }

  })

function Slide({timer,title,products}) {
    const classes=useStyle();
    const timerUrl='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer=({hours,minutes,seconds})=>{
        return <span className={classes.timer}>{hours}:{minutes}:{seconds} Left</span>
    }
    

    return (
       <Box className={classes.component}>
           <Box className={classes.deal}>
           <Typography className={classes.dealText}>{title}</Typography>
           {
             timer && <>
                       <img src={timerUrl} alt="timer" style={{width:24}} />
                     <Countdown  date={Date.now() + 5.04e+7}  renderer={renderer}/>
                     <Button variant='contained' color='primary' className={classes.button}>view all</Button>
                     </>
           }
           </Box>
           <Devider />
        <Carousel 
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        keyBoardControl={true}
        removeArrowOnDeviceType={['tablet','mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
           {
               products.map(product=>(
                 <Link to={`/product/${product.id}`}>
                 <Box textAlign='center' className={classes.card}>
                   <img src={product.url} className={classes.image}  alt='alter' />
                   <Typography className={classes.text} style={{fontWeight:'bold',color:'#212121'}}>{product.title.shortTitle}</Typography>
                   <Typography className={classes.text} style={{color:'green'}}>{product.discount}</Typography>
                   <Typography className={classes.text} style={{color:'#212121',opacity:'.6'}}>{product.tagline}</Typography>
                 </Box>
                 </Link>
               ))
           }
       </Carousel>
       </Box>
    )
}

export default Slide

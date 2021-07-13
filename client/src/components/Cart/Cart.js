import React, { useEffect } from 'react'
import {useSelector} from 'react-redux';
import {Box,makeStyles,Typography} from '@material-ui/core';
import CartItem from './CartItem'

const useStyle=makeStyles({
    component:{
        marginTop:55,
        padding:'30px 10%',
        background:'#f2f5f3'
    },
    leftComponent:{
      width:'70%',
     
    },
    header:{
      padding:'15px 24px',
      background:'#fff',
    },
    rightComponent:{

    }
})

function Cart() {
     const classes=useStyle();
    const {cartItem}=useSelector(state=>state.cart);

    useEffect(()=>{
      console.log(cartItem);
    },[]);


    return( 

        <>
        {
        cartItem.length?
         <Box className={classes.component}>
             <Box className={classes.leftComponent}>
                   <Box className={classes.header}>
                       <Typography style={{fontSize:18,fontWeight:'bold'}}>My Cart ({cartItem.length})</Typography>
                   </Box>
                   <hr/>
                   {
                       cartItem.map(item=>(
                           <CartItem item={item}/>
                       ))
                   }
             </Box>
             <Box className={classes.rightComponent}>

             </Box>
            
         </Box>
        :<p>product Not available</p>
    }
    </>
    )
}

export default Cart

import React from 'react'
import {Box, Button, Card,makeStyles,Typography} from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';

const useStyle=makeStyles({
    component:{
       display:'flex',
       justifyContent:'space-evenly',
       borderRadius:1,
    },
    leftComponent:{
      marginTop:20
    },
    middleComponent:{
       marginTop:20
    },
    rightComponent:{
      marginTop:20
    }
})

function CartItem({item}) {
    const classes=useStyle();
    const date=new Date(new Date().getTime()+(5*24*60*60*1000));

    return (
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img src={item.url} alt="product" width="140" />
            </Box>
            <Box className={classes.middleComponent}>
                <Typography style={{fontSize:15}}>
                    {item.title.longTitle}<br/>
                    <small style={{color:'#a6aba7'}}>English, PaperBack, Lipschuts Seymour</small>
                </Typography>
                <Typography style={{display:'flex',marginTop:10,fontSize:15}}>Seller: VIVATIONLINE&nbsp;&nbsp;
                    <Box style={{background:'#2674f6',marginRight:5,height:22,padding:3,borderRadius:10,fontSize:12}}>
                      <span style={{color:'white'}}>4.1</span>
                     <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==' alt="star" />
                    </Box>
                </Typography>
                <Typography style={{display:'flex',marginTop:20}}>
                   <span>₹{item.price.cost}</span>&nbsp; &nbsp;<strike>₹{item.price.mrp}</strike>&nbsp;&nbsp;<span style={{display:'flex',color:'green',fontSize:14,fontWeight:'bold'}}>2 offers available <InfoIcon /></span>
                </Typography>
                <Typography style={{display:'flex',}}>
                    <Button style={{fontWeight:'bold'}}>SAVE FOR LETER</Button>
                    <Button style={{fontWeight:'bold'}}>REMOVE</Button>
                </Typography>
            </Box>
            <Box className={classes.rightComponent}>
                <Typography style={{fontSize:13}}>
                    Delivery by {date.toDateString()}| ₹40<br/>
                    <small style={{color:'#a6aba7'}}>7 Days Replacement Policy</small>

                </Typography>
            </Box>
        </Card>
    )
}

export default CartItem

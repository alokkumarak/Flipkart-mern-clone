import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '../redux/actions/productAction'
import {Box,makeStyles,Typography,Button} from '@material-ui/core';
import clsx from 'clsx'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShareIcon from '@material-ui/icons/Share';
import { addToCart } from '../redux/actions/CartAction';
import {useHistory} from 'react-router-dom';
// import ActionItems from './ActionItems';

const useStyle=makeStyles({
   component:{
      marginTop:55,
      background:'#f2f2f2'
   },
   container:{
       margin:'0 10%',
       background:'white',
       display:'flex'

   },
   rightContainer:{
     marginTop:40,
     '&>*':{
       marginTop:10
     }
   },
   leftContainer:{
     marginTop:40,
     
   },
   smallText:{
     fontSize:12
   },
   grayColor:{
     color:'#878787'
   },
   price:{
     fontWeight:'bold',
     fontSize:20
   },
   display:{
     display:'flex',
     
   },
   supercoin:{
     width:100
   },
   delivery:{
     display:'flex',
     flexDirection:'column'
   },
   deliveryInput:{
     display:'flex',
     background:'white',
     borderBottom:'2px solid #2674f6',
     width:220,
     height:30

   },
   deliveryInputField:{
     border:'unset',
     fontSize:15,
     fontWeight:500,
     '&:focus':{
        outline:'none'
     }
   },
   imgBtn:{
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
   
    height:'100vh'
    
   },
   button:{
     background:'#fb641b',
     height:50,
     width:200,
     margin:10,
     color:'#fff',
     fontWeight:600,
     textTransform:'uppercase',
     borderRadius:2,
     "&:hover":{
      background:'#fb641b',
     }
   }

})

function DetailView({match}) {
    const classes=useStyle();
    const {product} =useSelector(state=>state.getProductDetail)
    const history=useHistory();
    const dispatch=useDispatch();

    const date=new Date(new Date().getTime()+(5*24*60*60*1000));

    useEffect(()=>{
        dispatch(getProductDetail(match.params.id))
    },[dispatch])

    const addTo_Cart=()=>{
      
      dispatch(addToCart(product.id));
      alert(" this Item is added to the cart!!!")
      history.push('/');
      
    }

    const fassured='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const tag='https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90'
    const cost='https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90'
    const supercoin="https://assets.mspimages.in/wp-content/uploads/2021/01/Flipkart-SuperCoin.png"
    const location="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg=="
    return (
        <Box className={classes.component}>
            
          {
            product && Object.keys(product).length &&
          
          <Box className={classes.container}>
               
            <Box style={{minWidth:'40%'}} className={classes.leftContainer}>
                <Box className={classes.imgBtn}>
                    <img src={product.detailUrl} alt="product" style={{border:'1px solid #f0f0f0',padding:20}} />
                    <Box>
                      <Button className={classes.button} style={{background:'#ff9f00'}} variant="contained" onClick={()=>addTo_Cart()}><ShoppingCartIcon /> Add to Cart</Button>
                      <Button className={classes.button} variant="contained"><FlashOnIcon />proceed to buy</Button>
                    </Box>
                </Box>   
            </Box>
            <Box className={classes.rightContainer}>
            <Box style={{display:'flex',marginTop:10,marginLeft:'80%',cursor:'pointer'}}><span>Share</span><ShareIcon /></Box>
              <Typography style={{fontSize:20}}>{product.title.longTitle}</Typography>
              <Typography className={clsx(classes.smallText,classes.grayColor,classes.display)}>
                <Box style={{background:'green',marginRight:5,height:22,padding:3,borderRadius:3,fontSize:12}}>
                  <span style={{color:'white'}}>4.3</span>
                  <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==' alt="star" />
                </Box>
                10 ratings & 1 review
                 <span><img src={fassured}  style={{width:77, marginLeft:10}}/></span>
                </Typography>
                <Typography>
                  <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;
                  <span className={clsx(classes.grayColor,classes.smallText)}><strike>₹{product.price.mrp}</strike></span>  &nbsp;&nbsp;
                  <span style={{color:'#388e3c'}}>{product.price.discount}off</span>
                </Typography>

                <Typography style={{fontWeight:"bold",fontSize:18}}>Avaible Offers</Typography>
                <Box style={{fontSize:14}}>
                    <Typography style={{marginTop:5,fontSize:14}}><img src={tag} width="18" height="18" slt='tag' />&nbsp;&nbsp;
                      <b>Special Price</b> Get extra 10% off <span style={{color:'#2674f6',cursor:"pointer"}}>T&C</span></Typography>
                    <Typography style={{marginTop:5,fontSize:14}}><img src={tag} width="18" height="18" slt='tag' />&nbsp;&nbsp;
                       <b>Bank Offer</b> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card <span style={{color:'#2674f6',cursor:"pointer"}}>T&C</span></Typography>
                    <Typography style={{marginTop:5,fontSize:14}}><img src={tag} width="18" height="18" slt='tag' />&nbsp;&nbsp;
                        <b>Bank Offer </b>Flat ₹100 off on first Flipkart Pay Later order of ₹500 and above <span style={{color:'#2674f6',cursor:"pointer"}}>T&C</span></Typography>
                    <Typography style={{marginTop:5,fontSize:14}}><img src={cost} width="18" height="18" slt='tag' />&nbsp;&nbsp;
                    No Cost EMI on Flipkart Axis Bank Credit Card <span style={{color:'#2674f6',cursor:"pointer"}}>T&C</span></Typography>
                </Box>
                <Box classname={classes.delivery}>
                  <Box style={{marginBottom:5}}>
                  <img src={location} alt="location" />
                  <span style={{fornSize:14,fontWeight:'bold',color:'#878787',marginLeft:8}}>Delivery to</span>
                  </Box>
                  <Box className={classes.deliveryInput}>
                    <input type="text" className={classes.deliveryInputField} placeholder="Enter delivery pincode"/> 
                    <Typography style={{color:'#878787',fontSize:14,cursor:'pointer',fontWeight:'bold'}}>Check</Typography>
                  </Box>
                </Box>
                <Table>
                   <TableBody>
                     <TableRow>
                       <TableCell className={classes.grayColor} style={{fontWeight:'bold',fontSize:14}}> Delivery </TableCell>
                       <TableCell style={{fontWeight:'bold'}}> {date.toDateString()} </TableCell>
                     </TableRow>
                     <TableRow>
                       <TableCell className={classes.grayColor} style={{fontWeight:'bold',fontSize:14}}> Warranty </TableCell>
                       <TableCell> No Warranty </TableCell>
                     </TableRow>
                     <TableRow>
                       <TableCell className={classes.grayColor} style={{fontWeight:'bold',fontSize:14}}> Brands </TableCell>
                       <TableCell>{product.tagline} </TableCell>
                     </TableRow>
                     <TableRow>
                       <TableCell className={classes.grayColor} style={{fontWeight:'bold',fontSize:14}}> Highlights </TableCell>
                       <TableCell ><li>Flat (L x W): 220 cm x 225 cm</li> 
                                  <li>Material: Microfiber</li> 
                                  <li>Includes: Number of Bedsheets: 1, Number of Pillow Covers: 2</li> 
                                  <li>Thread Count: 144</li> 
                                  <li>Color: Blue</li> 
                                  <li>7 Day Return Policy</li> 

                       </TableCell>
                     </TableRow>
                     <TableRow>
                       <TableCell className={classes.grayColor} style={{fontWeight:'bold',fontSize:14}}> Seller </TableCell>
                       <TableCell style={{display:'flex',color:'#2674f6'}}> VIVATIONLINE&nbsp; 
                          <Box style={{background:'#2674f6',marginRight:5,height:22,padding:3,borderRadius:10,fontSize:12}}>
                            <span style={{color:'white'}}>4.1</span>
                            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==' alt="star" />
                          </Box>
                        </TableCell>
                     </TableRow>
                     <TableRow>
                       <TableCell> <img src={supercoin} alt="supercoin" className={classes.supercoin} /></TableCell>
                       <TableCell> <Box><b>For every ₹100 Spent,<br/>you earn 2 SuperCoins</b></Box>
                                    <small>Max 50 coins per order</small>
                       </TableCell>
                     </TableRow>
                     <TableRow>
                         <TableCell className={classes.grayColor} style={{fontWeight:'bold',fontSize:14}}> Description </TableCell>
                          <TableCell > {product.description} </TableCell>
                     </TableRow>
                   </TableBody>
                </Table>
                
            </Box>
          </Box>

            }
           
        </Box>
    )
}

export default DetailView

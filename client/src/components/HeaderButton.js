import React,{useContext, useState} from 'react'
import {Box,Button,makeStyles,Typography,Badge} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';

import Login from './login/Login';
import { LoginContext } from '../context/ContextProvider';
import Profile from './login/Profile';

const useStyles=makeStyles({
    login:{
        background:'#ffffff',
        color:'#287480',
        textTransform:'none', 
        fontWeight:600,
        borderRadius:2,
        padding:'5px 40px'
    },
    buttons:{
        margin:'0 12% 0 auto',
        display:'flex',
        '& > *':{
            marginRight:50,
            display:'flex',
            alignItems:'center',
            color:'white',
            textDecoration:'none'
        }

    }
})

function HeaderButton() {
    
    const classes=useStyles();
    const [open,setOpen]=useState(false)
    const {account,setAccount}=useContext(LoginContext)
    const openLoginDialog=()=>{
        setOpen(true)
    }

    return (
        <Box className={classes.buttons}>
            {
           
           account?
           <Profile account={account} setAccount={setAccount} />
           :
           <Link> <Button variant="contained" className={classes.login} onClick={()=>openLoginDialog()}>Login</Button></Link>
                
            }
           <Link><Typography >More</Typography></Link>
           <Link to='/cart' >
               <Typography><Badge badgeContent={2} color="secondary"><ShoppingCartIcon /></Badge></Typography>
           </Link>
           <Login open={open} setOpen={setOpen} setAccount={setAccount}/>
        </Box>
    )
}

export default HeaderButton

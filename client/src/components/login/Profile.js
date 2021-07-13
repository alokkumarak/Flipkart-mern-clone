import React, { useState } from 'react'
import {Typography,Menu,MenuItem,makeStyles} from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const useStyle=makeStyles({
    component:{
        marginTop:20
    },
    logout:{
        marginLeft:6,
        fontSize:15
    }
})

function Profile({account,setAccount}) {
    const classes=useStyle();
    const [open,setOpen]=useState(false);

    const handleClose=()=>{
       setOpen(false)
    }

    const handleClick=(e)=>{
        //instead of using true directly use 
        setOpen(e.currentTarget)
    }
    const logout=()=>{
        setAccount('');
    }

    return (
      
        <>
            <Typography onClick={handleClick} >
               Hey,{' '}{account}
            </Typography>
            <Menu
           
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
            className={classes.component}
            >
            <MenuItem onClick={()=>{handleClose();logout()}}><PowerSettingsNewIcon color="primary" />
            <Typography className={classes.logout}
            >Logout</Typography></MenuItem>
            
          </Menu>
        </>
    )
}

export default Profile

import React from 'react';
import { navData } from './data';
import {Box,Typography,makeStyles} from '@material-ui/core';

const useStyles=makeStyles({
    component:{
       display:'flex',
       marginTop:55,
       marginBottom:40,
       
       alignItems:'center',
       justifyContent:'center',
       cursor:'pointer'
    },
    item:{
      
       padding:'10px 20px',
        transition: 'all 300ms',
        '&:hover':{
            background:'#fffaf9',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        }
    },
    image:{
        width:70
    },
    text:{
        fontSize:14,
        fontWeight:'bold'
    }
})

function Nav() {
    const classes=useStyles();

    return (
        <Box className={classes.component}>
            {
                navData.map(data=>(
                    <Box className={classes.item}>
                    <img src={data.url} alt="nav" key={data.id} className={classes.image} />
                    <Typography className={classes.text} >{data.text} </Typography>
                    </Box>
                ))
            }
            
        </Box>
    )
}

export default Nav

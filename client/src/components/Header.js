import React from 'react';
import {AppBar,Toolbar,makeStyles,Typography,Box,withStyles} from '@material-ui/core';
import SearchBar from './SearchBar';
import HeaderButton from './HeaderButton';
import { Link } from 'react-router-dom';

const useStyle=makeStyles({
    header:{
       background:'#2674f6',
       height:55,
       cursor:'pointer'
    },
    logo:{
        width:75
    },
    subUrl:{
       width:10,
       marginLeft:4,
       height:10,
       cursor:'pointer'
    },
    container:{
      display:'flex'
    },
    component:{
        marginLeft:'12%',
        lineHeight:0,
        textDecoration:'none',
        color:'white'
    },
    subHeading:{
        fontSize:10,
        fontStyle:'italic',
        cursor:'pointer'
    }
})

const ToolBar=withStyles({
     root:{
         minHeight:55
     }
})(Toolbar);


function Header() {
    const classes=useStyle();

    const logoUrl='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subUrl='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    return (
            <AppBar className={classes.header}>
                <ToolBar>
                    <Link to='/' className={classes.component}>
                     <img src={logoUrl} className={classes.logo} alt="flipkart" />
                     <Box className={classes.container}>
                     <Typography className={classes.subHeading}>Explore <Box component="span" style={{color:'#ffe500'}}>plus</Box> </Typography>
                     <img src={subUrl} className={classes.subUrl} alt="sublogo" />
                     </Box>
                    </Link> 
                    <SearchBar />
                    <HeaderButton />
                </ToolBar>
            </AppBar>
        
    )
}

export default Header

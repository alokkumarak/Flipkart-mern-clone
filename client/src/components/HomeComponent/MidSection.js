import React from 'react'
import {Box,makeStyles} from '@material-ui/core'
import { ImageURL } from './data'

const useStyle=makeStyles({
    wrapper:{
        display:'flex',
        marginTop:20,
        justifyContent:'space-between'
    }

})

function MidSection() {
    const classes=useStyle();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <>
        <Box className={classes.wrapper}>
             {
                 ImageURL.map(image=>(
                     <img src={image} style={{width:'33%',cursor:'pointer'}}/>
                 ))
             }
        </Box>
        <img src={coronaURL} style={{width:'100%',marginTop:10}}/>
        </>
    )
}

export default MidSection

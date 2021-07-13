import React from 'react'
import {Box, makeStyles} from '@material-ui/core'
// import { PosterURL } from './data'

const useStyle=makeStyles({
   posters:{
      padding:20,
      
   },
   poster:{
      cursor:'pointer',
      padding:20
   }

})

function Poster() {
    const classes=useStyle();
    const posterUrl='https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg';
    const posterUrl2='https://images-us.nivea.com/-/media/local/in/boday_page/3_banner_3080x806.png?rx=626&ry=0&rw=2063&rh=806'
    return (
        
             <Box className={classes.posters}>
                 <img src={posterUrl} style={{width:'44%'}}  className={classes.poster}/>
                 <img src={posterUrl2} style={{width:'44%'}} className={classes.poster} />
            </Box>
                
    )
}

export default Poster

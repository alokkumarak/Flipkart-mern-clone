import React from 'react';
import {makeStyles} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const useStyles=makeStyles((theme)=>({
    search: {
        
        borderRadius: 2,
        backgroundColor: '#fff',
        
        width: '33%',
        display:'flex',
        color:'black',
        paddingLeft:10,
        marginLeft:10
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:'blue',
        cursor:'pointer'
      },
      inputRoot: {
         fontSize:'unset', 
        color: 'inherit',
        width:'100%'
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0)
   
      },
}))

function SearchBar() {
    const classes=useStyles();

    return (
        <div className={classes.search}>
        
        <InputBase
          placeholder="Search for product, brands and more"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
      </div>
    )
}

export default SearchBar

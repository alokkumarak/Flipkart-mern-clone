import React,{useState} from 'react'
import {Box,Dialog,DialogContent,makeStyles,Typography,TextField,Button} from '@material-ui/core'
import { authenticateUser,authlogin } from '../../serviceCallstoBackend/api';



const useStyle=makeStyles({
    components:{
        height:'70vh',
        width:'90vh'
    },
    image:{
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height:'70vh',
        backgroundRepeat:'no-repeat',
        background:'#2874f0',
        width:'40%',
        backgroundPosition:'center 85%',
        padding:'45px 35px',
        '&>*':{
            color:'#ffffff',
            fontWeight:'bold',
            fontFamily: 'Roboto',
            
        }
    },
    login:{
        padding:'25px 35px',
        display:'flex',
        flex:1,
        flexDirection:'column',
        '&>*':{
            marginTop:20
        }

    },
    text:{
       color:'#878787',
       fontSize:12
    },
    loginButton:{
       textTransform:'none',
       background:'#fb8618',
       color:'#ffffff',
       height:48,
       borderRadius:2,
       '&:hover':{
        background:'#fb8618', 
       }
    },
    request:{
        textTransform:'none',
        background:'#ffffff',
        color:'#2874f0',
        height:48,
        borderRadius:2
    },
    create:{
       textAlign:'center',
       marginTop:'auto',
       fontSize:14,
       color:'#2874f0',
       fontWeight:600,
       cursor:'pointer'
    },
    signup:{
        textTransform:'none',
        background:'#fb8618',
        color:'#ffffff',
        height:38,
        borderRadius:2,
        '&:hover':{
         background:'#fb8618', 
        }
    }


})


const dataSet={
    login:{
       view:"login",
       heading:'Login',
       title:"Get access to your Orders, Wishlist and Recommendations"
    },
    signup:{
        view:"signup",
       heading:"Looks like you're new here!",
       title:"Sign up with your mobile number to get started"
    }
}

const signupInitialValue={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}

const loginIitialValue={
    username:'',
    password:''
}


function Login({open,setOpen,setAccount}) {

    const classes=useStyle();

    const [account,togAccount]=useState(dataSet.login)
    const [signup,setSignup]=useState(signupInitialValue);
    const [login,setLogin]=useState(loginIitialValue);
    const [error,setError]=useState(false);



    const handleClose=()=>{
        setOpen(false)
        togAccount(dataSet.login)
    }

    const toggleAccount=()=>{
        togAccount(dataSet.signup);
    }

    const signUpNewUser=async()=>{
      let response=await authenticateUser(signup);
      if(!response) return;
      handleClose();
      setAccount(signup.username);

    }

    const loginUser=async()=>{
        let response=await authlogin(login);
        if(!response){
           setError(true);
           return
        };
        handleClose();
        setError(false)
        setAccount(login.username)
    }

    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value})

    }

    const onloginValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }

    return (

       <Dialog open={open} onClose={handleClose}>
           <DialogContent className={classes.components}>
                  <Box style={{display:'flex'}}>
                      <Box className={classes.image}>
                          <Typography variant='h5'>
                              {account.heading}
                          </Typography>
                          <Typography style={{marginTop:20,fontSize:17}}>
                             {account.title}
                          </Typography>
                      </Box>
                      {
                          account.view=='login'?
                          <Box className={classes.login}>
                          <TextField onChange={(e)=>onloginValueChange(e)} name='username' label='Enter Email/Mobile Number' type="text"/> 
                          <TextField onChange={(e)=>onloginValueChange(e)} name='password' label='Enter Password' type="password" /> 
                          {error && <Typography style={{color:'red',fontSize:12,fontWeight:600,marginTop:15,lineHeight:0}}>Invalid username or password*</Typography>}
                          <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                          <Button className={classes.loginButton} variant="contained" onClick={()=>loginUser()}>Login</Button>
                          <Typography style={{textAlign:'center'}} className={classes.text}>Or</Typography>
                          <Button className={classes.request} variant="contained">Request OTP</Button>
                          <Typography onClick={()=>toggleAccount()} className={classes.create}>New to Flipkart? Create an account</Typography>
                          </Box>:
                          <Box className={classes.login}>
                          <TextField onChange={(e)=>onInputChange(e)} name='firstname' label='Enter FirstName' type="text" /> 
                          <TextField onChange={(e)=>onInputChange(e)} name='lastname' label='Enter LastName' /> 
                          <TextField onChange={(e)=>onInputChange(e)} name='username' label='Enter UserName' type="text" /> 
                          <TextField onChange={(e)=>onInputChange(e)} name='email' label='Enter Email' type="email" /> 
                          <TextField onChange={(e)=>onInputChange(e)} name='password' label='Enter Password' type="password" /> 
                          <TextField onChange={(e)=>onInputChange(e)} name='phone' label='Enter Phone No.' type="number" /> 
                          <Button className={classes.signup} variant="contained" onClick={()=>signUpNewUser()}>SignUp</Button>
                          
                          </Box>
                        
                      }
                      
                  </Box>
           </DialogContent>
       </Dialog>
    )
}

export default Login

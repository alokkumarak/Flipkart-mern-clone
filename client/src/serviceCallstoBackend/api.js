import axios from 'axios';

const url='http://localhost:8000';

export const authenticateUser=async(user)=>{
    try {
        return await axios.post(`${url}/signup`,user)
    } catch (error) {
        console.log("error in signup new user");
    }
    
}

export const authlogin=async(user)=>{
    try {
        return await axios.post(`${url}/login`,user)
    } catch (error) {
        console.log("error while calling login",error.message)
        console.log(user);
    }
}
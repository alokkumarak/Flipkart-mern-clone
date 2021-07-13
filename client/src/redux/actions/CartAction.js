import * as actionType from '../constants/productConst'
import axios from "axios";

const url="http://localhost:8000";

export const addToCart=(id)=>async(dispatch)=>{
    try {
        const {data}=await axios.get(`${url}/product/${id}`);
        dispatch({type:actionType.ADD_TO_CART,payload:data})
    } catch (error) {
        console.log("error in adding to cart:",error.message);
    }
}



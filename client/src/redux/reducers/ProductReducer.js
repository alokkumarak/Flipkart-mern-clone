import * as actionType from '../constants/productConst'

export const getProductsReducer=(state={products:[]},action)=>{
    switch (action.type) {
        case actionType.GET_PRODUCTS_SUCCESS:
            return {products:action.payload}

        case actionType.GET_PRODUCTS_FAIL:
            return {error:action.payload}

        default:
            return state    
    }
}

export const getProductDetailsReducer=(state={product:{}},action)=>{
    switch (action.type) {
        case actionType.GET_PRODUCT_DETAIL_SUCCESS:
            return {product:action.payload}
        case actionType.GET_PRODUCT_DETAIL_FAIL:
            return {error:action.payload}
            
        default:
           return state
    }
}

export const cartReducer=(state={cartItem:[]},action)=>{
    switch (action.type) {
        case actionType.ADD_TO_CART:
              const item=action.payload;
              
             const alreadyExist= state.cartItem.find(product=>product.id===item.id);
             if(alreadyExist){
               return;
             }
             return {...state,cartItem:[...state.cartItem,item]}

        default:
            return state;
    }
}
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getProductsReducer,getProductDetailsReducer,cartReducer } from './reducers/ProductReducer';


const reducer=combineReducers({
   getProducts:getProductsReducer,
   getProductDetail:getProductDetailsReducer,
   cart:cartReducer
})

const middleWare=[thunk]

const store=createStore(
    reducer,
     composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;
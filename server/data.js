import {products} from './constants/products.js'
import Product from './model.js'

//this will import all products data in the mongodb database
const data=async()=>{
   try {
    await Product.deleteMany({})
    await Product.insertMany(products)

    console.log('data imported successfully')
       
   } catch (error) {
       console.log('Error',error.message);
   }
}

export default data;
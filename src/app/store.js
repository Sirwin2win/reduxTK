import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../features/products/productSlice'
import singleSlice from '../features/products/singleSlice'


const store = configureStore({
    reducer:{
        products:productSlice,
        product:singleSlice
    }
})

export default store
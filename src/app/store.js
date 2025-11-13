import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../features/products/productSlice'
import singleSlice from '../features/products/singleSlice'
import itemSlice from '../features/items/itemSlice'


const store = configureStore({
    reducer:{
        products:productSlice,
        product:singleSlice,
        items:itemSlice
    }
})

export default store
import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../features/products/productSlice'
import singleSlice from '../features/products/singleSlice'
import itemSlice from '../features/items/itemSlice'
import cartSlice  from '../features/carts/cartSlice'
import searchSlice from '../features/search/searchSlice'


const store = configureStore({
    reducer:{
        products:productSlice,
        product:singleSlice,
        items:itemSlice,
        carts: cartSlice,
        filter:searchSlice
    }
})

export default store
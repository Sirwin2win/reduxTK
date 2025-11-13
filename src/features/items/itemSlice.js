import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// Getting all the products from the Api
export const getItems = createAsyncThunk(
    'items/getItems',// action type string
    async (_,thunkAPI)=>{
       try {
         const response = await fetch('https://fakestoreapi.com/products')
        const data = response.json()
        return data
       } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
       }
    } // payload creator callback function
)

const itemSlice = createSlice({
    name:'items', // state name
    initialState:{
        items:[],
        status:'idle', // loading, succeeded, failed
        error:null
    }, // initialState
    reducers:{}, // reducers
    extraReducers:(builder)=>{
        builder
        .addCase(getItems.pending, (state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(getItems.fulfilled, (state,action)=>{
            state.status = 'succeeded'
            state.items = action.payload // immer library
        })
        .addCase(getItems.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
    }
})/*
const initialState = {
count:0
}
const [info,dispatch]=useReducer(reducer,initialState)
function reducer(state,action){
switch(action.type){
    case 'increase':
        return {...state,count:state.count = action.payload}
}
}
return (
<div>
<h1>{info.count}</h1>
</div>
)
*/

export default itemSlice.reducer
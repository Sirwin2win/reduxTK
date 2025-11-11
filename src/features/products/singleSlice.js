import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOne = createAsyncThunk(
    'products/fetchOne',
    async (id,thunkAPI)=>{
    try {
            const respose = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = respose.json()
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }

    }
)

const singleSlice = createSlice({
    name:'product',
    initialState:{
        product:0,
        status:'idle', // loading, succeeded, failed
        error: null
    },
    reducers:{},
    extraReducers:(bulder)=>{
        bulder
        .addCase(fetchOne.pending, (state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(fetchOne.fulfilled, (state, action)=>{
            state.status = 'succeeded'
            state.product = action.payload
        })
        .addCase(fetchOne.rejected, (state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
    }
})

export default singleSlice.reducer


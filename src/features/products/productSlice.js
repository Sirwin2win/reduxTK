import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API = 'https://fakestoreapi.com/products'


// Fetching all the products from the fake Api
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_,thunkAPI)=>{
        try {
            const respose = await fetch(API)
        const data = respose.json()
        return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }

)

// Fetch One i.e single or detail product
// export const fetchProduct = createAsyncThunk(
//     'products/fetchProduct',
//     async (id,thunkAPI)=>{
//         const res = await fetch(`https://fakestoreapi.com/products/${id}`)
//         const data = res.json()
//         return data
//     }
// )

const productSlice = createSlice({
    name:'products',
    initialState :{
        products:[],
        status:'idle', // loading, succeeded, failed
        // currentProduct:null,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        // Fetching all the products
        .addCase(fetchProducts.pending,(state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status = "succeeded"
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected, (state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
        // fetch only one product

    }
})

export default productSlice.reducer
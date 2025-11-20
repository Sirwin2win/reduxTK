import { createSlice } from "@reduxjs/toolkit";

/*
localStorage.getItem(): This is used to fetch what is in the localStorage

localStorage.setItem(): This is used to set/ create a value in the localStorage

localStorage.removeItem() : This is used to remove a particular item
localStorage.clear()

*/
// Saving cart to the localStorage
const saveStorage = (n)=>{ // 'n' is a parameter holding the value to be stored
        try {
            localStorage.setItem('cartState',JSON.stringify(n)) // saving as a json string
        } catch (error) {
            return error.message // checking for error
        }
}

// Loading cart from localStorage
const getStorage = ()=>{
   try {
     const data = localStorage.getItem('cartState')// getting the value from localStorage
    return data?JSON.parse(data):null // if data has value, convert it from string to javascript else return null
   } catch (error) {
    return error.message
   }
}
/*
Below is the initialState which first gets value from the localStorage using the getStorage()
declared above. If it has a value it is rendered else, cartItems = [], totalQuantity=0,totalAmount=0
i.e everything return empty
*/
const initialState = 
getStorage() || {
    cartItems:[],
    totalQuantity:0,
    totalAmount:0
}

const cartSlice = createSlice({
    name:'carts', // Slice name, a string which corresponds to store reducer key
    initialState, // initialState from above, being referenced
    reducers:{ // Reducers , usually for internal operations
        /*
addToCart is usually dispatched from the productDetail page with an object reprecenting that
single product being detailed, e.g {id:1,title:'mens shirt',description.....}


        */
        addToCart:(state,action)=>{
            const val = action.payload
          const existingItem = state.cartItems.find((item)=> item.id===val.id)

          if(existingItem){
            existingItem.quantity +=1
            // state.totalQuantity +=1
          }else{
            state.cartItems.push({...val,quantity:1})
            //  state.totalQuantity ++
          }
          // Incrementing the totalQuantity and totalAmount
          state.totalQuantity += 1
          state.totalAmount += val.price
          // save to localStorage
          saveStorage(state)
        },
        clearCart:(state)=>{
            state.cartItems = []
            state.totalQuantity = 0
            state.totalAmount = 0
    //    saveStorage(state)
        },
        removeOne:(state,action)=>{
         let id = action.payload
         const removedItem = state.cartItems.find((v)=> v.id=== id)
         if(removedItem){
            state.totalQuantity -= removedItem.quantity
            state.totalAmount -= removedItem.price * removedItem.quantity
         }
         state.cartItems = state.cartItems.filter((v)=> v.id !==id)
         // Save to localStorage
            saveStorage(state)
        },
        increaseCart:(state,action)=>{
            const id = action.payload // payload her is the id that is dispatched from CartPage
            const item = state.cartItems.find((v)=> v.id === id)
            if(item){
               item.quantity +=1
               state.totalQuantity += 1
               state.totalAmount += item.price
            }
            saveStorage(state)
        },
        decreaseCart:(state,action)=>{
            let id = action.payload
            const item = state.cartItems.find((v)=>v.id===id)
            if(item){
                item.quantity -=1
                state.totalQuantity -=1
                state.totalAmount -= item.price
            }
            if(item.quantity === 0){
                state.cartItems = state.cartItems.filter((v)=>v.id !== id)
            }
            saveStorage(state)
        }
    },
})

export const {addToCart, increaseCart, removeOne, clearCart, decreaseCart} = cartSlice.actions
export default cartSlice.reducer
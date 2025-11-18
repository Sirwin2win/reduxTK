import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { cartInfo } from '../features/carts/cartSlice'
import { increaseCart, removeOne, clearCart , decreaseCart} from '../features/carts/cartSlice'




const CartPage = () => {
    // const {cartItems, totalQuantity, totalAmount} = useSelector((state)=>state.cartItems) nest nextjs
    const dispatch = useDispatch()
    const {cartItems, totalQuantity, totalAmount} = useSelector((state)=>state.carts)
    console.log(cartItems)
   
  return (
    <div>
      <h1>Cart Items</h1>
      {cartItems.map((cart)=>(
        <div key={cart.id}>
            <h5>{cart.title}</h5>
            <img src={cart.image} style={{height:'100px',width:'100px'}} />
            { console.log(cart.id)}
          <div className="row">
            <div className="col-sm-4">
                  <button className='btn btn-danger' onClick={()=>dispatch(removeOne(cart.id))}>Remove Item</button>
          
            </div>
            <div className="col-sm-4">
                  <button className='btn btn-warning text-light' onClick={()=>dispatch(increaseCart(cart.id))}>+</button>
          
            </div>
            <div className="col-sm-4">
                  <button className='btn btn-warning text-light' onClick={()=>dispatch(decreaseCart(cart.id))}>-</button>
          
            </div>
          </div>
          <p>Item Quantity : {cart.quantity}</p>
            <hr />
        </div> 
      ))}
      <button className='btn btn-danger' onClick={()=>dispatch(clearCart())}>Clear Cart</button>
      <p>Total Quantity : {totalQuantity}</p>
      <p>Total Amount : {totalAmount}</p>
    </div>
  )
}

export default CartPage

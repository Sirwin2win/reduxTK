import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../features/items/itemSlice'


const Blog = () => {
  const {items,status,error} = useSelector((state)=>state.items)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(status==='idle'){
      dispatch(getItems())
    }
  },[status,dispatch])
  console.log(items)
  if(status==='loading') return <h1>Loading...</h1>
  return (
    <div>
      <h1>Blog Page</h1>
      <div className="row">
        {items.products.map((item)=>(
          <div className="col-sm-4">
            <div className="card" style={{width: '18rem'}}>
          <img src={item.thumbnail} className="card-img-top" alt="..." />     
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p> */}
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog

import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/products/productSlice'
import { Link } from 'react-router-dom'


const Products = () => {
  const dispatch = useDispatch()
  const {products, status, error} = useSelector((state)=>state.products)
  const searchItem = useSelector((state)=>state.filter.searchItem)

  const filteredProducts = products.filter((p)=>
    p.title.toLowerCase().includes(searchItem.toLowerCase()) ||
    p.category.toLowerCase().includes(searchItem.toLowerCase())
  )
  useEffect(()=>{
    if(status==='idle'){
      dispatch(fetchProducts())
    }
  },[status,dispatch])
  // console.log(products)
  if(status==='loading'){
    return <h1>Loading...</h1>
  }
  if(status==='failed'){
    return <h1>Error:</h1>
  }
  return (
    <div className='container'>
      <h1>Products Page</h1>
      <div className="row">
      {filteredProducts.map((product)=>(
        <div key={product.id} className='col-sm-4 my-5'>
          {/* <h5>{product.title}</h5> */}
          <div className="card" style={{width: '18rem'}}>
  <img src={product.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p> */}
    <Link to={`/product/${product.id}`} className="btn btn-primary">Go somewhere</Link>
  </div>
</div>

        </div>
      ))}

      </div>
    </div>
  )
}

export default Products

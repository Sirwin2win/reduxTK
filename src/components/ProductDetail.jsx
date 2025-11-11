import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchOne } from '../features/products/singleSlice'


const ProductDetail = () => {
    const {product, status,error} = useSelector((state)=>state.product)
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        if(id){
            dispatch(fetchOne(id))
        }
    },[id, dispatch])
    // console.log(product)
    if(status==='loading'){
        return <h1>Loading...</h1>
    }
  return (
    <div>
      <h1>Detail page</h1>
      <div className="card mb-3" style={{maxWidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.image} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ProductDetail

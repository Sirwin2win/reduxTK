import {useState} from 'react'
// import {setSearchTerm} from '../features/search/searchSlice'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../features/search/searchSlice'



const SearchBar = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
const handleChange = (e)=>{
    setText(e.target.value)
    // setSearchTerm(dispatch(e.target.value))
    dispatch(setSearchTerm(e.target.value))
}

  return (
    <div>
      <input type='text' value={text} onChange={handleChange} placeholder='Search Products....' />
    </div>
  )
}

export default SearchBar

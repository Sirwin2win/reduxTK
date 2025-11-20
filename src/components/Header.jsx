import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.jpg'
// import ThemeContext from '../ThemeContext'
import { IoMdCart } from "react-icons/io";
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
// import { totalQty } from '../features/carts/cartSlice';






const Header = () => {

  const {totalQuantity} = useSelector((state)=>state.carts)

  console.log(totalQuantity)
  // const {theme, toggleTheme} = useContext(ThemeContext)

    const myStyle = {
        color:"white",
        fontSize:'20px',
        fontWeight:900
    }
  return (
  //  <div style={{backgroundColor:theme}}>


      <nav  className="navbar navbar-expand-lg bg-primary">
        {/* <button onClick={toggleTheme}>Change Theme</button> */}
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}><img style={{height:'50px'}} className='rounded-circle' src={logo} alt='' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-primary">
        <li className="nav-item">
          <Link style={myStyle} className="nav-link active text-light" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link style={myStyle} className="nav-link text-light" to={'/about'}>About</Link>
        </li>
        <li className="nav-item">
          <Link style={myStyle} className="nav-link text-light" to={'/contact'}>Contact</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to={'/'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={'/'}>Action</Link></li>
            <li><Link className="dropdown-item" to={'/'}>Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to={'/'}>Something else here</Link></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <Link style={myStyle} to={'/blog'} className="nav-link text-light" >Blog</Link>
        </li>
        <li className="nav-item">
          <Link style={myStyle} to={'/product'} className="nav-link text-light" >Products</Link>
        </li>
        <li className="nav-item">
          <Link style={myStyle} to={'/new'} className="nav-link text-light" >New</Link>
        </li>
        <li className="nav-item">
          <Link style={myStyle} to={'/cart'} className="nav-link text-light" ><IoMdCart className='text-danger' /> {totalQuantity}</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <SearchBar />
    </div>
  </div>
</nav>
      // </div>
  )
}

export default Header

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Search from './Search';


export default function Navbar() {

  const [search,setSearch]=useState(false)

  const searchHandle=()=>{
      setSearch(true)
  }

  const mobilerespon=()=>{
    setSearch(true)
  }

  return (
    <>
    

    <nav className="navbar navbar-expand-lg navbar-light fixed">
    {
   search ? <Search setSearch={setSearch}/>:<SearchIcon className='searchIcontop' onClick={mobilerespon}/>
    }
  <div className="container">
    <Link to={"/"}><img src={logo} alt="logo" /></Link>


    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
       <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">

        
          <Link to={"/"} className="nav-link active" >
          <li className="nav-item">
            Home  <span class="sr-only">(current)</span>
           </li> 
          </Link>
    
          <Link to={'/about'} className="nav-link">
          <li className="nav-item">
            About
           </li> 
         </Link>
       

     
         <Link to={'/elements'} className="nav-link">
         <li className="nav-item">
           Elements
         </li> 
         </Link>
       

       
         <Link to={'/archive'} className="nav-link">
         <li className="nav-item">
           Posts
         </li>  
        </Link>
       

       
         <Link to={'/contact'} className="nav-link">
         <li className="nav-item">
           Contact
         </li>  
       </Link>
       {
            search ?(
              <Search setSearch={setSearch} style={{transition:"1s"}}/>
            ):(
              
              <button onClick={searchHandle} className="searchButton">
                 Search <SearchIcon className='searchIcon'/>
              </button>
             
            )
         }
      
      </ul>
      
    </div>
  
       
  </div>
 
    
</nav>
    
    
    
    
    
    
    
    </>
  )
}

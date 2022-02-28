import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './Search.css'
import { useNavigate} from 'react-router-dom';

export default function Search({setSearch}) {
   const Navigate=useNavigate();
    const crossHandle=()=>{
        setSearch(false)
    }



  const LinkHandle=()=>{
    Navigate("/about")
    Navigate("/")
  }




  return (
    <>
    

 <div className="search">
       <div className="inputandCross">
           <input type="text" placeholder='Type to search blog..' />
            <CloseIcon onClick={crossHandle} className="CrossIcon" style={{fontSize:"33px"}}/>
       </div>

       <div className="postTag">
         <h3>See posts by tags</h3>
       </div>
       <div className="searchBtn">
        <button onClick={LinkHandle}>Life</button>
         <button onClick={LinkHandle}>Lifestyle</button>
         <button onClick={LinkHandle}>Lighting</button>
         <button onClick={LinkHandle}>Machine</button>
         <button onClick={LinkHandle}>Startups</button>
         <button onClick={LinkHandle}>work</button>
       </div>


       <div className="postTag">
         <h3>See posts by tags</h3>
       </div>
       <div className="searchBtn">
         <button>Al</button>
         <button>Earth</button>
         <button>Tech</button>
         
       </div>




   </div>

      
</>
 

    
    
   
  )
}

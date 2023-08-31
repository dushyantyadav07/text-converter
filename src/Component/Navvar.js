import React from 'react'
import { Link } from 'react-router-dom'
 
 

export default function Navvar(props) {

  return (
    <div id='logo'>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid"  >
    <Link className="navbar-brand" to="/" >{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active mx-2"   aria-current="page"  to ='/' >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active mx-2" for  to ='/about'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active mx-3" to ='/'>Textform</Link>
         </li> 
   
      </ul>

     
      {/* <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search" />
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
        */}

         {/* <div className="bg-primary rounded mx-3" onClick={() => {props.togglemode(`primary`)}} style = {{height: "30px", width:"30px", cursor:"pointer"}}></div> */}

      
  
      <div className={`form-check form-switch text-${props.mode === 'dark' ? 'warning':'dark' }`}>
        <div className='mx-3 my-3 right'>
  <input className="form-check-input mx-2 " onClick={() => {props.togglemode()}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
<label className="form-check-label "  htmlfor="flexSwitchCheckDefault" >{props.dark} </label>
</div>

</div>
<div className="nav-item">
          <Link className="nav-link active text-warning fw-bold"  to ='/login'>Login</Link>
        </div> 
    </div>
  </div>
</nav>
    </div>
  )
}
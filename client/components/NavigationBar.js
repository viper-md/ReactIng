import React from 'react';
import{Link} from 'react-router'
export default ()=>{
    return (
  <nav className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <ul className="nav nav-tabs">
   <li role="presentation">
     <Link to='/' className=''>Home Page</Link>
    </li>
   <li role="presentation">
    <Link to='/register' className=''>Register</Link>
    </li>    
</ul>
  </div>
</nav>
    )
}
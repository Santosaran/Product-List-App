import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../images/GravityWellLogo.gif';

import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";



const Navbar = ({title}) =>{
 
        return (
            <nav className="navbar  bg-primary">
              <div className='medium'>
              
               {title}
           
              </div>

            <ul>
                
                <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/widgets'>Men's Clothing</Link>
                </li>
                <li>
                <Link to='/wudgets'>Women's Clothing</Link>
                </li>
                <li>
                <Link to='/doodads'>Jewellery</Link>
                </li>
                
            </ul>
          </nav>
        )
    
}
 Navbar.defaultProps={
  title:'Product List App',
};

export default Navbar
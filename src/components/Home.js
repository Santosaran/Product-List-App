import React from 'react';
import {FormControlLabel} from "@material-ui/core";
import Switch from '@material-ui/core/Switch';
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from "react-router-dom";

const Home=({toggleDarkModeHandler})=> {
  const history=useHistory()
    return (
      <div className='home'>
         <FormControlLabel control={<Switch  color="primary"  name="checked"  inputProps={{ 'aria-label': 'primary checkbox' }} onChange={toggleDarkModeHandler}/>}/>
        <h1>Welcome to Product List App</h1>

{/* All three of these work */}

        {/* <IconButton onClick={() => history.push('/wudgets')} >
      <AddIcon background="primary"></AddIcon>
    </IconButton> */}
    <Link to="/widgets">
      <Button variant="outlined" color="primary" style={{height:200,width:250,margin:10}}>
        <h2>Men's Clothing</h2>
        
     
      </Button>
      
    </Link>
    
    <Link to="/wudgets">
      <Button variant="outlined" color="primary" 
      style={{height:200,width:250,margin:10}}>
      <h2>Women's Clothing</h2>
        
      </Button>
      
    </Link>
    <Link to="/doodads">
      <Button variant="outlined" color="primary" style={{height:200,width:250,margin:10}}>
      <h2>Jewellery</h2>
       
      </Button>
      
    </Link>

   
      </div>
    );
  }

  export default Home;
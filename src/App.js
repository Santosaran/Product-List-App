import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Widgets from './components/Widgets';
import Wudgets from './components/Wudgets';
import Doodads from './components/Doodads';
import Profile from './components/Profile';
import SkelDemoMat from './components/SkeletonDemoMaterial';
import { ThemeProvider } from "@material-ui/styles"; 
import {CssBaseline,Typography,createMuiTheme, Paper, FormControlLabel} from "@material-ui/core";



const themeObject ={
  palette: {
    type: "light"
  }
}


const useDarkMode=()=>{
  const [theme, setTheme]=useState(themeObject)
  const {palette:{type}}=theme;
  const toggleDarkMode=()=>{
    const updatedTheme={
      ...theme,
      palette:{
        ...theme.palette,
        type:type==='light' ? 'dark': 'light'
      }
      }
  
    setTheme(updatedTheme);
  }
  return[theme,toggleDarkMode]

}



const App =()=>{


  // const useDarkMode=()=>{
  //   const [theme, setTheme]=useState(themeObject)
  //   const {palette:{type}}=theme;
  //   const toggleDarkMode=()=>{
  //     const updatedTheme={
  //       ...theme,
  //       palette:{
  //         ...theme.palette,
  //         type: type==='light' ? 'dark': 'light'
  //       }
  //       }
    
  //     setTheme(updatedTheme);
  //   }
  //   return [theme ,toggleDarkMode]
  
  // }
  const [theme, toggleDarkMode]=useDarkMode();
  const themeConfig=createMuiTheme(theme);
  
  const widgetprods=[
    {name: 'Backpack', price:'109.95'},
    {name: 'T-Shirts', price:'22.3'},
    {name: 'Jacket', price:'55.99'},
    {name: 'Slim Fit', price:'15.99'}
  ]

  const doodadprods=[
    {name: 'Gold Bracelet', price:'695'},
    {name: 'Gold Ring', price:'1000'},
    {name: 'Diamond ring', price:'1500'},
    {name: 'Gold Bangle', price:'600'}
  ]

 

  const [currProdState,setProdState]=useState({
    wudgetprods:[
      {name: 'Winter Coats', price:'1000'},
      {name: 'Short Sleeve', price:'800'},
      {name: 'Long Coat', price:'600'},
      {name: 'Rain Jacket', price:'900'}
      ]
    });
  
    const applyDiscountHandler= (event)=>{
     
      setProdState({ 
        wudgetprods:[
            {name: 'Winter Coat', price:'700'},
            {name: 'Short Sleeve', price:'600'},
            {name: 'Long Coat', price:'400'},
            {name: 'Rain Jacket', price:'500'}
          ]
      })
    } 
     
  return (
    <Router>
         <ThemeProvider theme={themeConfig} >
      <CssBaseline />
     
    
      <div>
        <Navbar />  
         
      
          <div className='container'>
            
         
            <Switch>
              {/* <Route exact path='/' component={Home} />  */}
              <Route
                exact
                path='/'
                render={(props)=>
                  <Fragment>
                
                    <Home {...props}  toggleDarkModeHandler={toggleDarkMode}/>
                  
                  </Fragment>
                }
              />
              <Route
                exact
                path='/widgets'
                render={(props)=>
                  <Fragment>
                
                    <Widgets prods={widgetprods}/>
                  
                  </Fragment>
                }
              />

            <Route
              exact
              path='/wudgets'
              render={(props)=>
                <Fragment>
              
                  <Wudgets {...props} 
                  prods={currProdState.wudgetprods}
                  applyDiscount={applyDiscountHandler}/>
                
                </Fragment>
              }
            />
             <Route
              exact
              path='/doodads'
              render={(props)=>
                <Fragment>
              
              <Doodads prods={doodadprods}/>
              
                
                </Fragment>
              }
            />
            
              
               {/* <Route
                exact
                path='/switchtheme'
                render={(props)=>
                  <Fragment>
                
                    <SwitchTheme onCkick={toggleDarkMode}>Mode</SwitchTheme>
                  
                  </Fragment>
                }
              /> */}
            </Switch>

          </div>
      </div>
   
      </ThemeProvider>
      </Router>
  )};

export default App;
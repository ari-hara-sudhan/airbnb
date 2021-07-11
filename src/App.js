import React from 'react'
import Footer from './Footer'
import "./App.css"
import Header from "./Header"
import Home from './Home'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import SearchPage from './SearchPage'
function App() {
  return (
    <div className="app">
      <Router>
       
        <Header/>
        <Switch>
          <Route path="/Search">
            <SearchPage/>

          </Route>
          <Route path="/">
          <Home/>

          </Route>

        </Switch>
      <Footer/>
       
      </Router>
    
     
   
 
    </div>
  )
}

export default App

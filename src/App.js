import React from 'react'
import Footer from './Footer'
import "./App.css"
import Header from "./Header"
import Home from './Home'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          
        </Switch>
      </Router>
     <Header/>
      <Home/>
      <Footer/>
 
    </div>
  )
}

export default App

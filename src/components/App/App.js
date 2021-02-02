import React from 'react'
import { Route, BrowserRouter, NavLink } from 'react-router-dom'

import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import './App.css'

const App = () => {

  return(
    <BrowserRouter>
      <div>
        <div>
          <NavLink to='/login'>Login</NavLink>
        </div>
        <div>
          <NavLink to='/registration'>Registration</NavLink>
        </div>        
      </div>
      <div>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/registration'>
          <Registration />
        </Route>      
      </div>
    </BrowserRouter>
  )
}

export default App
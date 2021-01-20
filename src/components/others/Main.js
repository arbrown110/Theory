import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from '../others/NavBar';
import Home from '../others/home'
import About from '../others/about'
import Adventures from '../components/Adventures'
//import AdventureUnique from '../components/AdventureUnique'
// import Links from '../other/links'
// import Contacts from '../others/contacts'

const Main = () => {
      <Router>
        <div className='App'>
          <NavBar />
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/adventures' component={Adventures} />
          {/* <Route path='/link' component={Lin} />
          <Route path='/logout' component={Logout} /> */}
        </div>
      </Router>
    )
  }
}

export default Main;
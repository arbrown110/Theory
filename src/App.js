import './App.css';
import React from 'react';

import NavBar from './components/others/NavBar'
import About from './components/others/about'
import Contact from './components/others/contact'
import Home from './components/others/Home'
import links from './components/others/links'
import Adventures from './components/Adventures'
import AdventureUnique from './components/AdventureUnique'
import EventEdit from './components/EventEdit'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends React.Component {

  render() {
    console.log(this.props.adventures, "..loading maybe");
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Switch>

          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/links' component={links} />
          <Route exact path='/adventures' component={() => <Adventures adventures={this.props.adventures} /> } />
          <Route  path='/adventures/:id' render={(routerProps) => <AdventureUnique {...routerProps} adventures={this.props.adventures} /> } />
          <Route  path="/adventures/:adventureId/events/:eventId" render={(routerProps) => <EventEdit {...routerProps} adventures={this.props.adventures}/> } />
          </Switch>
          
        </div>
      </Router>
    )
  }
}

export default App;

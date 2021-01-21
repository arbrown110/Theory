import './App.css';
import React from 'react';
//import Main from './others/Main'
//import AdventuresContainer from './containers/AdventuresContainer';
import NavBar from './components/others/NavBar'
import About from './components/others/about'
import Contact from './components/others/contact'
import Home from './components/others/Home'
import links from './components/others/links'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// const App = () =>  {
//   return (
//     <div className="App">
      
//        <Main />
      
//       <AdventuresContainer />
//     </div>
//   );
// }

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/links' component={links} />
          
        </div>
      </Router>
    )
  }
}

export default App;

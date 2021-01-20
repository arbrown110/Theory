import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from '../others/NavBar';
import Home from '../others/home'
import About from '../others/about'
import Adventures from '../components/Adventures'
import AdventureUnique from '../components/AdventureUnique'
import Links from '../other/links'
import Contacts from '../others/contacts'

const Main = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route path='/adventures' render={(routerProps) => <Adventures {...routerProps} adventures={this.props.adventures} />} />
                <Route path='/adventures/:id' render={(routerProps) => <AdventureUnique {...routerProps} adventures={this.props.adventures} />} />
                <Route exact path='/links' component={Links} />
                <Route exact path='/contacts' component={Contacts} />
            </Switch>
        </div>
        
    );
};

export default Main;
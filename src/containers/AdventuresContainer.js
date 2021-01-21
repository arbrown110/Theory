import React, { Component } from 'react'
import { fetchAdventures } from '../actions/adventuresActions'
import { connect } from 'react-redux'
import Adventures from '../components/Adventures'
import AdventureUnique from '../components/AdventureUnique'
import { Route } from 'react-router-dom'
import EventEdit from '../components/EventEdit'
import { BrowserRouter as Router } from 'react-router-dom'


class AdventuresContainer extends Component {
    componentDidMount() {
        this.props.fetchAdventures()
    }

    render() {
        
        return (
           <Router>

               <div>
                   <Route  path="/adventures/:adventureId/events/:eventId" render={(routerProps) => <EventEdit {...routerProps} adventures={this.props.adventures}/> } />
                   <Route  path='/adventures/:id' render={(routerProps) => <AdventureUnique {...routerProps} adventures={this.props.adventures} /> } />

                   <Route exact path='/' render={() => <Adventures adventures={this.props.adventures} /> } />
               </div>
           
           </Router>

        )
    }
    
}
const mapStateToProps = state => {
    return {
        adventures: state.adventures.adventures
    }
}
  
export default connect(mapStateToProps, {fetchAdventures})(AdventuresContainer);
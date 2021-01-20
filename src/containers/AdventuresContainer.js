import React, { Component } from 'react'
import { fetchAdventures } from '../actions/adventures'
import { connect } from 'react-redux'
import Adventures from '../components/Adventures'
import AdventureList from '../components/AdventureList'
import { Route } from 'react-router-dom'
import EventEdit from '../components/EventEdit'



class AdventuresContainer extends Component {
    componentDidMount() {
        this.props.fetchadventures()
    }

    render() {
        
        return (
            <Container>

                <div>
                    <Route path="/adventures/:adventureId/events/:eventId" render={(routerProps) => <EventEdit {...routerProps} adventures={this.props.adventures}/> } />

                    <Route exact path='/adventures/:id' render={(routerProps) => <AdventureList {...routerProps} adventures={this.props.adventures} /> } />
                    <Route exact path='/' render={() => <Adventures adventures={this.props.adventures} /> } />
                </div>
            </Container>
        )
    }
    
}
const mapStateToProps = state => {
    return {
        adventures: state.adventures.adventures
    }
}
  
export default connect(mapStateToProps, {fetchadventures})(adventuresContainer);
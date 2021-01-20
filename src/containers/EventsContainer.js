import React, { Component } from 'react'
import Events from '../components/Events'


class EventsContainer extends Component {

    render() {
        return (
            <div>
                <Events events={this.props.adventure && this.props.adventure.events} />
            </div>
        )
    }


}

export default EventsContainer
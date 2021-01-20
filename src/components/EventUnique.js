import React from 'react'
import { connect } from 'react-redux'
import { deleteEvent} from '../actions/eventActions'
import { Link } from 'react-router-dom'


class Event extends React.Component {
    render() {
        const { id, title, description, krio, adventureId, deleteEvent } = this.props

        return (
            <div id={id}>
                <div className='title'>{title}</div>
                <br></br>
                <div classNme='description'>{description}</div>
                <br></br>
                <div className='krio'>{krio}</div>
                <br></br>
                <Link to={{pathname: `/adventures/${adventureId}/events/${id}`, state: {title, description, krio },}}>
                    Edit
                </Link>
                <button onClick={() => deleteEvent(id, adventureId)}>Delete</button>
                <br></br>
            </div>
        )
    }
}

export default connect(null, {deleteEvent})(EventUnique)
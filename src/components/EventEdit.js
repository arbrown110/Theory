import React from 'react'
import { connect } from 'react-redux'
import { editEvent } from '../actions/eventActions'

class EventEdit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: props.location.state.title,
            description: props.location.state.description,
            krio: props.location.state.krio,
            id: props.match.params.EventId,
            adventure_id: props.match.params.productId
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.props.editEvent(this.state.id, this.state.adventure_id, this.state)
        this.setState({
            title: '',
            description: '',
            krio: ''
        })
        this.props.history.push(`/adventures/${this.state.adventure_id}`)

    }
    render() {

        return (
            <div>
                <h3>Edit Event</h3>
                <form onSubmit={this.handleSubmit}>
                    <label for="title">Title:</label>
                    <textarea name="title" value={this.state.title} onChange={this.handleChange}/>
                    <label for="description">Description:</label>
                    <textarea name="description" value={this.state.description} onChange={this.handleChange}/>
                    <label for="krio">What I should say:</label>
                    <textarea name="krio" value={this.state.krio} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}


export default connect(null, { editEvent })(EventEdit)
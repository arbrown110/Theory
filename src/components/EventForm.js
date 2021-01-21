import React from 'react'
import { addEvent } from '../actions/eventActions'
import { connect } from 'react-redux'

class EventForm extends React.Component {
  state = {
    star_rating: '',
    krio: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.star_rating === '' || this.state.krio === '') {
      alert('Please fill out both fields')
    } else {
      this.props.addReview(this.state, this.props.product.id)
      this.setState({
        star_rating: '',
        krio: '',
      })
    }
  }

  render() {
    return (
      <div>
        <h3>what happened today?</h3>
        <form onSubmit={this.handleSubmit}>
        <label for='title'>title:</label>
        <br></br>
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
          />
        <br></br>
        <label for='description'>What Happened? :</label>
          <br></br>
          <textarea
            type='text'
            name='description'
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br></br>
          <label for='krio'>What I should say :</label>
          <br></br>
          <textarea
            type='text'
            name='krio'
            value={this.state.krio}
            onChange={this.handleChange}
          />
          <div className='formButton'>
            <input type='submit' />
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addEvent })(EventForm)
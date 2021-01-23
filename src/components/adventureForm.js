import React, { Component  } from 'react';
import { addAdventure } from '../actions/adventuresActions'
import { connect} from 'react-redux'

class AdventureForm extends Component {
    componentDidMount() {
        // debugger;
    }
    state = {
        name: '',
        image_url: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        //debugger
        this.props.addAdventure(this.state)
    }

    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type='text' value={this.state.name} 
                onChange={this.handleChange} 
                name='name'/>
                <br/>

                <label>Image:</label>
                <input type='text' value={this.state.image_url} 
                onChange={this.handleChange} 
                name='image_url'/>
                <br/>
                <input type='submit' value='Create Entry' />


            </form>
        );
    }
}

export default connect(null, { addAdventure })(AdventureForm);

//storestate == redux store it's global  localstate == component state is isolate to that component only
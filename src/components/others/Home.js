import React from 'react'
import { connect } from 'react-redux'
import mama from '../../mama.gif'
//import  AdventuresContainer from '../../containers/AdventuresContainer'
import EventsContainer from '../../containers/EventsContainer'
import { fetchAdventures} from '../../actions/adventuresActions'
import AdventuresContainer from '../../containers/AdventuresContainer'

class Home extends React.Component{
    // componentDidMount() {
    //   this.props.fetchAdventures()
    // }
    render(){

        return (
            <div>
                <div className="center" >
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img src={mama} alt="mama"/>
                    
                </div>
                <section>
                <br></br>
                <br></br>                
                <br></br>
                <AdventuresContainer />
            </section>
                
                <br></br>
                <br>
                </br>
                {/* <EventsContainer /> */}
            </div>
        )
    }
}

export default connect(state => state, {fetchAdventures})(Home);
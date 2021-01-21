import React from 'react'
import { connect } from 'react-redux'
import mama from '../../mama.gif'
import { fetchAdventures} from '../../actions/adventuresActions'
import AdventuresContainer from '../../containers/AdventuresContainer'

class Home extends React.Component{

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

            </div>
        )
    }
}

export default connect(state => state, {fetchAdventures})(Home);
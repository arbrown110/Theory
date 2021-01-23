import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AdventureForm from '../components/adventureForm'
import AdventuresContainer from '../containers/AdventuresContainer'

const  Adventures = (props) => {
   
    //console.log("hello", props)
    return (
        <div>
            {props.adventures.map(adventure => 
               
                    <Link to ={`/adventures/${adventure.id}`} key={adventure.id}>
                        <div> 
                            <h3> {adventure.name}</h3>
                            <img src={adventure.image_url} alt="Topics" width={300} height="100%" />
                        </div>

                        
                    </Link>

                
            )}
            <AdventuresContainer />
            <AdventureForm />
        </div>
    )
}

export default connect(state => {
    return {adventures: state.adventures.adventures}
}, {})(Adventures)
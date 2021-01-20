import React from 'react'
import { Link } from 'react-router-dom'

export default function adventures(props) {

    return (
        <div className="adventureCards">
            {props.adventures.map(adventure => 
                <>
                    <Link to ={`/adventures/${adventure.id}`} key={adventure.id}>
                        <div
                        id={adventure.id} 
                        name={adventure.name} 
                        image={adventure.image_url} 
                        events={adventure.events}
                        /> 
                    </Link>

                </>
            )}
        </div>
    )
}
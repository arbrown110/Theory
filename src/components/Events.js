import React from 'react'
import EventUnique from '../components/EventUnique'


function Events(props) {
 return (
     <div>
         <h3>What has happened so far:</h3>
         {props.events && props.events.map(event => 
             <EventUnique id={event.id} title={event.title} description={event.description} krio={event.krio} adventureId={event.adventure_id}/>      
         )}
     </div>
 )
    
}
 export default Events
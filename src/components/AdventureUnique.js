import React from 'react'
import EventsContainer from '../containers/EventsContainer'
import EventForm from '../components/EventForm'

const AdventureUnique = (props) => {
  let adventure = props.adventures.find(
    (adventure) => adventure.id === props.match.params.id
  )
 //console.log(adventure, "...load")
  return (
    <div className='AdventureUnique'>
      <div className='adventureUniqueImage'>
        {adventure ? (
          <img
            src={adventure.image_url}
            alt='adventure displayed '
            max-width='200px'
            max-height='200px'
          />
        ) : null}
      </div>
      <div className='adventureUniqueInfo'>
        <h1>{adventure ? adventure.name : null}</h1>
      </div>
      <EventForm adventure={adventure} />
      <br></br>
      <br></br>
      <EventsContainer adventure={adventure} />
    </div>
  )
}

export default AdventureUnique

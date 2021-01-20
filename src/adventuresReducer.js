export const adventuresReducer = (state = { adventures: [] }, action) => {

    switch (action.type) {
  
      case 'FETCH_ADVENTURES':
        return {...state, adventures: action.payload};
  
      case 'ADD_ADVENTURE':
        return {...state, adventures: [...state.adventures, action.payload]};
  
      case 'DELETE_ADVENTURE':
        const  deletedAdventure= state.adventures.filter(adventure => adventure.id !== action.payload)
        return {...state, adventures: deletedAdventure}
  

  
      case 'ADD_EVENT':
        const addEvent = state.adventures.map(adventure => {
          if (adventure.id === action.payload.id) {
            return action.payload
          } else {
            return adventure
          }
        })
        return {...state, adventures: addEvent}
  
      case 'DELETE_EVENT':
        const deleteEvent = state.adventures.map(adventure => {
          if (adventure.id === action.payload.id) {
            return action.payload
          } else {
            return adventure
          }
        })
        return {...state, adventures: deleteEvent}
  
      default:
        return state;
    }
  }
  











///return action.playload will return the data that you are passing
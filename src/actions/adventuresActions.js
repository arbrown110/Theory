export function fetchAdventures() {
  
    return (dispatch) => {
      
      fetch('http://localhost:3001/adventures')
      .then(response => response.json())
      .then(response => { 
        console.log(response)
        return response
      })
      .then(adventureData => dispatch({
        type: 'FETCH_ADVENTURES', 
        payload: adventureData
      }));
    };
  }

export const addAdventure = (adventure) => {
    return (dispatch) => {
        fetch('http://localhost:3001/adventures', {
            method: 'POST',
            body: JSON.stringify(adventure),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(adventure => dispatch({ type: 'ADD_ADVENTURE', payload: adventure}))
    }
}

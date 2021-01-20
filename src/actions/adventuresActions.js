export function fetchAdventures() {
  
    return (dispatch) => {
      
      fetch('http://localhost:3000/adventures')
      .then(response => response.json())
      .then(adventureData => dispatch({
        type: 'ADVENTURES', 
        payload: adventureData
      }));
    };
  }
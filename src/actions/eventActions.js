export const addEvent = (event, adventureId) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/adventures/${adventureId}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
        .then(resp => resp.json())
        .then(adventure => dispatch({
            type: 'ADD_EVENT', 
            payload: adventure
        }));
    }
}

export const deleteEvent = (eventId, adventureId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3001/adventures/${adventureId}/events/${eventId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(adventure => dispatch({type: 'DELETE_EVENT', payload: adventure}))
    }
}

export const editEvent = (eventId, adventureId, event) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/adventures/${adventureId}/events/${eventId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(event)
        })
        .then(resp => resp.json())
        .then(adventure => dispatch({
            type: 'EDIT_EVENT', 
            payload: adventure
        }));
    }
}
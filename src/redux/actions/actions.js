export const addEvent = (event) => {
    return {
        type: 'ADD_EVENT',
        payload: event
    }
}

export const deleteEvent = (event) => {
    return {
        type: 'DELETE_EVENT',
        payload: event
    }
}

export const updateEvent = (event) => {
    return {
        type: 'UPDATE_EVENT',
        payload: event
    }
} 

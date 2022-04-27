import React from 'react'

const Form = ({eventName, eventLocation, eventDescription, eventImage, dispatchEvent }) => {
  return (
    <div className="add-new-event-whole-card">

    <form className="form">

      <div className="form-field">
        <label htmlFor="name">Event Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          className="inputField"
          value={eventName}
          onChange={(e) => dispatchEvent({type: 'EVENT', payload: {key: 'eventName', value: e.target.value}})}
        />
      </div>

      <div className="form-field">
        <label htmlFor="location">Event Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          className="inputField"
          value={eventLocation}
          onChange={(e) => dispatchEvent({type: 'EVENT', payload: {key: 'eventLocation', value: e.target.value}})}
        />
      </div>

      <div className="form-field">
        <label htmlFor="description">Event Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          className="inputField"
          value={eventDescription}
          onChange={(e) => dispatchEvent({type: 'EVENT', payload: {key: 'eventDescription', value: e.target.value}})}
        />
      </div>

      <div className="form-field">
        <label htmlFor="image">Event Image Link:</label>
        <input
          type="text"
          name="image"
          id="image"
          className="inputField"
          value={eventImage}
          onChange={(e) => dispatchEvent({type: 'EVENT', payload: {key: 'eventImage', value: e.target.value}})}
        />
      </div>

    </form>
  </div>
  )
}

export default Form
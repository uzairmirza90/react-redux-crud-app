import React from 'react'

const Form = ({eventName, setEventName, eventLocation, setEventLocation, eventDescription, setEventDescription, 
              eventImage, setEventImage }) => {
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
          onChange={(e) => setEventName(e.target.value)}
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
          onChange={(e) => setEventLocation(e.target.value)}
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
          onChange={(e) => setEventDescription(e.target.value)}
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
          onChange={(e) => setEventImage(e.target.value)}
        />
      </div>

    </form>
  </div>
  )
}

export default Form
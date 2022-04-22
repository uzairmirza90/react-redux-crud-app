import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { updateEvent } from "../../redux/actions/actions";
import "../updateEvent/updateEvent.css";

const UpdateEvent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getLocation = useLocation();
    const { id, name, image, description, location } = getLocation.state || {};

    const [eventName, setEventName] = useState(name);
    const [eventLocation, setEventLocation] = useState(location);
    const [eventDescription, setEventDescription] = useState(description);
    const [eventImage, setEventImage] = useState(image);

    const [event, setEvent] = useState(getLocation.state);


    useEffect(() => {
      setEvent({
        id: id,
        name: eventName,
        location: eventLocation,
        description: eventDescription,
        image: eventImage,
      });
    }, [event]);


    const editEvent = () => {
      dispatch(updateEvent(event));
      navigate("/");
    };

    return (
    <div className="update-event-page">
      <Sidebar />

      <div className="update-event">

        <div className="update-event-header">
          <h1 className="update-event-heading"><u>Update Event</u></h1>
        </div>

        <div className="line"></div>

        <div className="update-event-whole-card">

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

            <button type="submit" className="update-event-button" onClick={() => editEvent()}>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEvent;

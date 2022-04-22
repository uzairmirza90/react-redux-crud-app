import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import "../addEvent/addEvent.css";
import { addEvent } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AddEvent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state.events)

    const [eventName, setEventName] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [eventImage, setEventImage] = useState("");

    const [event, setEvent] = useState({});


    useEffect(() => {
      setEvent({
        id: state.length > 0 ? state[state.length - 1].id + 1 : 0,
        name: eventName,
        location: eventLocation,
        description: eventDescription,
        image: eventImage,
      });
    }, [event]);


    const addNewEvent = () => {
      if (eventName === "" || eventLocation === "" || eventDescription === "" || eventImage === "") {
        alert("Please Enter All Fields !!!");
      } else {
        dispatch(addEvent(event));
        navigate("/");
      }
    };

    return (
    <div className="add-new-event-page">
      <Sidebar />

      <div className="add-new-event">

        <div className="add-new-event-header">
          <h1 className="add-new-event-heading"><u>Add New Event</u></h1>
        </div>

        <div className="line"></div>

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

            <button type="submit" className="add-event-button" onClick={() => addNewEvent()}>Add</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AddEvent;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import "../addEvent/addEvent.css";
import { addEvent } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Form from "../../components/form/Form";

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

        <Form 
          eventName={eventName}
          setEventName={setEventName}
          eventLocation={eventLocation}
          setEventLocation={setEventLocation}
          eventDescription={eventDescription}
          setEventDescription={setEventDescription}
          eventImage={eventImage}
          setEventImage={setEventImage}
          addNewEvent={addNewEvent}
        />
        
        <button type="submit" className="add-event-button" onClick={() => addNewEvent()}>Add</button>

      </div>
    </div>
  );
};

export default AddEvent;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateEvent } from "../../redux/actions/actions";
import "../updateEvent/updateEvent.css";
import Form from "../../components/form/Form";
import { useReducer } from "react";


const UpdateEvent = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getLocation = useLocation();
  const { getEvent } = getLocation.state || {};

  const initialFormState = {
    eventName: getEvent.name,
    eventLocation: getEvent.location,
    eventDescription: getEvent.description,
    eventImage: getEvent.image,
  }

  const formReducer = (state, action) => {
    switch(action.type){
      case 'EVENT':
        return { ...state, [action.payload.key]: action.payload.value}
  
      default:
        return state;
    }
  }
  
  const [formState, dispatchEvent] = useReducer(formReducer, initialFormState)
  
  const [event, setEvent] = useState(formState);


  useEffect(() => {
    setEvent({
      id: getEvent.id,
      name: formState.eventName,
      location: formState.eventLocation,
      description: formState.eventDescription,
      image: formState.eventImage,
    });
  }, [getEvent.id, formState.eventName, formState.eventDescription, formState.eventImage, formState.eventLocation]);


  const editEvent = () => {
    dispatch(updateEvent(event));
    navigate("/");
  };

  return (
    <div className="update-event-page">

      <div className="update-event">

        <div className="update-event-header">
          <h1 className="update-event-heading"><u>Update Event</u></h1>
        </div>

        <div className="line"></div>

        <Form
          eventName={formState.eventName}
          eventLocation={formState.eventLocation}
          eventDescription={formState.eventDescription}
          eventImage={formState.eventImage}
          dispatchEvent={dispatchEvent}

        />

        <button type="submit" className="update-event-button" onClick={() => editEvent()}>Update</button>
      </div>
    </div>
  );
};

export default UpdateEvent;

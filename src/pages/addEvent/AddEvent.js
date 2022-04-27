import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../addEvent/addEvent.css";
import { addEvent } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Form from "../../components/form/Form";
import { useReducer } from "react";


const initialFormState = {
  eventName: '',
  eventLocation: '',
  eventDescription: '',
  eventImage: '',
}


const formReducer = (state, action) => {
  switch(action.type){
    case 'EVENT':
      return { ...state, [action.payload.key]: action.payload.value}

    default:
      return state;
  }
}

const AddEvent = () => {

    const [formState, dispatchEvent] = useReducer(formReducer, initialFormState)
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const state = useSelector((state) => state.events)

    const [event, setEvent] = useState(formState);


    useEffect(() => {
      setEvent({
        id: state.length > 0 ? state[state.length - 1].id + 1 : 0,
        name: formState.eventName,
        location: formState.eventLocation,
        description: formState.eventDescription,
        image: formState.eventImage,
      });

    }, [formState.eventName, formState.eventImage, formState.eventDescription, formState.eventLocation, state]);


    const addNewEvent = () => {
        dispatch(addEvent(event));
        navigate("/");
    };

    return (
    <div className="add-new-event-page">

      <div className="add-new-event">

        <div className="add-new-event-header">
          <h1 className="add-new-event-heading"><u>Add New Event</u></h1>
        </div>

        <div className="line"></div>


        <Form 
          eventName={formState.eventName}
          eventLocation={formState.eventLocation}
          eventDescription={formState.eventDescription}
          eventImage={formState.eventImage}
          dispatchEvent={dispatchEvent}
        />
        
        <button type="submit" className="add-event-button" onClick={() => addNewEvent()}>Add</button>

      </div>
    </div>
  );
};

export default AddEvent;

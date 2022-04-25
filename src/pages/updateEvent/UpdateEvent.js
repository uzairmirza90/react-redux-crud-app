import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateEvent } from "../../redux/actions/actions";
import "../updateEvent/updateEvent.css";
import Form from "../../components/form/Form";

const UpdateEvent = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getLocation = useLocation();
  const { getEvent } = getLocation.state || {};

  const [eventName, setEventName] = useState(getEvent.name);
  const [eventLocation, setEventLocation] = useState(getEvent.location);
  const [eventDescription, setEventDescription] = useState(getEvent.description);
  const [eventImage, setEventImage] = useState(getEvent.image);

  const [event, setEvent] = useState(getLocation.state);


  useEffect(() => {
    setEvent({
      id: getEvent.id,
      name: eventName,
      location: eventLocation,
      description: eventDescription,
      image: eventImage,
    });
  }, [getEvent.id, eventName, eventDescription, eventImage, eventLocation]);


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
          eventName={eventName}
          setEventName={setEventName}
          eventLocation={eventLocation}
          setEventLocation={setEventLocation}
          eventDescription={eventDescription}
          setEventDescription={setEventDescription}
          eventImage={eventImage}
          setEventImage={setEventImage}
          editEvent={editEvent}
        />

        <button type="submit" className="update-event-button" onClick={() => editEvent()}>Update</button>
      </div>
    </div>
  );
};

export default UpdateEvent;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../eventDetails/eventDetails.css";

const EventDetails = () => {
  const getLocation = useLocation();
  const { getEvent } = getLocation.state;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="event-detail-page">
      <div className="event-detail">

        <div className="event-detail-header">
          <h1 className="event-detail-heading">Event Details</h1>
        </div>

        <div className="line"></div>

        <div className="event-details-whole-card">

          <div>
            <img src={getEvent.image} className="img" alt="eventimage"></img>
          </div>

          <div className="details">

            <p style={{ fontSize: "22px", fontWeight: "bolder" }}>
              Event No: {getEvent.id}
            </p>

            <p style={{ fontSize: "23px", fontWeight: "bolder" }}>
              Name: {getEvent.name}
            </p>

            <div>
              <h3 style={{ marginBottom: "5px" }}>Description: {getEvent.description}</h3>
            </div>

            <p style={{ fontSize: "22px", fontWeight: "bolder" }}>
              Location: {getEvent.location}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../eventCard/eventCard.css";
import { deleteEvent } from "../../redux/actions/actions";

const EventCard = ({getEvent}) => {
    const dispatch = useDispatch();

    const deleteEventFromState = (event) => {
        dispatch(deleteEvent(event));
    };

    return (
        <div className="event-card">

            <img src={getEvent.image} alt="event" />

            <div className="event-card-details">

                <div className="event-name">
                    <p className="name-heading">Name:</p>
                    <p className="name">{getEvent.name}</p>
                </div>

                <div className="event-location">
                    <p className="location-heading">Location:</p>
                    <p className="location">{getEvent.location}</p>
                </div>

                <div className="buttons">

                    <Link to={`/update-event/${getEvent.id}`} className='button'
                        state={{
                            getEvent
                        }}>
                        Update
                    </Link>

                    <Link to={`/event-detail/${getEvent.id}`} className='button'
                        state={{
                            getEvent
                        }}>
                        See Details
                    </Link>

                    <button onClick={() => deleteEventFromState(getEvent)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;

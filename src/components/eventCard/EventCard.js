import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../eventCard/eventCard.css";
import { deleteEvent } from "../../redux/actions/actions";

const EventCard = ({event, index, id, name, image, location, description}) => {
    const dispatch = useDispatch();

    const deleteEventFromState = (event) => {
        dispatch(deleteEvent(event));
    };

    return (
        <div key={index} className="event-card">

            <img src={image} alt="event" />

            <div className="event-card-details">

                <div className="event-name">
                    <p className="name-heading">Name:</p>
                    <p className="name">{name}</p>
                </div>

                <div className="event-location">
                    <p className="location-heading">Location:</p>
                    <p className="location">{location}</p>
                </div>

                <div className="buttons">

                    <Link to={`/update-event/${id}`} className='button'
                        state={{
                            id: id,
                            name: name,
                            image: image,
                            location: location,
                            description: description,
                        }}>
                        Update
                    </Link>

                    <Link to={`/event-detail/${id}`} className='button'
                        state={{
                            id: id,
                            name: name,
                            image: image,
                            location: location,
                            description: description,
                        }}>
                        See Details
                    </Link>

                    <button onClick={() => deleteEventFromState(event)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;

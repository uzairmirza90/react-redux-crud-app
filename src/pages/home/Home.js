import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../../components/eventCard/EventCard";
import "../home/home.css";

const Home = () => {
  const events = useSelector(state => state.events)

  return (
    <div className="home-page">
      <div className="home">

        <div className="home-header">
          <h1 className="home-heading">Events</h1>
        </div>

        <div className="line"></div>

        <div className="events">
          <div className="event-cards">
            {
              !events?.length ?
                (<h2>'There are no events yet!'</h2>) :
                (
                  events?.map((event, index) => {
                    return (

                      <EventCard
                        key={index}
                        getEvent={event}
                      />
                    )
                  })
                )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

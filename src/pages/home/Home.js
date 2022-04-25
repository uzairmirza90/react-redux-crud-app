import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../../components/eventCard/EventCard";
import Sidebar from "../../components/sidebar/Sidebar";
import "../home/home.css";

const Home = () => {
  const events = useSelector(state => state.events)

  return (
    <div className="home-page">
      <Sidebar />
      <div className="home">

        <div className="home-header">
          <h1 className="home-heading">Events</h1>
        </div>

        <div className="line"></div>

        <div className="events">
          <div className="event-cards">
            {
              events?.length === 0 ?
                (<h2>'There are no events yet!'</h2>) :
                (
                  events?.map((event, index) => {
                    const { id, name, image, location, description } = event;
                    return (

                      <EventCard
                        key={index}
                        event={event}
                        index={index}
                        id={id}
                        name={name}
                        image={image}
                        location={location}
                        description={description}
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

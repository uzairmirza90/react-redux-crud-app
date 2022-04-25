import React, { useState } from "react";
import EventCard from "../../components/eventCard/EventCard";
import Sidebar from "../../components/sidebar/Sidebar";
import "../home/home.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteEvent } from "../../redux/actions/actions";
import SearchEvent from "../../components/searchEvent/SearchEvent";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import store from "../../redux/store/store";

const Home = () => {
  const events = useSelector((state) => state.events);

  const [searchCondition, setSearchCondition] = useState(false)
  const [search, setSearch] = useState([])

  return (
    <div className="home-page">
      <Sidebar />
      <div className="home">

        <div className="home-header">
          <h1 className="home-heading">Events</h1>
        </div>

        <div className="line"></div>

        <div className="search">
          <SearchEvent
            setSearchCondition={setSearchCondition}
            setSearch={setSearch}
          />
        </div>
        <div className="events">
          <div className="event-cards">
            {!searchCondition ?
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
                        location={location}
                        image={image}
                        description={description}
                      />
                    );
                  })
                )
              :
              search?.length === 0 ? (<h2>'No Match Found!'</h2>) :
                search?.map((event, index) => {
                  const { id, name, image, location, description } = event;
                  return (
                    <EventCard
                      key={index}
                      event={event}
                      index={index}
                      id={id}
                      name={name}
                      location={location}
                      image={image}
                      description={description}
                      setSearchCondition={setSearchCondition}
                      search={search}
                      setSearch={setSearch}
                    />
                  );
                })
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;

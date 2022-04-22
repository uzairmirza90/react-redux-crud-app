import React from "react";
import EventCard from "../../components/eventCard/EventCard";
import Sidebar from "../../components/sidebar/Sidebar";
import "../home/home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <div className="home">

        <div className="home-header">
          <h1 className="home-heading">Events</h1>
        </div>
       
        <div className="line"></div>

        <div className="events">
          <EventCard />
        </div>
        
      </div>
    </div>
  );
};

export default Home;

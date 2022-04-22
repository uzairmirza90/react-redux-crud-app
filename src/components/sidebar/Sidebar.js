import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEquals, faCalendar, faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import "../sidebar/sidebar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const allEvents = useSelector((state) => state.events);
    
    return (
    <div className='sidebar'>

        <div className="sidebar-header">
            <FontAwesomeIcon icon={faEquals} color="white" size="xl"/>
            <h2 className="sidebar-heading">Event Organizer</h2>
        </div>

        <div className="divider"></div>

        <div className="pages">

            <div className="page">
                <Link to="/" style={{ display: "flex", textDecoration: "none" }}>
                    <FontAwesomeIcon icon={faCalendar} color="white" size="lg" />
                    <h4 className="page-heading">All Events{" "}<span style={{ marginLeft: "60px" }}>{allEvents.length}</span></h4>
                </Link>
            </div>
            
            <div className="page">
                <Link to="/add-new-event" style={{ display: "flex", textDecoration: "none" }}>
                    <FontAwesomeIcon icon={faCalendarPlus} color="white" size="lg" />
                    <h4 className="page-heading">Add New Event</h4>
                </Link>
            </div>
            
        </div>
    </div>
    );
};

export default Sidebar;

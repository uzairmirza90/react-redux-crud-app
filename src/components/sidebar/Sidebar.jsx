import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEquals,
  faCalendar,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import "../sidebar/sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-header">
        <FontAwesomeIcon icon={faEquals} color="white" size="xl"/>
        <h2 className="sidebar-heading">Event Organizer</h2>
      </div>

      <div className="divider"></div>

      <div className="pages">
        <div className="page">
          <FontAwesomeIcon icon={faCalendar} color="white" size="lg" />
          <h4 className="page-heading">All Events</h4>
        </div>
        <div className="page">
          <FontAwesomeIcon icon={faCalendarPlus} color="white" size="lg" />
          <h4 className="page-heading">Add New Event</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

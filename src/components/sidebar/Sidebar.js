import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEquals, faCalendar, faCalendarPlus, faUser, faSignIn } from "@fortawesome/free-solid-svg-icons";
import "../sidebar/sidebar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { useState } from "react";
import { signOut } from "firebase/auth";

const Sidebar = () => {
    const allEvents = useSelector((state) => state.events);

    const [user] = useAuthState(auth)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        if(user){
            setIsAuthenticated(true)
        }else{
            setIsAuthenticated(false)
        }
    }, [user])
    
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
                    <h4 className="page-heading">All Events{" "}<span style={{ marginLeft: "60px" }}>{isAuthenticated ? allEvents.length : ''}</span></h4>
                </Link>
            </div>
            
            <div className="page">
                <Link to="/add-new-event" style={{ display: "flex", textDecoration: "none" }}>
                    <FontAwesomeIcon icon={faCalendarPlus} color="white" size="lg" />
                    <h4 className="page-heading">Add New Event</h4>
                </Link>
            </div>

        {
            isAuthenticated ? (
                <div className="page">
                <Link to="/login" style={{ display: "flex", textDecoration: "none" }} onClick={logout}>
                    <FontAwesomeIcon icon={faSignIn} color="white" size="lg" />
                    <h4 className="page-heading">Logout</h4>
                </Link>
                </div>
            )
            : (
                <>
                  <div className="page">
                <Link to="/login" style={{ display: "flex", textDecoration: "none" }}>
                    <FontAwesomeIcon icon={faSignIn} color="white" size="lg" />
                    <h4 className="page-heading">Login</h4>
                </Link>
            </div>

            <div className="page">
                <Link to="/signup" style={{ display: "flex", textDecoration: "none" }}>
                    <FontAwesomeIcon icon={faUser} color="white" size="lg" />
                    <h4 className="page-heading">Sign Up</h4>
                </Link>
            </div>
                </>
            )
        }
            
        </div>
    </div>
    );
};

export default Sidebar;

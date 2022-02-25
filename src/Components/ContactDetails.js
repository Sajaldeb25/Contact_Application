import React from "react";
import user from "../Image/profile_contact.png"
import {Link} from "react-router-dom";

const ContactDetails = (props) =>{
    const {id, name, email} = props.location.state.contacts;  // distructure
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />

                </div>
                <div className="content">
                    <div className="header"> {name} </div>
                    <div className="description">{email}</div>
                </div>

                <div className="ui button centered">
                    <Link to={"/"}><button className="ui button blue centered" style={{align:"center"}}> Back to contact List</button> </Link>
                </div>
            
            </div>
            
        </div>
    );

};

export default ContactDetails;
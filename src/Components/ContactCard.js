import React from "react";
import user from "../Image/profile_contact.png"
import {Link} from "react-router-dom";

const ContactCard = (props) =>{
    const {id, name, email} = props.contacts;  {/* Destructure declared to access to props values */}
return(
    <div className="item">
        <img className="ui avatar image" src={user} alt="user"/>
                <div className="content">
                    <div className="header">{id} </div>
                    <Link to={{pathname:`/contact/${id}`, state:{contacts:props.contacts}}}>
                        <div className="header">{name} </div>
                        <div>{email}</div> 
                    </Link>
                </div>
                <i 
                    className="trash alternate outline icon"
                    style={{paddingLeft:"150px",color:"red",marginLeft:"10px"}}
                    onClick={() => props.clickHander({id})}
                ></i>

                <Link to="/edit">
                    <i 
                        className="edit alternate outline icon"
                        style={{paddingLeft:"150px",color:"blue"}}
                    ></i>
                    
                </Link>
            </div>
);

};

export default ContactCard;
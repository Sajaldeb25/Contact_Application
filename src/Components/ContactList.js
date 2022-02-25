import React from "react"
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    // console.log(props);

    const deleteContactHandler = (id)=>{
        props.getContactId(id);
    };
    const randerContactList = props.contacts.map((contacts) =>{
        return(
            <ContactCard contacts= {contacts} clickHander = {deleteContactHandler} key={contacts.id}/>
        );

    });


    return(
        <div>
            <h2 style={{padding:"20px"}} >List of All contact 
            <Link to="/add"> <button className="ui right floated primary button" style={{padding:"20px"}} > Add contact </button>
            </Link>
            

            </h2>

            <div className="ui called list" style={{marginTop:"60px"}}> {randerContactList} </div>
        </div>
    );
}; 

export default ContactList;
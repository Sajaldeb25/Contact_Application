import React, {useState, useEffect} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import api from "../api/contacts";
import './App.css';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import ContactDetails from "./ContactDetails"
import EditContact from "./EditContact";


function App() {
  const [contacts, setContacts] =useState([]);
  /*const contacts =[
    /*{
      id: "1",
      name: "sajal",
      email: "sajal@gmail.com"
    },
    {
      id: "2",
      name: "debnath",
      email: "debnath@gmail.com"
    }
  ];*/

  //Retrive Contacts
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }



  const addContactHandler = async (contact) =>{
    console.log(contact);
    const request ={
      id:contact.id,
      name:contact.name,
      email:contact.email
    };
    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };


  // const updateContactHandler = async (contact) =>{
  //   const response = await api.put(`/contacts/${contact.id}`, contact);
  //   //console.log(response.data);
  //   const {id, name, email} = response.data;
  //   setContacts(
  //     contacts.map((contact) => {
  //     return contact.id === id ? {...response.data } : contact;
  //   })
  //   );
  // };

  //const updateContactHandler = () =>{};


  const removeContactHandler = async(id) => {
    await api.delete(`/contacts/${id}`);
    //console.log(contacts);
    const newContactList = contacts.filter((contact)=> {
      // console.log(id);
      // console.log(contact.id);
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() =>  {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retriveContacts) 
    //   setContacts(retriveContacts);
    const getAllContacts = async () => {
      const allcontacts = await retriveContacts();
      if (allcontacts) setContacts(allcontacts);
    }

    getAllContacts();

  }, []);

  useEffect(() =>  {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        {/* <ContactList  contacts={contacts}/> */}
        <Switch>
          <Route path="/add" exact
              render={(props) => ( 
              <AddContact {...props} addContactHandler = {addContactHandler} />
              )}
          />

          <Route path="/" exact
              render={(props) => ( 
              <ContactList {...props} contacts={contacts} getContactId={removeContactHandler}/>
              )}
          />
          <Route path="/contact/:id" component={ContactDetails}/>

          <Route path="/edit" exact
              render={(props) => ( 
              <EditContact />
              )}
          />
        </Switch>
      </Router>


      {/* <AddContact addContactHandler = {addContactHandler}/>
            <ContactList  contacts={contacts}/> */}
     {/*  How to comment example <ContactList /> */}


    </div> 
    );
}

export default App;

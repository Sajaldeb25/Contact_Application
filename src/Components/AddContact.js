import React from "react"

class AddContact extends React.Component{
    state = {
        id:"",
        name: "",
        email: "",
    };

    add = (e) =>{
        e.preventDefault();
        if(this.state.id ==="" || this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory!")
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({id:"", name:"", email:""})
        console.log(this.state);
        this.props.history.push("/");
    }


    render(){
        return(
            <div className="ui main">
                <h2>Add Contacts</h2>
                <form className="ui form" onSubmit={this.add}>

                <div className="field">
                        <label>ID</label>
                        <input
                         type="text"
                         name="id" 
                         placeholder="Write Id"
                         value={this.state.id} 
                         onChange={(e) => this.setState({id: e.target.value}) }/>
                    </div>


                    <div className="field">
                        <label>Name</label>
                        <input
                         type="text"
                         name="name" 
                         placeholder="Write Name"
                         value={this.state.name} 
                         onChange={(e) => this.setState({name: e.target.value}) }/>
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input 
                         type="text" 
                         name="email" 
                         placeholder="Write Email"
                         value={this.state.email}
                         onChange={(e) => this.setState({email: e.target.value})}
                         />
                    </div>
                    <button className="ui button red"> ADD</button>
                </form>

            </div>
        );
    }
}

export default AddContact;
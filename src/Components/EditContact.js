import React from "react"

class EditContact extends React.Component{

    update = (e) => {

    };

    render(){
        return(
            <div className="ui main">
                <h2>Update Contacts</h2>
                <form className="ui form">

                <div className="field">
                        <label>ID</label>
                        <input
                         type="text"
                         name="id" 
                         placeholder="Write Id"
                         //value={this.state.id} 
                         //onChange={(e) => this.setState({id: e.target.value}) }
                         />
                    </div>


                    <div className="field">
                        <label>Name</label>
                        <input
                         type="text"
                         name="name" 
                         placeholder="Write Name"
                        //  value={this.state.name} 
                        //  onChange={(e) => this.setState({name: e.target.value}) }
                        />
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input 
                         type="text" 
                         name="email" 
                         placeholder="Write Email"
                        //  value={this.state.email}
                        //  onChange={(e) => this.setState({email: e.target.value})}
                         />
                    </div>
                    <button className="ui button red"> Update</button>
                </form>

            </div>
        );
    }
}

export default EditContact;
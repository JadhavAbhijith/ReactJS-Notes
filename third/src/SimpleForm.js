import React, { Component } from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

class SimpleForm extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            uname: "",
            email: ""
        };


        this.UpdateSubmit = this.UpdateSubmit.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
    }


    UpdateSubmit(event) 
    {
        console.log("You have entered the Username: " + this.state.uname + " & Email: " + this.state.email + " Successfully");
        event.preventDefault();
    }



    changeUser(event) 
    {
        this.setState({
            uname: event.target.value
        });
    }

    

    changeEmail(event) 
    {
        this.setState({
            email: event.target.value
        });
    }

    render() 
    {

        const { uname, email } = this.state;

        return (
            <div>
            <div className="d-flex container justify-content-center">
            
            <form onSubmit={this.UpdateSubmit}>
            <div className="mb-3">
                <label for="username" className="form-label">Username</label>
                <input name="uname" type="text" value={this.state.uname} onChange={this.changeUser} className="form-control" id="uname" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input name="email" type="email" value={this.state.email} onChange={this.changeEmail} className="form-control" id="email"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button><br></br>
            </form>
            </div>
            <div className="text-center">
            <h3>Username: {uname} & Email: {email}</h3>
            </div>
            </div>
            
        );
    }
}

export default SimpleForm;



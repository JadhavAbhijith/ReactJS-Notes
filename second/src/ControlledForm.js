import React, { Component } from "react"; 

class ControlledForm extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            uname: "",
            cname: ""
        };


        this.UpdateSubmit = this.UpdateSubmit.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.changeCompany = this.changeCompany.bind(this);
    }


    UpdateSubmit(event) 
    {
        alert("You have entered the Username: " + this.state.uname + " & Company Name: " + this.state.cname + " Successfully");
        event.preventDefault();
    }



    changeUser(event) 
    {
        this.setState({
            uname: event.target.value
        });
    }

    

    changeCompany(event) 
    {
        this.setState({
            cname: event.target.value
        });
    }

    render() 
    {
        return (
            <form onSubmit={this.UpdateSubmit}>  
                <h3>Controlled Form Demo</h3>
                
                <p>
                    <label>Username:</label>
                    <input type="text" id="uname" value={this.state.uname} onChange={this.changeUser}/>
                </p>

                <p>
                    <label>Company name:</label>
                    <input type="text" id="cname" value={this.state.cname} onChange={this.changeCompany}
                    />
                </p>

                <p><input type="submit" value="Submit" /></p>
            </form> 
        );
    }
}

export default ControlledForm;

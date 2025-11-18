import React, { Component } from "react"; 

class GreetComp extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            name: "" };


        this.changeName = this.changeName.bind(this);
        
    }



    changeName(event) 
    {
        this.setState({
            name: event.target.value
        });
    }


    render() 
    {

        const { name } = this.state;

        return (
           <div>
            <div className="d-flex container justify-content-center">
            
            <form onSubmit={this.UpdateSubmit}>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input name="name" type="text" value={this.state.name} onChange={this.changeName} className="form-control" id="name" aria-describedby="emailHelp"/>
            </div>
           
            <button type="submit" className="btn btn-outline-primary" onClick={this.UpdateSubmit}>Submit</button><br></br>
            </form>
            </div>
            <div className="text-center">
            <h3>Hello, {name}</h3>
            </div>
            </div>
        );
    }
}

export default GreetComp;



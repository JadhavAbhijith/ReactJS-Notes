import React, { Component } from "react";

class UnControlledForm extends Component
{
    constructor(props)
    {
        super(props)
        this.UpdateSubmit = this.UpdateSubmit.bind(this);
        this.input = React.createRef();
    }

    UpdateSubmit(event)    /* by defult when you submit the form the browserreloads the page or navigates away to stop that from happeneing 
                               so React can handle the form data in state we use event.preventDefault() - this makes sure the page 
                               doesn't refresh repeatedly   */
    {
        alert("You have entered the UserName and Company Name Successfully"); 
        event.preventDefault();
    }


    render()
    {
        return(
            <form onSubmit = {this.UpdateSubmit}>  {/*  When the form is submitted then the UpdateSubmit method will be executed */}
                <h3>UnControlled Form Demo</h3>
                
                <p><label>Username:</label>
                    <input type="text" ref={this.input}/>
                </p>

                 <p><label>Company name:</label>
                    <input type="text" ref={this.input}/>
                </p>

                <p><input type="submit" value="Submit"/></p>
            </form>
        )
    }

}

export default UnControlledForm;
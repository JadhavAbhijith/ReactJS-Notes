import {Component} from "react";

class EventDemo extends Component
{
    constructor(props)
    {
        super(props);
        this.state={companyName: ""};
    }

    changeText(event)
    {
        this.setState({
            companyName:event.target.value
        });
    }

    render()
  {
     return (
        <div>
            <h2>Simple Event Example</h2>
            <label htmlFor='name'>Enter Company Name</label>
            <input type='text' id="companyName" onChange={this.changeText.bind(this)}/>
            <h4>You Entered: {this.state.companyName}</h4>
        </div>
        );
  }
}



export default EventDemo;
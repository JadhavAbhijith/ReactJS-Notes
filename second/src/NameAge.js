import {Component} from "react";

class NameAge extends Component
{
    constructor(props)
    {
        super(props);
        this.state={myName: "",
                    myAge:""
        };
       
    }

    changeName(event)
    {
        this.setState({
            myName:event.target.value
        });

        
    }


    changeAge(event)
    {
        this.setState({
            myAge:event.target.value
        });

        
    }

    render()
  {


    const { myName, myAge } = this.state;
    const ageNum = parseInt(myAge);

    var message;
    if(ageNum >=18)
    {
        message="You are an Adult";
    }
    else
    {
        message = "You are a Minor";
    }
    

     return (
        <div>
            <h2>Name & Age Event Example</h2>
            <label htmlFor='name'>Enter Your Name</label>
            <input type='text' id="myName" onChange={this.changeName.bind(this)}/>
            <label htmlFor='name'>Enter Your Age</label>
            <input type='text' id="myAge" onClick={this.changeAge.bind(this)}/>
            <h4>"Hello, {myName}! You are {myAge} years old."</h4>
            <p>{message}</p>
        </div>
        );
  }
}



export default NameAge;
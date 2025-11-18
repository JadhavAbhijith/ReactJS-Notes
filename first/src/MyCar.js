import { Component } from "react";

class MyCar extends Component
{
    constructor(props)
    {
        super(props);
        //Specify the State object in the constructor method
        this.state = {brand: "BMW",
                      color: "Brown"
        };
    }


    changeColor = () => {
        this.setState({color: "Blue"});
    }


    render()
    {
        return(
            <div>
                <h2>My Car is {this.state.brand}</h2>
                <h3>It is {this.state.color}</h3>

                <button type="button" onClick={this.changeColor}>Change Color</button>
            </div>
        );
    }
}

export default MyCar;
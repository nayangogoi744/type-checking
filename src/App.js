import React, { Component } from "react"
import Pt from "prop-types";


class App extends Component{
    render(){
    return(
        <div>
    <h1>
        Hello: {this.props.name}
    </h1>
    <h2>
        Roll:  {this.props.roll}
    </h2>
    <h3>Accessing children: {this.props.children}</h3>
    </div>
    );
   };
}


App.propType={
    name : Pt.string.isRequired,
    roll : Pt.number
};

export default App;
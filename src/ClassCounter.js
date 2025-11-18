import React, { Component } from "react";

class ClassCounter extends Component{
    constructor(){
        super();
        this.state={
            count: 0,
        };
    }

    increment = () =>{
        this.setState({ count: this.state.count+1});
    };

    decrement = () =>{
        if(this.state.count > 0){
            this.setState({
                count : this.state.count -1
            });
        }
    };

    render(){
        return(
            <div className="counter-box">
                <h2>Class Component Counter</h2>
                <p className="count-value">{this.state.count}</p>

                <div className="btn-group">
                    <button onClick={this.increment} className="btn">+</button>

                    <button onClick={this.decrement} className="btn">-</button>
                </div>

            </div>
        );
    }
}

export default ClassCounter;
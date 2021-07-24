import { yellow } from '@material-ui/core/colors'
import React, { Component } from 'react'
import './App.css'

class Component1 extends Component{
    state ={
        counter1 : 10,
        counter2 : 100,
        counter3 : 1000
    }

    submit1 =() =>{
        this.setState({
            counter1: this.state.counter1+1
        })
    }
    submit2 =() =>{
        this.setState({
            counter2: this.state.counter2+1
        })
    }
    submit3 =() =>{
        this.setState({
            counter3: this.state.counter3+1
        })
    }

    render(){
        return(
            <div className='App'>
                <b>This is a Class Based Componant</b>
                <br/>
                {this.state.counter1}
                <br/>
                {this.state.counter2}
                <br/>
                {this.state.counter3}
                <br/>
                <p>This is the send Prop: {this.props.name}</p>
                <input type='button' onClick= {this.submit1} value='Click Me1'/>
                <input type='button' onClick= {this.submit2} value='Click Me2'/>
                <input type='button' onClick= {this.submit3} value='Click Me3'/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Component1;
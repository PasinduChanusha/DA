import React, { Component, useState } from 'react'
import './post.css'

const Component2=(props) => {

    const [stateCounter, setCounter] = useState({
        counter1: 10,
        counter2: 100,
        counter3: 1000
    });

    const submit1 = () => {
        setCounter({
            ...stateCounter,
            counter1 : stateCounter.counter1 + 1
        })
    }

    const submit2 = () => {
        setCounter({
            ...stateCounter,
            counter2 : stateCounter.counter2 -10
        })
    }

    const submit3 = () => {
        setCounter({
            ...stateCounter,
            counter3 : stateCounter.counter3 - 100
        })
    }

        return(
            <div className='post'>
                <b>This is a function Base Component!</b>
                <br/>
                {stateCounter.counter1}
                <br/>
                <br/>
                {stateCounter.counter2}
                <br/>
                <br/>
                {stateCounter.counter3}
                <br/>
                <input type='button' onClick= {submit1} value='Push Me1'/>
                <input type='button' onClick= {submit2} value='Push Me2'/>
                <input type='button' onClick= {submit3} value='Push Me3'/>
                <br/>
                <p>This is the send Prop: {props.name}</p>
                <br/>
            </div>
        );
}

export default Component2;
import React, { Component } from "react";
import RuneSet from '../RuneSet';
import './style.scss';

export default class RuneStage extends Component {
    constructor() {
        super();
        this.state = {

        }

    }

    render() {
        return (
            <div className='runeStage'>
                <RuneSet/>
            </div>
        )
    }
}


import React, { Component } from "react";


export default class ChampionStage extends Component {
    constructor() {
        super();
        this.state = {

        }

    }



    render() {
        return (
            <React.Fragment>
                Hello from champion stage, showing {this.props.champion.name}  
            </React.Fragment>
        )
    }
}


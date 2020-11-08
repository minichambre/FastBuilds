import React, { Component } from "react";
import SearchForm from "../SearchForm";
import ChampionStage from "../ChampionStage";
export default class SearchStage extends Component {
    constructor() {
        super();
        this.state = {
            champion: null
        }
        this.setChampion = this.setChampion.bind(this);
    }

    setChampion(champion) {
        this.setState({
            champion: champion
        })
    }

    render() {
        return (
            <React.Fragment>
                <SearchForm setSelectedChampion={this.setChampion}/>
                {this.state.champion != null && 
                <ChampionStage champion={this.state.champion}/>
                }
            </React.Fragment>
        )
    }
}


import React, { Component } from "react";
import './styles.scss';

export default class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.lookup = this.lookup.bind(this);
        this.parse = this.parse.bind(this);
    }

    handleInput(event) {
        let search = event.target.value;
        this.setState({
            value: search
        })

        this.lookup(search);
    }

    lookup(term) {
        fetch(`/builds/${term}`)
        .then(response => {
            if (response.status !== 200) {
                console.log('error');
            }
            response.json().then(asJson => this.parse(asJson));
        })
        .catch(err => {
            console.log(err);
        })
    }

    parse(championData) {
        console.log(championData)
    }

    render() {
        return (
            <input 
                className='championSearch' 
                type='text' 
                value={this.state.value} 
                placeholder='Singed Mid... Braum Jungle...' 
                onChange={this.handleInput}
            />
        )
    }
}


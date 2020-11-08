import React, { Component } from "react";
import './styles.scss';

export default class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            results: []
        }
        this.handleInput = this.handleInput.bind(this);
        this.lookup = this.lookup.bind(this);
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
            response.json().then(asJson => this.setState({results: asJson}));
        })
        .catch(err => {
            console.log(err);
        })
    }


    render() {
        return (
            <div className='searchWrap'>
                <input 
                    className='championSearch font-body' 
                    type='text' 
                    value={this.state.value} 
                    placeholder='Singed Mid... Braum Jungle...' 
                    onChange={this.handleInput}
                />
                {this.state.results.length > 0 &&
                    <div className='resultList'>
                    {this.state.results.map((champion, index) => {
                        return (
                            <div className='resultItem font-body font-bold'>
                                {champion.name}
                            </div>
                        )

                    })}
                    </div>
                }
            </div>
        )
    }
}


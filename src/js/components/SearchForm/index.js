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
        this.handleSelect = this.handleSelect.bind(this);
        this.setChampionSelect = this.setChampionSelect.bind(this);
    }

    setChampionSelect(selectedChampion) {
        this.props.setSelectedChampion(selectedChampion);
    }

    handleInput(event) {
        let search = event.target.value;
        this.setState({
            value: search
        })

        if (search == '') {
            this.setState({
                results: []
            })
        } else {
            this.lookup(search);
        }
    }

    handleSelect(event, id) {
        let champData = this.state.results[id];

        this.setChampionSelect(champData)
        this.setState({
            selected: champData,
            value: champData.name
        }, () => {
            this.setState({
                results: []
            })
        });
    }

    lookup(term) {
        fetch(`/builds/${term}`)
        .then(response => {
            if (response.status !== 200) {
                console.log('error');
            }
            response.json().then(asJson => {
                if (asJson.length === 1) {
                    this.setChampionSelect(asJson[0]);
                    this.setState({
                        selected: asJson[0]
                    })
                }
                this.setState({results: asJson})
            });
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
                            <div key={'champion-' + index} className='resultItem font-body font-bold' onClick={() => {this.handleSelect(event, index)}}>
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


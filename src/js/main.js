import React from 'react';
import ReactDOM from "react-dom";
import './main.scss';
import SearchStage from './components/SearchStage';

let reactRoot = document.getElementById('search-container');
ReactDOM.render(<SearchStage/>, reactRoot);
require('file-loader?name=[name].[ext]!./index.html');
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';
import './App.scss';

const appElement = document.getElementById('app');

ReactDOM.render(<App />, appElement);
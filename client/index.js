import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {Router,browserHistory,hashHistory} from  'react-router';
import routes from './routes';

render(<Router history={hashHistory} routes={routes}/>,document.getElementById('app'));
// render(<App />,document.getElementById('app'));
// render(<App />,document.getElementById('app'));

import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import Firstpage from './components/Firstpage';
import Registerpage from './components/Registerpage';
export default(
    <Route path='/' component={App}  >
    <IndexRoute component={Firstpage}/>
    <Route path='/register' component={Registerpage} />
    </Route>
)
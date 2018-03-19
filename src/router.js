import React from 'react';
import {Route, Switch} from 'react-router-dom';


import Home from './components/Home';
import Contact from './components/Contact/Contact'

export default(

<Switch>
<Route exact path="/" component={Home}/>
<Route path="/contact" component={Contact}/>

    </Switch>

)
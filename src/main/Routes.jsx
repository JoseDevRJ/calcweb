import React from 'react'
import {Switch,Route,Redirect} from 'react-router'

import Home from '../components/templates/Home'
import Add from '../components/templates/Add'
import Sub from '../components/templates/Sub'
import Multi from '../components/templates/Multi'
import Div from '../components/templates/Div'

export default props =>
    <Switch>
        <Route exact path ='/' component={Home} />
        <Route path ='/add' component={Add} />
        <Route path ='/sub' component={Sub} />
        <Route path ='/multi' component={Multi} />
        <Route path ='/div' component={Div} />
        <Redirect from='*' to ='/' />
    </Switch>
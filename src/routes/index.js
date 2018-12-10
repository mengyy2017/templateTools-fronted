import React from 'react';
import {Route} from 'react-router-dom';
import App from 'components/home/App';
import Tables from 'components/Tables'

export default (
    <Route path="/" exact component={App}>
        <Route path="/tables" component={Tables}/>
    </Route>
);
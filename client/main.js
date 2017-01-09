import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from '../imports/ui/App';
import HomePage from '../imports/ui/containers/HomePage';
import AboutPage from '../imports/ui/containers/AboutPage';
import AdminPage from '../imports/ui/containers/AdminPage';
import AwardPage from '../imports/ui/containers/AwardPage';
import NewsPage from '../imports/ui/containers/NewsPage';

Meteor.startup(() => {
    render((
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/award" component={AwardPage}/>
                <Route path="/news" component={NewsPage}/>
            </Route>
            <Route path="/admin" component={AdminPage}/>
        </Router>
    ), document.getElementById('root'));
});
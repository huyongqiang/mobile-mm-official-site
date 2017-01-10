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

import AdminHomeTab from '../imports/ui/containers/AdminPage/HomeTab';
import AdminSettingsTab from '../imports/ui/containers/AdminPage/SettingsTab';
import AdminContentsManageTab from '../imports/ui/containers/AdminPage/ContentsManageTab';

Meteor.startup(() => {
    render((
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/award" component={AwardPage}/>
                <Route path="/news" component={NewsPage}/>
            </Route>
            <Route path="/admin" component={AdminPage}>
                <Route path="home" component={AdminHomeTab}/>
                <Route path="settings" component={AdminSettingsTab}/>
                <Route path="contents" component={AdminContentsManageTab}/>
            </Route>
        </Router>
    ), document.getElementById('root'));
});
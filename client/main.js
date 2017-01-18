import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from '../imports/ui/App';
import HomePage from '../imports/ui/containers/HomePage';
import AboutPage from '../imports/ui/containers/AboutPage';
import AdminPage from '../imports/ui/containers/AdminPage';
import JoinPage from '../imports/ui/containers/JoinPage';
import NewsPage from '../imports/ui/containers/NewsPage';

import AdminHomeTab from '../imports/ui/containers/AdminPage/HomeTab';
import AdminSettingsTab from '../imports/ui/containers/AdminPage/SettingsTab';
import AdminMAboutPageTab from '../imports/ui/containers/AdminPage/MAboutPageTab';
import AdminMNewsPageTab from '../imports/ui/containers/AdminPage/MNewsPageTab';
import AdminMHomePageTab from '../imports/ui/containers/AdminPage/MHomePageTab';
import AdminJoinTab from '../imports/ui/containers/AdminPage/JoinTab';

Meteor.startup(() => {
    render((
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/join" component={JoinPage}/>
                <Route path="/news" component={NewsPage}/>
            </Route>
            <Route path="/admin" component={AdminPage}>
                <Route path="home" component={AdminHomeTab}/>
                <Route path="settings" component={AdminSettingsTab}/>
                <Route path="manage_about" component={AdminMAboutPageTab}/>
                <Route path="manage_home" component={AdminMHomePageTab}/>
                <Route path="manage_news" component={AdminMNewsPageTab}/>
                <Route path="manage_join" component={AdminJoinTab}/>
            </Route>
        </Router>
    ), document.getElementById('root'));
});
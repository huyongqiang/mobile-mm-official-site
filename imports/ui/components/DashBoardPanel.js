/**
 * Created by wangdi on 10/1/17.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import '../styles/dashboard.css';

export default class DashBoardPanel extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <div className="avatar">
                    <img src="/img/avatar.jpg"/>
                    <label>Admin</label>
                </div>
                <div className="nav-link">
                    <Link to="/admin/home" activeClassName="active-link"><i className="material-icons">home</i>Home</Link>
                    <Link to="/admin/contents" activeClassName="active-link"><i className="material-icons">archive</i>Contents</Link>
                    <Link to="/admin/settings" activeClassName="active-link"><i className="material-icons">settings</i>Settings</Link>
                </div>
            </div>
        );
    }
}

DashBoardPanel.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string
};
/**
 * Created by wangdi on 10/1/17.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import '../styles/dashboard.css';

export default class DashBoardPanel extends Component{
    render(){
        return (
            <div className="container">
                <div className="avatar">
                    <img src="/img/avatar.png"/>
                    <label>Admin</label>
                </div>
                <div className="nav-link">
                    <ul>
                        <li><Link to="/admin/home" activeClassName="active-link"><i className="material-icons">cloud</i>Home</Link></li>
                        <li><Link to="/admin/contents" activeClassName="active-link"><i className="material-icons">cloud</i>Contents</Link></li>
                        <li><Link to="/admin/settings" activeClassName="active-link"><i className="material-icons">cloud</i>Settings</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

DashBoardPanel.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string
};
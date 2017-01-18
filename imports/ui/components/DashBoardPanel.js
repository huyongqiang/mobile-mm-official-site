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
                    <Link to="/admin/home" activeClassName="active-link"><i className="material-icons">home</i>主页</Link>
                    <Link to="/admin/manage_join" activeClassName="active-link"><i className="material-icons">person_add</i>加入申请管理</Link>
                    <Link to="/admin/manage_home" activeClassName="active-link"><i className="material-icons">archive</i>管理首页页面</Link>
                    <Link to="/admin/manage_news" activeClassName="active-link"><i className="material-icons">archive</i>管理新闻页面</Link>
                    <Link to="/admin/manage_about" activeClassName="active-link"><i className="material-icons">archive</i>管理关于页面</Link>
                    <Link to="/admin/settings" activeClassName="active-link"><i className="material-icons">settings</i>设置</Link>
                    <Link to="/" activeClassName="active-link"><i className="material-icons">arrow_back</i>返回网站首页</Link>
                </div>
            </div>
        );
    }
}

DashBoardPanel.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string
};
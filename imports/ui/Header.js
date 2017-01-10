/**
 * Created by wangdi on 9/1/17.
 */
'use strict';

import React from 'react';
import {Link} from 'react-router';
import './styles/header.css';

export default class Header extends React.Component{
    render(){
        return (
            <header>
                <div className="logo">
                    <Link to="/"><img src="/img/logo.png" height={70}/></Link>
                </div>
                <div className="navigation">
                    <ul role="nav">
                        <li><Link to="/news" activeClassName="active-link">俱乐部新闻</Link></li>
                        <li><Link to="/award" activeClassName="active-link">大赛获奖</Link></li>
                        <li><Link to="/about" activeClassName="active-link">关于MM</Link></li>
                        <li><Link to="/admin" activeClassName="active-link">Admin</Link></li>
                    </ul>
                </div>
            </header>
        );
    }
}
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
                    <h1>Mobile MM Club</h1>
                </div>
                <div className="navigation">
                    <ul role="nav">
                        <li><Link to="/news">俱乐部新闻</Link></li>
                        <li><Link to="/award">获奖信息</Link></li>
                        <li><Link to="/about">关于MM</Link></li>
                    </ul>
                </div>
            </header>
        );
    }
}
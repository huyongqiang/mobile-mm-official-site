/**
 * Created by wangdi on 8/1/17.
 */
'use strict';

import React, {Component} from 'react';
import '../styles/aboutpage.css';

export default class AboutPage extends Component{
    render(){
        return (
            <div className="App-container about-page">
                <div className="row">
                    <h1>关于移动MM俱乐部</h1>
                </div>
                <div className="row">
                    <label>成都东软学院移动Mobile Market创新俱乐部创立于2011年3月7日。
                        俱乐部的宗旨在提高俱乐部成员移动应用程序开发的综合能力，
                        为对移动应用程序开发感兴趣的同学搭建一个服务，实践学习的交流平台。</label>
                </div>
            </div>
        );
    }
}
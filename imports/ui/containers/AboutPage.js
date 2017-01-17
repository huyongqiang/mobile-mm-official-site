/**
 * Created by wangdi on 8/1/17.
 */
'use strict';

import React, {Component} from 'react';
import '../styles/aboutpage.css';
import TimeLine from '../components/TimeLine';

export default class AboutPage extends Component {
    render() {
        const contents = [
            '2011年10月 俱乐部学生参加“第五届成都国际软件设计与应用大赛”，获得优胜奖。',
            '2011年12月 俱乐部学生叶飞、杨皓棱、赵龙和吕杨参加四川移动公司主办的 “2011年MM百万青年创业计划校园手机应用PK赛”并获奖。'
        ];
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
                {contents.map((item, i) => {
                    return (
                        <div key={i} className="row align-left">
                            <TimeLine contents={item}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}
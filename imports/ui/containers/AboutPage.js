/**
 * Created by wangdi on 8/1/17.
 */
'use strict';

import React, {Component} from 'react';
import '../styles/about_page.css';
import TimeLine from '../components/TimeLine';
import Footer from '../Footer';
import {Meteor} from 'meteor/meteor';
import {AwardHistory, BasicInfo} from '../../collections';

export default class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            awardList: [],
            clubIntro: ''
        };
    }


    componentDidMount() {
        Meteor.subscribe('award_history', {
            onReady: () => {
                const list = AwardHistory.find({}, {sort: {time: -1}}).fetch();
                this.setState({awardList: list});
            }
        });
        Meteor.subscribe('club.introduction', {
            onReady: () => {
                const data = BasicInfo.find().fetch()[0];
                this.setState({clubIntro: data.clubIntro});
            }
        });
    }

    render() {
        return (
            <div className="App-container">
                <div className="about-page">
                    <div className="row">
                        <h1>关于移动MM俱乐部</h1>
                    </div>
                    <div className="row" style={{marginBottom: '25px'}}>
                        <label>{this.state.clubIntro}</label>
                    </div>
                    {this.state.awardList.map((item, i) => {
                        return (
                            <div key={i} className="row align-left">
                                <TimeLine time={item.time} contents={item.event}/>
                            </div>
                        );
                    })}
                </div>
                <Footer/>
            </div>
        );
    }
}
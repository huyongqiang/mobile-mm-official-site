/**
 * Created by wangdi on 10/1/17.
 */
'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AdminHeader from '../../components/AdminHeader';
import {Meteor} from 'meteor/meteor';
import MessageBox from '../../components/MessageBox';
import '../../styles/admin_about_tab.css';
import Button from '../../components/Button';
import {BasicInfo} from '../../../collections';

export default class MAboutPageTab extends Component{
    render(){
        return (
            <div className="MAbout-container">
                <AdminHeader title="关于页面管理"/>
                <div className="club-intro margin-left-right">
                    <h2>俱乐部介绍</h2>
                    <Button title="保存" onPress={this._updateIntroOnPress.bind(this)}/>
                </div>
                <textarea ref="introduction" className="margin-left-right"/>

            </div>
        );
    }

    componentDidMount(){
        Meteor.subscribe('club.introduction', {
            onReady: ()=>{
                const data = BasicInfo.find().fetch()[0];
                ReactDOM.findDOMNode(this.refs.introduction).value = data.clubIntro;
            }
        });
    }

    _updateIntroOnPress(){
        const contents = ReactDOM.findDOMNode(this.refs.introduction).value.trim();
        Meteor.call('club.introduction.update', contents, (err, result)=>{
            if(result['status'] === 200)
                MessageBox.show(result['msg']);
            else
                MessageBox.show(result['msg'], 'danger');
        });
    }

    _submitOnPress(){
        const time = ReactDOM.findDOMNode(this.refs.time).value.trim();
        const contents = ReactDOM.findDOMNode(this.refs.contents).value.trim();
        Meteor.call('awards.insert', time, contents, (err, result)=>{
            if(result['status'] === 200){
                MessageBox.show(result['msg']);
            }else{
                MessageBox.show(result['msg'], 'danger');
            }
        });
    }
}
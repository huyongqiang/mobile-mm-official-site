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
import {BasicInfo, AwardHistory} from '../../../collections';
import AdminTable from '../../components/AdminTable';
import Modal from '../../components/Modal';

export default class MAboutPageTab extends Component{
    constructor(props){
        super(props);
        this.state = {
            rowData: [],
            modalVisible: false
        };
    }

    render(){

        return (
            <div className="MAbout-container">
                <AdminHeader title="关于页面管理"/>
                <div className="row-title margin-left-right margin-top-bottom">
                    <h2>俱乐部介绍</h2>
                    <Button title="更新" onPress={this._updateIntroOnPress.bind(this)}/>
                </div>
                <textarea ref="introduction" className="margin-left-right input-textarea"/>
                <div className="row-title margin-left-right margin-top-bottom">
                    <h2>获奖列表</h2>
                    <Button title="添加记录" onPress={this._addAwardEventOnPress.bind(this)}/>
                </div>
                <div className="margin-left-right">
                    <AdminTable
                        rowData={this.state.rowData}
                        operationCallbacks={[this._updateAwardEventCallback.bind(this), this._deleteAwardEventCallback.bind(this)]}
                    />
                </div>
                <Modal
                    visible={this.state.modalVisible}
                    title="添加事件"
                    closeCallback={()=>{this.setState({modalVisible: false})}}>
                    <AddEventContents />
                </Modal>
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
        Meteor.subscribe('award_history', {
            onReady: ()=>{
                const data = AwardHistory.find().fetch();
                this.setState({rowData: data});
            }
        });
    }

    _updateIntroOnPress(){
        const contents = ReactDOM.findDOMNode(this.refs.introduction).value.trim();
        Meteor.call('club.introduction.update', contents, (err, result)=>{
            this._messageShow(result);
        });
    }

    _addAwardEventOnPress(){
        this.setState({modalVisible: true});
    }

    _updateAwardEventCallback(index){
        console.log(index);
    }

    _deleteAwardEventCallback(index){
        console.log(index);
        Meteor.call('awards.delete', this.state.rowData[index]._id, (err, result)=>{
            if(result['status'] === 200){
                let rowData = this.state.rowData;
                rowData.splice(index, 1);
                this.setState({rowData: rowData});
                MessageBox.show(result['msg']);
            }else{
                MessageBox.show(result['msg'], 'danger');
            }
        });
    }

    _submitOnPress(){
        const time = ReactDOM.findDOMNode(this.refs.time).value.trim();
        const event = ReactDOM.findDOMNode(this.refs.contents).value.trim();
        Meteor.call('awards.insert', time, event, (err, result)=>{
            this._messageShow(result);
        });
    }

    _messageShow(result){
        if(result['status'] === 200){
            MessageBox.show(result['msg']);
        }else{
            MessageBox.show(result['msg'], 'danger');
        }
    }
}

class AddEventContents extends Component{
    render(){
        return (
            <div className="admin-about-model-contents">
                <div className="contents">
                    <input type="text" ref="time" className="input-text" placeholder="时间"/>
                    <textarea ref="event" className="input-textarea" style={{marginTop: '10px'}} placeholder="获奖内容..."/>
                </div>
                <div className="btn-group">
                    <button className="input-button btn-success">Add</button>
                </div>
            </div>
        );
    }
}
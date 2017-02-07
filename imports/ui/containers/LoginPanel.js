/**
 * Created by wangdi on 1/2/17.
 */
'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from '../components/Modal';
import {Meteor} from 'meteor/meteor';
import {browserHistory} from 'react-router';

export default class LoginPanel extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Modal visible={true} closeCallback={()=>{ReactDOM.unmountComponentAtNode(document.getElementById('login'))}} title="登录">
                <form style={style} onSubmit={this._loginOnPress.bind(this)}>
                    <input className="input-text" type="text" ref="account" placeholder="账号" required="required"/>
                    <input className="input-text" type="password" ref="password" placeholder="密码" style={{margin: '20px 0'}} required="required"/>
                    <input type="submit" className="input-button btn-primary" value="登录"/>
                </form>
            </Modal>
        );
    }

    _loginOnPress(e){
        e.preventDefault();
        const account = ReactDOM.findDOMNode(this.refs.account).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim();

        Meteor.call('login', account, password, (err, result)=>{
            if(result['status'] === 200){
                ReactDOM.unmountComponentAtNode(document.getElementById('login'));
                sessionStorage.userId = result['userId'];
                browserHistory.push('/admin/home');
                console.log(sessionStorage.userId);
            }
        });
    }
}

const style = {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 50px',
    width: '300px'
};
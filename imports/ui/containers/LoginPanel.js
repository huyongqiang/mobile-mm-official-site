/**
 * Created by wangdi on 1/2/17.
 */
'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from '../components/Modal';

export default class LoginPanel extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Modal visible={true} closeCallback={()=>{ReactDOM.unmountComponentAtNode(document.getElementById('login'))}} title="登录">
                <div style={style}>
                    <input className="input-text" type="text" ref="account" placeholder="账号"/>
                    <input className="input-text" type="password" ref="password" placeholder="密码" style={{margin: '20px 0'}}/>
                    <button className="input-button btn-primary" onClick={this._loginOnPress.bind(this)}>登录</button>
                </div>
            </Modal>
        );
    }

    _loginOnPress(){
        const account = ReactDOM.findDOMNode(this.refs.account).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim();


    }
}

const style = {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 50px',
    width: '300px'
};
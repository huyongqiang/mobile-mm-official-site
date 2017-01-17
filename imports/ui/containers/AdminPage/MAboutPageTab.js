/**
 * Created by wangdi on 10/1/17.
 */
'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AdminHeader from '../../components/AdminHeader';
import {Meteor} from 'meteor/meteor';
import MessageBox from '../../components/MessageBox';

export default class MAboutPageTab extends Component{
    render(){
        return (
            <div>
                <AdminHeader title="Content Management"/>
                <input ref="time" type="text" placeholder="Time"/>
                <textarea ref="contents"/>
                <button onClick={this._submitOnPress.bind(this)}>Yes</button>
            </div>
        );
    }

    _submitOnPress(){
        const time = ReactDOM.findDOMNode(this.refs.time).value.trim();
        const contents = ReactDOM.findDOMNode(this.refs.contents).value.trim();
        Meteor.call('awards.insert', time, contents, (err, result)=>{
            if(result['status'] === 200){
                MessageBox.show(result['msg']);
            }
        });
    }
}
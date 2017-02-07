/**
 * Created by wangdi on 15/1/17.
 */
'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AdminHeader from '../../components/AdminHeader';
import {Meteor} from 'meteor/meteor';
import MessageBox from '../../components/MessageBox';
import {uploadFile} from '../../../utils/upload_file';

export default class MHomePageTab extends Component{
    render(){
        return (
            <div>
                <AdminHeader title="网站首页管理"/>
                <input type="file" ref="file"/>
                <button onClick={this._uploadOnPress.bind(this)}>Upload</button>
            </div>
        );
    }

    _uploadOnPress(){
        uploadFile('1', ReactDOM.findDOMNode(this.refs.file).files[0]);
    }
}
/**
 * Created by wangdi on 15/1/17.
 */
'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AdminHeader from '../../components/AdminHeader';
import {Meteor} from 'meteor/meteor';
import MessageBox from '../../components/MessageBox';

export default class MNewsPageTab extends Component{
    render(){
        return (
            <div>
                <AdminHeader title="新闻页面管理"/>

            </div>
        );
    }


}
/**
 * Created by wangdi on 22/1/17.
 */
'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AdminHeader from '../../components/AdminHeader';
import {Meteor} from 'meteor/meteor';
import MessageBox from '../../components/MessageBox';

export default class MHomePageTab extends Component{
    render(){
        return (
            <div>
                <AdminHeader title="新闻列表管理"/>

            </div>
        );
    }


}

/**
 * Created by wangdi on 15/1/17.
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
                <AdminHeader title="Home Management"/>

            </div>
        );
    }


}
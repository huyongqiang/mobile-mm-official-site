/**
 * Created by wangdi on 15/1/17.
 */
'use strict';

import React, {Component} from 'react';
import AdminHeader from '../../components/AdminHeader';

export default class MHomePageTab extends Component{
    render(){
        return (
            <div>
                <AdminHeader title="Home Management"/>
                Home
            </div>
        );
    }
}
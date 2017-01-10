/**
 * Created by wangdi on 10/1/17.
 */
'use strict';

import React, {Component} from 'react';
import AdminHeader from '../../../components/AdminHeader';

export default class ContentsManageTab extends Component{
    render(){
        return (
            <div>
                <AdminHeader title="Content Management"/>
                Contents
            </div>
        );
    }
}
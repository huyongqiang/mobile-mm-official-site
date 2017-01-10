/**
 * Created by wangdi on 8/1/17.
 */
'use strict';

import React, {Component} from 'react';
import '../../styles/adminpage.css';
import DashBoardPanel from '../../components/DashBoardPanel';

export default class AdminPage extends Component{
    render(){
        return (
            <div className="admin-container">
                <div className="left-nav">
                    <DashBoardPanel />
                </div>
                <div className="right-contents">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
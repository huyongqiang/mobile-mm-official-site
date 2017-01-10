/**
 * Created by wangdi on 10/1/17.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import '../styles/adminheader.css';

export default class AdminHeader extends Component{
    render(){
        return (
            <div className="admin-header-container">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

AdminHeader.propTypes = {
    title: PropTypes.string.isRequired
};
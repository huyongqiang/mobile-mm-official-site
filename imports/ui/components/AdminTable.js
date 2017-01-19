/**
 * Created by wangdi on 18/1/17.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import '../styles/admin_table.css';

export default class AdminTable extends Component{

    render(){
        return (
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>时间</th>
                        <th>事件</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.rowData.map((row, i)=>{
                        return (
                            <tr key={i}>
                                <td>{row.time}</td>
                                <td>{row.event}</td>
                                <th>
                                    <button onClick={this._updateOnPress.bind(this, i)} className="input-button btn-warning">修改</button>
                                    <button onClick={this._deleteOnPress.bind(this, i)} className="input-button btn-danger">删除</button>
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

    _updateOnPress(index){
        this.props.operationCallbacks[0](index);
    }

    _deleteOnPress(index){
        this.props.operationCallbacks[1](index);
    }
}

AdminTable.propTypes = {
    rowData: PropTypes.array,
    operationCallbacks: PropTypes.array
};
/**
 * Created by wangdi on 18/1/17.
 */
'use strict';

import React, {Component} from 'react';
import AdminHeader from '../../components/AdminHeader';
import {Candidates} from '../../../collections';
import {Meteor} from 'meteor/meteor';

export default class JoinTab extends Component{
    constructor(props){
        super(props);
        this.state = {
            candidates: []
        };
    }

    render(){
        return (
            <div>
                <AdminHeader title="加入申请管理"/>
                <table>
                    <tr>
                        <th>#</th>
                        <th>姓名</th>
                        <th>联系方式</th>
                        <th>专业</th>
                        <th>兴趣方向</th>
                        <th>加入原因</th>
                    </tr>
                    {this.state.candidates.map((candidate, index)=>{
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{candidate.name}</td>
                                <td>{candidate.contact}</td>
                                <td>{candidate.major}</td>
                                <td>{candidate.direction}</td>
                                <td>{candidate.reason}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        );
    }

    componentDidMount(){
        Meteor.subscribe('candidates.info', {
            onReady: ()=>{
                const candidates = Candidates.find().fetch();
                this.setState({candidates});
            }
        });
    }
}
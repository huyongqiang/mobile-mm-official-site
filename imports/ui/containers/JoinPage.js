/**
 * Created by wangdi on 10/1/17.
 */
'use strict';

import '../styles/join_page.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer';
import MessageBox from '../components/MessageBox';

export default class AwardPage extends Component{
    constructor(props){
        super(props);
        this.year = new Date().getFullYear();
    }

    render(){
        return (
            <div className="App-container">
                <div className="join-page">
                    <h1>加入我们</h1>
                    <label>想学到更多的知识吗？想获得免费的旅游机会吗？想获得额外的零花钱吗？想获得其他同学羡慕的眼光吗？赶紧来加入我们吧，这里每年有多样的竞赛，让你去其他城市与其他高校同学一较高下，开阔视野，更有机会获得丰富的奖金！</label>
                    <form onSubmit={this._submitOnPress.bind(this)}>
                        <div className="row">
                            <div className="left-part">
                                <label>姓名 <span>*</span></label>
                            </div>
                            <div className="right-part">
                                <input type="text" ref="name" placeholder="姓名" className="input-text join-text" required="required"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left-part">
                                <label>联系方式 <span>*</span></label>
                            </div>
                            <div className="right-part">
                                <input type="text" ref="contact" placeholder="邮箱／手机号码" className="input-text join-text" required="required"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left-part">
                                <label>专业 <span>*</span></label>
                            </div>
                            <div className="right-part">
                                <div className="class-details">
                                    <select ref="grade" className="option-select" style={{marginRight: '15px'}}>
                                        <option value={this.year-3}>{this.year-3}级</option>
                                        <option value={this.year-2}>{this.year-2}级</option>
                                        <option value={this.year-1}>{this.year-1}级</option>
                                        <option value={this.year}>{this.year}级</option>
                                    </select>
                                    <input type="text" ref="major" placeholder="专业" className="input-text join-text" required="required"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left-part">
                                <label>兴趣方向 <span>*</span></label>
                            </div>
                            <div className="right-part">
                                <select ref="direction" className="option-select join-option">
                                    <option value="手机App">手机App</option>
                                    <option value="手机游戏">手机游戏</option>
                                    <option value="设计">设计</option>
                                    <option value="其他">其他</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left-part">
                                <label>加入原因 <span>*</span></label>
                            </div>
                            <div className="right-part">
                                <textarea ref="reason" className="input-textarea join-textarea" required="required"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left-part"/>
                            <div className="right-part">
                                <input type="submit" className="input-button btn-primary join-btn" value="提交"/>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        );
    }

    _submitOnPress(event){
        event.preventDefault();
        const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
        const contact = ReactDOM.findDOMNode(this.refs.contact).value.trim();
        const major = ReactDOM.findDOMNode(this.refs.grade).value + '级' + ReactDOM.findDOMNode(this.refs.major).value.trim();
        const direction = ReactDOM.findDOMNode(this.refs.direction).value;
        const reason = ReactDOM.findDOMNode(this.refs.reason).value.trim();

        Meteor.call('candidate.add', name, contact, major, direction, reason, (err, result)=>{
            if(result['status'] === 200)
                MessageBox.show(result['msg']);
            else
                MessageBox.show(result['msg']);
        });
    }

    _cleanAll(){
        ReactDOM.findDOMNode(this.refs.name).value = '';
        ReactDOM.findDOMNode(this.refs.contact).value = '';
        ReactDOM.findDOMNode(this.refs.major).value = '';
        ReactDOM.findDOMNode(this.refs.reason).value = '';
    }
}
/**
 * Created by wangdi on 10/1/17.
 */
'use strict';

import '../styles/join_page.css';
import React, {Component} from 'react';
import Footer from '../Footer';

export default class AwardPage extends Component{
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
                                <input type="text" ref="major" placeholder="专业" className="input-text join-text" required="required"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left-part">
                                <label>兴趣方向 <span>*</span></label>
                            </div>
                            <div className="right-part">
                                <select className="option-select join-option">
                                    <option>手机App</option>
                                    <option>手机游戏</option>
                                    <option>设计</option>
                                    <option>其他</option>
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
        console.log('dasdasda');
    }
}
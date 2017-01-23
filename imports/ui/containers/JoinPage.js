/**
 * Created by wangdi on 10/1/17.
 */
'use strict';

import '../styles/join_page.css';
import React, {Component} from 'react';

export default class AwardPage extends Component{
    render(){
        return (
            <div className="App-container">
                <div className="join-page">
                    <h1>加入我们</h1>
                    <form>
                        <div className="row">
                            <div className="left-part">
                                <label>姓名 <span>*</span></label>
                            </div>
                            <div className="right-part">
                                <input type="text" ref="name" placeholder="姓名" className="input-text join-text"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left-part">
                                <label>专业 <span>*</span></label>
                            </div>
                            <div className="right-part">
                                <input type="text" ref="major" placeholder="专业" className="input-text join-text"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left-part">
                                <label>兴趣方向 <span>*</span></label>
                            </div>
                            <div className="right-part">
                                <select>
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
                                <textarea ref="mark" className="input-textarea join-textarea"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
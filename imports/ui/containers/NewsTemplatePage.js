/**
 * Created by wangdi on 21/1/17.
 */
'use strict';

import '../styles/news_template_page.css';
import React, {Component, PropTypes} from 'react';
import {Meteor} from 'meteor/meteor';
import {Articles} from '../../collections';
import {EditorState, convertFromRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';

export default class NewsTemplatePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            articleInfo: {},
            contents: ''
        };
    }

    _createMarkup(){
        return {__html: this.state.contents}
    }

    render(){
        return (
            <div className="App-container">
                <div className="news-template-page">
                    <h1>{this.state.articleInfo.title}</h1>
                    <label>时间： {this.state.articleInfo.createTime}</label>
                    <div className="contents" dangerouslySetInnerHTML={this._createMarkup()}/>
                </div>
            </div>
        );
    }

    componentDidMount(){
        Meteor.subscribe('article.contents', 'kbvJBS2uTM4Ssdfoo', {
            onReady: ()=>{
                const article = Articles.find().fetch()[0];
                const makeup = draftToHtml(article.contents);
                this.setState({
                    articleInfo: {title: article.title, createTime: new Date(article.createTime).toLocaleDateString()},
                    contents: makeup
                });
            }
        });
    }
}


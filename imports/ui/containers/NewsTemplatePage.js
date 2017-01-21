/**
 * Created by wangdi on 21/1/17.
 */
'use strict';

import React, {Component, PropTypes} from 'react';

export default class NewsTemplatePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: ''
        };
    }


    render(){
        return (
            <div className="App-container">
                <div className="news-template-page">
                    <h1>{this.state.title}</h1>
                </div>
            </div>
        );
    }
}


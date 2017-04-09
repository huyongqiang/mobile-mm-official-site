/**
 * Created by wangdi on 8/1/17.
 */
'use strict';

import '../styles/home_page.css';
import React, {Component} from 'react';
import Footer from '../Footer';

export default class HomePage extends Component {
    render() {
        return (
            <div className="App-container">
                <div className="home-container">
                    <div className="gallery">
                        <img src="/img/gallery3.jpg" width="100%"/>
                    </div>
                    <div className="latest-news">
                        <h1>最新状态</h1>
                        <div className="row">
                            <Thumbnail />
                            <Thumbnail />
                            <Thumbnail />
                            <Thumbnail />
                            <Thumbnail />
                            <Thumbnail />
                        </div>
                        {/*<div className="row">*/}
                            {/**/}
                        {/*</div>*/}
                    </div>
                    <div className="info-1">
                        <h1>快点加入我们</h1>

                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

class Thumbnail extends Component{
    render(){
        return (
            <button className="thumbnail">
                <div className="container">
                    <img src="/pic/IMG_0056.JPG" alt="img"/>
                    <label>获奖啦获奖啦获奖啦获奖啦获奖啦获奖啦获奖啦获奖啦获奖啦</label>
                </div>
            </button>
        );
    }
}
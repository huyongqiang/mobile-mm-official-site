/**
 * Created by wangdi on 9/1/17.
 */
'use strict';

import React, {Component} from 'react';
import './styles/footer.css';
import {Link} from 'react-router';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="list">
                    <div className="col">
                        <Link to="/about">关于我们</Link>
                        <a>About Us</a>
                        <a>About Us</a>
                        <a>About Us</a>
                    </div>
                    <div className="col">
                        <Link to="/join">加入我们</Link>
                        <a>About Us</a>
                        <a>About Us</a>
                    </div>
                    <div className="col">
                        <a>About Us</a>
                        <a>About Us</a>
                        <a>About Us</a>
                    </div>
                </div>
                <label>Copyright &copy; 2017 Mobile MM Club. All rights reserved.</label>
            </footer>
        );
    }
}
/**
 * Created by wangdi on 9/1/17.
 */
'use strict';

import React, {Component} from 'react';
import './styles/footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="list">
                    <div className="col">
                        <a>About Us</a>
                        <a>About Us</a>
                        <a>About Us</a>
                        <a>About Us</a>
                    </div>
                    <div className="col">
                        <a>About Us</a>
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
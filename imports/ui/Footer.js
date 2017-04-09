/**
 * Created by wangdi on 9/1/17.
 */
'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/footer.css';
import {Link} from 'react-router';
import LoginPanel from './containers/LoginPanel';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <label>Copyright &copy; 2017 Mobile MM Club. All rights reserved.</label>
                <button className="foot-btn" onClick={()=>{ReactDOM.render(<LoginPanel />, document.getElementById('login'));}}>Admin入口</button>
            </footer>
        );
    }
}
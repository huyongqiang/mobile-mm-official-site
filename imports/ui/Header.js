/**
 * Created by wangdi on 9/1/17.
 */
'use strict';

import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component{
    render(){
        return (
            <header>
                <div>
                    <h1>Mobile MM Club</h1>
                </div>
                <div>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </header>
        );
    }
}
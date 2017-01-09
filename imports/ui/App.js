/**
 * Created by wangdi on 1/1/17.
 */
'use strict';

import React, {Component} from 'react';
import Header from './Header';

export default class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                {this.props.children}
            </div>
        );
    }
}
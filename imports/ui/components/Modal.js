/**
 * Created by wangdi on 19/1/17.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import '../styles/modal.css';

export default class Modal extends Component {
    render() {
        if (this.props.visible)
            return (
                <div className="modal">
                    <div className="container">
                        <div className="title">
                            <h2>{this.props.title}</h2>
                            <button onClick={()=>{this.props.closeCallback()}}>×</button>
                        </div>
                        {this.props.children}
                    </div>
                </div>
            );

        return null;
    }
}

Modal.propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.string,
    closeCallback: PropTypes.func
};
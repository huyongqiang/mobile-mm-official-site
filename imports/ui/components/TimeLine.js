/**
 * Created by wangdi on 16/1/17.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import '../styles/timeline.css';

export default class TimeLine extends Component{
    render(){
        return (
            <div className="timeline-container">
                <div className="timeline-icon">
                    <i className="material-icons">event</i>
                </div>
                <div className="timeline-contents">
                    <div className="time">
                        {this.props.time}
                    </div>
                    <div className="contents">
                        {this.props.contents}
                    </div>
                </div>
            </div>
        );
    }
}

TimeLine.propTypes = {
    time: PropTypes.string,
    contents: PropTypes.string
};


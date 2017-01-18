/**
 * Created by wangdi on 18/1/17.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import '../styles/button.css';

export default class Button extends Component{

    render(){
        const {icon, title, onPress}  = this.props;
        return (
            <button onClick={onPress} className="normal-button">
                {icon ? <i className="material-icons">{icon}</i> : null}
                {title}
            </button>
        );
    }
}

Button.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    colorType: PropTypes.string
};
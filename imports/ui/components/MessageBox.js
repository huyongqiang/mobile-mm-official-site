/**
 * Created by wangdi on 11/1/17.
 */
'use strict';

export default class MessageBox {

}

/**
 * @param msg: display contents
 * @param type: 'success'(默认，绿)，'danger'(红)
 * @param pos: 距离最上方的高度，默认 100px
 * @param time: 显示时间，默认 2s
 */
MessageBox.show = function (msg, type = 'success', time = 2000, pos = '50px') {
    document.querySelector('.msg-box-default').innerText = msg;
    document.querySelector('.msg-box-default').className = `msg-box-default ${type}`;
    document.querySelector('.msg-box-default').style.visibility = 'visible';
    document.querySelector('.msg-box-default').style.top = pos;
    setTimeout(() => {
        document.querySelector('.msg-box-default').style.visibility = 'hidden';
    }, time);
};
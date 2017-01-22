/**
 * Created by wangdi on 15/1/17.
 */
'use strict';

import '../../styles/admin_add_news.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AdminHeader from '../../components/AdminHeader';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import {Meteor} from 'meteor/meteor';
import MessageBox from '../../components/MessageBox';
import Button from '../../components/Button';
import {Articles} from '../../../collections';

export default class AddNewsTab extends Component{
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }

    componentDidMount(){
        // Meteor.subscribe('article_contents', 'PvKqmYaeo2bgcto7L', {
        //     onReady: ()=>{
        //         const article = Articles.find().fetch()[0];
        //         ReactDOM.findDOMNode(this.refs.title).value = article.title;
        //         this.setState({editorState: EditorState.createWithContent(convertFromRaw(article.contents))});
        //     }
        // })
    }

    render(){
        return (
            <div className="add-news-container">
                <AdminHeader title="添加新闻"/>
                <input ref="title" type="text" placeholder="输入标题"/>
                <Editor
                    wrapperStyle={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 10px'}}
                    editorStyle={{backgroundColor: '#fff', height: '350px', border: '1px solid #aaa'}}
                    toolbarStyle={{border: '1px solid #aaa', padding: '6px 0'}}
                    editorState={this.state.editorState}
                    onEditorStateChange={this._onEditorStateChange.bind(this)}
                />
                <div className="row">
                    <Button title="保存" onPress={this._saveBtnOnPress.bind(this)}/>
                </div>

            </div>
        );
    }

    _onEditorStateChange(editorState){
        this.setState({editorState});
    }

    _saveBtnOnPress(){
        const title = ReactDOM.findDOMNode(this.refs.title).value.trim();

        Meteor.call('articles.add', title, convertToRaw(this.state.editorState.getCurrentContent()), (err, result)=>{
            if(result['status'] === 200){
                MessageBox.show(result['msg']);
            }else{
                MessageBox.show(result['msg'], 'danger');
            }
        });
    }
}
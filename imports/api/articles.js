/**
 * Created by wangdi on 22/1/17.
 */
'use strict';

import {Articles} from '../collections';
import {Meteor} from 'meteor/meteor';

if(Meteor.isServer){
    Meteor.publish('article.contents', function (_id) {
        return Articles.find({_id: _id});
    });

    Meteor.publish('article.list', function () {
        return Articles.find({}, {title: 1, createTime: 1});
    });

    Meteor.methods({
       'articles.add'(title, contents){
           try{
               Articles.insert({title, contents, createTime: new Date()});
               return {'status': 200, 'msg': 'Add Data Successfully'};
           } catch (e) {
               return {'status': 400, 'msg': 'Add Data Failed'};
           }
       }
    });
}
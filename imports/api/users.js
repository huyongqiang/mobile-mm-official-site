/**
 * Created by wangdi on 7/2/17.
 */
'use strict';

import {Users} from '../collections';
import {Meteor} from 'meteor/meteor';

if(Meteor.isServer){

    Meteor.methods({
        'add.user'(name, password){
            try {
                Users.insert({name, password});
                return {'status': 200, 'msg': 'Add Data Successfully'};
            }catch (e){
                return {'status': 400, 'msg': 'Add Data Failed'};
            }
        },
        'login'(name, password){
            const users = Users.find({name, password});
            if(users.count() > 0){
                return {'status': 200, 'msg': 'Login Successfully', 'userId': users.fetch()[0]._id};
            }else {
                return {'status': 400, 'msg': 'Login Failed'};
            }
        }
    });
}
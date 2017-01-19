/**
 * Created by wangdi on 17/1/17.
 */
'use strict';

import {AwardHistory} from '../collections';
import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';

if(Meteor.isServer) {
    Meteor.publish('award_history', function () {
        return AwardHistory.find();
    });


    Meteor.methods({
        'awards.insert'(time, event){
            if(Match.test({time, event}, {time: String, event: String})) {
                try {
                    AwardHistory.insert({time, event});
                    return {'status': 200, 'msg': 'Add Data Successfully'};
                } catch (e) {
                    return {'status': 400, 'msg': 'Add Data Failed'};
                }
            }else{
                return {'status': 401, 'msg': 'Check your Format'};
            }
        },
        'awards.delete'(_id){
            const count = AwardHistory.find({_id: _id}).count();
            if(count) {
                try {
                    AwardHistory.remove({_id: _id});
                    return {'status': 200, 'msg': 'Delete Data Successfully'};
                } catch (e) {
                    return {'status': 400, 'msg': 'Delete Data Failed'};
                }
            }else{
                return {'status': 401, 'msg': 'Data Do Not Exist'};
            }
        }
    });
}
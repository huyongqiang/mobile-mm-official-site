/**
 * Created by wangdi on 17/1/17.
 */
'use strict';

import {AwardHistory} from '../collections/award_history';
import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';

if(Meteor.isServer) {
    Meteor.publish('award_history', function () {
        return AwardHistory.find();
    });


    Meteor.methods({
        'awards.insert'(time, contents){
            if(Match.test({time, contents}, {time: String, contents: String})) {
                try {
                    AwardHistory.insert({time, contents});
                    return {'status': 200, 'msg': 'Add Data Successfully'};
                } catch (e) {
                    return {'status': 400, 'msg': 'Add Data Failed'};
                }
            }else{
                return {'status': 401, 'msg': 'Check your Format'};
            }
        }
    });
}
/**
 * Created by wangdi on 17/1/17.
 */
'use strict';

import {AwardHistory} from '../collections/award_history';
import {Meteor} from 'meteor/meteor';

if(Meteor.isServer){
    Meteor.publish('award_history', function () {
        return AwardHistory.find().fetch();
    });
}

Meteor.methods({
    'awards.insert'(time, contents){
        AwardHistory.insert({
            time, contents
        });
    }
});
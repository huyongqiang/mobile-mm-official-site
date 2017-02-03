/**
 * Created by wangdi on 24/1/17.
 */
'use strict';

import {Candidates} from '../collections';
import {Meteor} from 'meteor/meteor';

if(Meteor.isServer){
    Meteor.publish('candidates.info', function () {
        return Candidates.find();
    });

    Meteor.methods({
        'candidate.add'(name, contact, major, direction, reason){
            try {
                Candidates.insert({name, contact, major, direction, reason});
                return {'status': 200, 'msg': 'Add Data Successfully'};
            }catch (e){
                return {'status': 400, 'msg': 'Add Data Failed'};
            }
        }
    });
}
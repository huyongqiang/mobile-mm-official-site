/**
 * Created by wangdi on 18/1/17.
 */
'use strict';

import {BasicInfo} from '../collections/index';
import {Meteor} from 'meteor/meteor';

if(Meteor.isServer){
    Meteor.publish('club.introduction', function () {
       return BasicInfo.find({name: 'MM'});
    });

    Meteor.methods({
        'club.introduction.update'(contents){
            try {
                BasicInfo.update({name: 'MM'}, {$set: {'clubIntro': contents}});
                return {'status': 200, 'msg': 'Update Successfully'};
            }catch (e){
                return {'status': 400, 'msg': 'Update Failed'};
            }
        },
    });
}
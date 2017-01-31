import { Meteor } from 'meteor/meteor';
import '../imports/collections';
import '../imports/startup/server';

import {BasicInfo} from '../imports/collections';

Meteor.startup(() => {
  // code to run on server at startup
    if(BasicInfo.find({name: 'MM'}).count() <=0 ){
        BasicInfo.insert({name: 'MM'});
    }
});

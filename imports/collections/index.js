/**
 * Created by wangdi on 18/1/17.
 */
'use strict';

import {Mongo} from 'meteor/mongo';

export const AwardHistory = new Mongo.Collection('awards');
export const BasicInfo = new Mongo.Collection('info');
export const Articles = new Mongo.Collection('articles');
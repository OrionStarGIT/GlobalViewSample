/*
 *  Copyright (C) 2017 OrionStar Technology Project
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import AppDebug from './app/AppDebug';
import App from './app/App';
import { appid } from './package.json';

//关闭其中某些yellow警告
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.', 'source.uri should not be an empty string', 'Invalid props.style key'];
//关闭全部yellow警告
console.disableYellowBox = true;


//上线使用
AppRegistry.registerConfig([{
    //是否为此opk的默认场景
    default: true,
    //场景名称
    appKey: 'global_view_sample',
    //场景入口
    component: () => App,
    //优先级
    priority: 1,
    //应用id
    appId: appid
}]);

//Debug调试使用
AppRegistry.registerComponent(appName, () => AppDebug);

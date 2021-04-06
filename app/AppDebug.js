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

import {
    BaseComponent,
    listenersManager,
    GlobalEmojiPlayerView,
    GlobalFaceParticleView
} from 'orionos-eve-core';
import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import { MainView } from './MainView';

/**
 * Debug调试入口
 */
export default class AppDebug extends BaseComponent {

    constructor(props) {
        super(props);

        //在单独调试的时候需要添加，否则无法接收指令回调
        listenersManager.listen(DeviceEventEmitter);
    }

    componentDidMount() {
        super.componentDidMount();
    }

    componentWillMount() {
    }

    componentWillUnmount() {
        super.componentWillUnmount();
    }

    render() {
        return (
            <>
                {/*小眼睛控件*/}
                <GlobalFaceParticleView/>
                {/*大眼睛控件*/}
                <GlobalEmojiPlayerView/>
                {/*主界面*/}
                <MainView/>
            </>
        );
    }
}

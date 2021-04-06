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

import { BaseViewModel } from 'orionos-eve-core';

export class RecognitionViewModel extends BaseViewModel {

    /**
     * 构造函数
     */
    public constructor() {
        super('RecognitionViewModel');
    }

    /**
     * 开始
     */
    public onStart(): void {

    }

    /**
     * 结束
     */
    public onStop(): void {
        // @ts-ignore
        global.recognition && global.recognition.setShow(false);
    }

    /**
     * 显示引导框
     */
    public onClickShow = (): void => {
        // @ts-ignore
        global.recognition && global.recognition.setShow(true);
    };

    /**
     * 隐藏引导框
     */
    public onClickHide = (): void => {
        // @ts-ignore
        global.recognition && global.recognition.setShow(false);
    };

    /**
     * 查询引导框是否显示
     */
    public isShow = (): boolean => {
        // @ts-ignore
        return global.recognition && global.recognition.isShow();
    };

    /**
     * 显示小机器人
     */
    public onClickShowRobot = (): void => {
        // @ts-ignore
        global.recognition && global.recognition.setGlobalRobotViewShow(true);
    };

    /**
     * 隐藏机器人
     */
    public onClickHideRobot = (): void => {
        // @ts-ignore
        global.recognition && global.recognition.setGlobalRobotViewShow(false);
    };

    /**
     * 查询小机器人是否显示
     */
    public isShowGlobalRobotView = (): boolean => {
        // @ts-ignore
        return global.recognition && global.recognition.isShowGlobalRobotView();
    };

    /**
     * 显示推荐文本(仅在显示小机器人状态下生效)
     */
    public onClickShowGuide = (): void => {
        // @ts-ignore
        global.recognition && global.recognition.setGuideArray(
            ['推荐文本1', '推荐文本2', '推荐文本3']
        );
        // @ts-ignore
        global.recognition && global.recognition.setGuideShow(true);
    };

    /**
     * 隐藏推荐文本
     */
    public onClickHideGuide = (): void => {
        // @ts-ignore
        global.recognition && global.recognition.setGuideShow(false);
    };

    /**
     * 查询推荐文本是否显示
     */
    public isGuideShow = (): boolean => {
        // @ts-ignore
        return global.recognition && global.recognition.isGuideShow();
    };


}
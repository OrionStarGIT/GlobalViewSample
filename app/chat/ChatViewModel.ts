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
    BaseViewModel,
    speechApi
} from 'orionos-eve-core';
import { DeviceEventEmitter, EmitterSubscription } from 'react-native';
import { ChatModel } from './ChatModel';

export class ChatViewModel extends BaseViewModel {

    //数据模块
    private mModel: ChatModel;

    //聊天框打开关闭监听
    private mChatWindowListener?: EmitterSubscription;

    //语音播报完成监听
    private mChatCompleteWindowListener?: EmitterSubscription;

    //语音播报被打断监听
    private mChatStopWindowListener?: EmitterSubscription;

    /**
     * 构造函数
     */
    public constructor() {
        super('ChatViewModel');
        this.mModel = new ChatModel();
    }

    /**
     * 开始
     */
    public onStart(): void {
        this.addChatListener();
    }

    /**
     * 结束
     */
    public onStop(): void {
        this.removeChatListener();
    }

    /**
     * 显示聊天框
     */
    public onClickShow = (): void => {
        //将text替换为已经配置好的闲聊提问
        speechApi.queryByText('你多大');
    };

    /**
     * 隐藏聊天框
     */
    public onClickHide = (): void => {
        // @ts-ignore
        global.globalChat && global.globalChat.setCloseFloatChatView(false);
    };

    /**
     * 查询聊天框是否显示
     */
    public isFloatChatViewClosed = (): boolean => {
        // @ts-ignore
        return global.globalChat && global.globalChat.isFloatChatViewClosed();
    };

    /**
     * 允许显示聊天框
     */
    public setShow = (): void => {
        this.mModel.setShow();
        // @ts-ignore
        global.globalChat && global.globalChat.setShow(true);
    };

    /**
     * 不允许显示聊天框
     */
    public setNotShow = (): void => {
        this.mModel.setHide();
        // @ts-ignore
        global.globalChat && global.globalChat.setShow(false);
    };

    /**
     * 查询是否允许显示聊天框
     */
    public isShow(): boolean {
        this.mModel.isShow();
        // @ts-ignore
        return global.globalChat && global.globalChat.isShow();
    }

    /**
     * 监听聊天框状态
     */
    public addChatListener = (): void => {
        this.mChatWindowListener = DeviceEventEmitter.addListener(
            'global_chat_open_state', (e): void => {
                if (e) {
                    this.mModel.appendResultText('聊天框打开');
                } else {
                    this.mModel.appendResultText('聊天框关闭');
                }
            });

        this.mChatCompleteWindowListener = DeviceEventEmitter.addListener(
            'global_chat_complete', (): void => {
                this.mModel.appendResultText('聊天播报完成');
            });
        this.mChatStopWindowListener = DeviceEventEmitter.addListener(
            'global_chat_stop', (): void => {
                this.mModel.appendResultText('聊天播报被打断');
            });
    };

    /**
     * 移除聊天框监听
     */
    public removeChatListener = (): void => {
        this.mChatWindowListener?.remove();
        this.mChatCompleteWindowListener?.remove();
        this.mChatStopWindowListener?.remove();
    };

    /**
     * 获取监听结果
     */
    public getResultText(): string {
        return this.mModel.getResultText();
    }
}
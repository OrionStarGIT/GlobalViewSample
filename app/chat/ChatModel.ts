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

import { action, observable } from 'mobx';

export class ChatModel {
    //是否允许显示聊天框
    @observable private mIsShow: boolean = false;

    //聊天框监听结果
    @observable private mResultText: string = '';

    public constructor() {
        // @ts-ignore
        this.mIsShow = global.globalChat && global.globalChat.isFloatChatViewClosed();
    }

    /**
     * 允许显示聊天框
     */
    @action public setShow(): void {
        this.mIsShow = true;
    }

    /**
     * 不允许显示聊天框
     */
    @action public setHide(): void {
        this.mIsShow = false;
    }

    public isShow(): boolean {
        return this.mIsShow;
    }

    /**
     * 设置监听结果
     * @param text-运动结果
     */
    @action
    public appendResultText(text: string): void {
        this.mResultText += '\n' + text;
    }

    /**
     * 获取监听结果
     */
    public getResultText(): string {
        return this.mResultText;
    }
}
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

import * as React from 'react';
import {
    BaseComponent,
    BaseComponentProps,
    BaseVoice
} from 'orionos-eve-core';
import { observer } from 'mobx-react';
import { Button, StyleSheet, View } from 'react-native';
import { RecognitionViewModel } from './RecognitionViewModel';

/**
 * 界面样式
 */
const styles = StyleSheet.create({
    rootView: {
        width: '100%',
        height: '100%'
    },
    buttonView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginBottom: 10
    }
});

@observer
export class RecognitionScreen
    extends BaseComponent<BaseComponentProps, RecognitionViewModel, BaseVoice> {

    /**
     * 构造函数
     * @param props-输入参数
     */
    public constructor(props: BaseComponentProps) {
        super(props);

        this.setViewModel(new RecognitionViewModel());
    }

    /**
     * 界面绘制
     */
    public render(): React.ReactNode {
        if (!this.viewModel) {
            return null;
        }
        return (
            <View style={styles.rootView}>
                <View style={styles.buttonView}>
                    {this.viewModel.isShow() ? (
                        <Button
                            color={'dodgerblue'}
                            title={'隐藏'}
                            onPress={this.viewModel.onClickHide}/>
                    ) : (
                        <Button
                            color={'dodgerblue'}
                            title={'显示'}
                            onPress={this.viewModel.onClickShow}/>
                    )}
                    {this.viewModel.isShowGlobalRobotView() ? (
                        <Button
                            color={'dodgerblue'}
                            title={'隐藏小机器人'}
                            onPress={this.viewModel.onClickHideRobot}/>
                    ) : (
                        <Button
                            color={'dodgerblue'}
                            title={'显示小机器人'}
                            onPress={this.viewModel.onClickShowRobot}/>
                    )}
                    {this.viewModel.isGuideShow() ? (
                        <Button
                            color={'dodgerblue'}
                            title={'隐藏推荐文本'}
                            onPress={this.viewModel.onClickHideGuide}/>
                    ) : (
                        <Button
                            color={'dodgerblue'}
                            title={'显示推荐文本'}
                            onPress={this.viewModel.onClickShowGuide}/>
                    )}
                </View>
            </View>
        );
    }
}
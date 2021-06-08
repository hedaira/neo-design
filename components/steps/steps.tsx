import * as React from 'react';
import classNames from 'classnames';
import {Steps} from 'antd';
import {Component} from "react";


export interface StepsProps {
    className?: string;
    current?: number;
    initial?: number;
    onChange?: (current: number) => void;
    onClick?: React.MouseEventHandler<HTMLElement>;
    description?: React.ReactNode;
    status?: 'wait' | 'process' | 'finish' | 'error';
    title?: React.ReactNode;
    subTitle?: React.ReactNode;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const prefix = 'Neostep';

    export default class NeoSteps extends Component<StepsProps, any> {
        static Steps = Steps.Step;

        classes = classNames(
            prefix,
            this.props.className,
            {
                [`${prefix}-${this.props.status}-'vertical'`]: this.props.status,
            }
        );
        render() {
            return <Steps
                progressDot
                current={this.props.current}
                initial={this.props.initial}
                style={this.props.style}
                className={this.classes}
                onChange={this.props.onChange}
                onClick={this.props.onClick}
                description={this.props.description}
                title={this.props.title}
                subTitle={this.props.subTitle}
                direction="vertical"
                {...this.props}>
                {this.props.children}
            </Steps>
        }
};



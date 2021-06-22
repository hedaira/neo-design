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
    description?: any;
    status?: 'wait' | 'process' | 'finish' | 'error';
    title?: React.ReactNode;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const prefix = 'Neostep';

    export default class NeoSteps extends Component<StepsProps, any> {
        constructor(props) {
            super(props);
        }


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
                direction="vertical"
                children={this.props.children}
                {...this.props}
            />
        }
};



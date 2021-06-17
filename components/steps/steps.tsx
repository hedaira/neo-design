import * as React from 'react';
import classNames from 'classnames';
import {Steps} from 'antd';
import {Component} from "react";
import {NeoTypography} from "../../lib";


export interface StepsProps {
    className?: string;
    current?: number;
    initial?: number;
    onChange?: (current: number) => void;
    onClick?: React.MouseEventHandler<HTMLElement>;
    description?: any;
    status?: 'wait' | 'process' | 'finish' | 'error';
    title?: React.ReactNode;
    // subTitle?: React.ReactNode;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const prefix = 'Neostep';

    export default class NeoSteps extends Component<StepsProps, any> {
        constructor(props) {
            super(props);
        }

        static Step = (props) => {
            let title
            if(props.status === 'finish') {
                title = <div className={'step-status'}><NeoTypography type={"capture_regular"} style={{color:'inherit'}}>Загружено</NeoTypography></div>
            }
            if(props.status === 'process') {
                title = <div className={'step-status'}><NeoTypography type={"capture_regular"} style={{color:'inherit'}}>Идет загрузка...</NeoTypography></div>
            }
            if(props.status === 'error') {
                title = <div className={'step-status'}><NeoTypography type={"capture_regular"} style={{color:'inherit'}}>Остановлено</NeoTypography></div>
            }
                            console.log(props, 'PROPS')
                return <Steps.Step
                    {...props}
                    // title={() => {
                    //     if(props.status === 'finish') {
                    //         return <div className={'step-status'}><NeoTypography type={"capture_regular"} style={{color:'inherit'}}>Загружено</NeoTypography></div>
                    //     }
                    //     if(props.status === 'process') {
                    //         return <div className={'step-status'}><NeoTypography type={"capture_regular"} style={{color:'inherit'}}>Идет загрузка...</NeoTypography></div>
                    //     }
                    // }}
                    // title={<div className={'step-status'}><NeoTypography type={"capture_regular"} style={{color:'inherit'}}>Идет загрузка...</NeoTypography></div>}
                    title={title}
                    subTitle={`Шаг ${props.stepNumber}`}
                />
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
                // onClick={this.props.onClick}
                // description={this.props.description}
                // title={<div className={'aaaa'}>{this.props.title}</div>}
                // subTitle={this.props.subTitle}
                direction="vertical"
                children={this.props.children}
            />
        }
};



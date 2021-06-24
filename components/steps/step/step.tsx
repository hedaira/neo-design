import * as React from 'react';
import classNames from 'classnames';
import {Steps} from 'antd';
import {Component} from "react";
import {NeoButton, NeoTypography} from "../../index";


export interface StepProps {
    className?: string;
    current?: number;
    initial?: number;
    onChange?: (current: number) => void;
    onClick?: React.MouseEventHandler<HTMLElement>;
    description?: any;
    status?: 'wait' | 'process' | 'finish' | 'error';
    title?: React.ReactNode;
    subTitle?: React.ReactNode;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    stepNumber?: any;
    active?: boolean;
    onCancelLoading?: any;
    onContinueLoading?: any;
    loading?: boolean;
}

const prefix = 'Neostep';

export default class NeoStep extends Component<StepProps, any> {
    constructor(props) {
        super(props);
    }

    state = {
        loading: false
    }

    classes = classNames(
        prefix,
        this.props.className,
        {
            [`${prefix}-${this.props.status}-'vertical'`]: this.props.status,
        }
    );

    render() {
        return <Steps.Step
            title={this.props.status === 'finish'?
                <div className={'step-status'}><NeoTypography type={"capture_regular"} style={{color:'inherit'}}>Загружено</NeoTypography></div>
                :this.props.status === 'error'?
                    <div className={'step-status'}><NeoTypography type={"capture_regular"} style={{color:'inherit'}}>Остановлено</NeoTypography></div>
                    :
                this.props.loading ?
                <div className={'step-status'}>
                    <NeoTypography type={"capture_regular"} style={{color:'inherit'}}>Идет загрузка...</NeoTypography>
                </div>
                :
                null
            }
            subTitle={<NeoTypography type={'capture_regular'} style={{margin: '16px 0 8px'}}>Шаг {this.props.stepNumber}</NeoTypography>}
            status={'wait'}
            {...this.props}
            description={
                <>
                    <NeoTypography type={"body_medium"}>{this.props.description}</NeoTypography>
                    {this.props.status === 'finish'?
                        null
                        :
                        this.props.loading ?
                        <NeoButton type={'link'}
                        style={{height: 'auto', margin: '24px 0 8px'}}
                        onClick={this.props.onCancelLoading}>Остановить процесс</NeoButton>
                        :
                        this.props.status === 'error' ?
                        <NeoButton type={'link'}
                        style={{height: 'auto', margin: '24px 0 8px'}}
                        onClick={this.props.onContinueLoading}>Возобновить процесс</NeoButton>
                        :
                        null
                    }
                </>
            }
        />
    }
};



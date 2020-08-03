import * as React from 'react';
import classNames from 'classnames';
import {Col} from 'antd';
import { ConfigConsumerProps } from '../config-provider';
declare type ColSpanType = number | string;
declare type FlexType = number | 'none' | 'auto' | string;

export interface ColSize {
    span?: ColSpanType;
    order?: ColSpanType;
    offset?: ColSpanType;
    push?: ColSpanType;
    pull?: ColSpanType;
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    span?: ColSpanType;
    order?: ColSpanType;
    offset?: ColSpanType;
    push?: ColSpanType;
    pull?: ColSpanType;
    xs?: ColSpanType | ColSize;
    sm?: ColSpanType | ColSize;
    md?: ColSpanType | ColSize;
    lg?: ColSpanType | ColSize;
    xl?: ColSpanType | ColSize;
    xxl?: ColSpanType | ColSize;
    prefixCls?: string;
    flex?: FlexType;
    style?;
    className?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const prefix = 'col';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<ColProps & React.RefAttributes<HTMLElement>> {}

const InternalCol: React.ForwardRefRenderFunction<unknown, ColProps> = (props) => {
    const {
        className,
        children
    } = props;

    const classes = classNames(
        prefix,
        className
    );

    return (
        <Col
            className={classes}
            {...props}
            // style={{maxWidth: '100%'}}
        >
            {children}
        </Col>
    )
};

const NeoCol = React.forwardRef<unknown, ColProps>(InternalCol) as CompoundedComponent;

NeoCol.displayName = 'NeoCol';

NeoCol.defaultProps = {
};

export default NeoCol


// import React, {Component} from 'react';
// import {Col} from 'antd';
// import styled from 'styled-components'
//
// export default class NXCol extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const StyledCol = styled(Col)`
//         display: flex;
//         width: 96px;
//         height: 100%;
//         text-align: ${(props) => (props.align ? `${props.align}` : "")};
//         flex-direction: ${(props) => (props.direction ? `${props.direction}` : "")};
//         justify-content: ${(props) => (props.content==='center' ? 'center'
//             : props.content==='flex-start' ? 'flex-start'
//                 : props.content==='flex-end' ? 'flex-end'
//                     : props.content==='space-around' ? 'space-around'
//                         : props.content==='space-between' ? 'space-between'
//                             : 'center')};
//         margin: ${(props) => (props.margin ? `${props.margin}` : "")};
//         `
//         return (
//             <StyledCol {...this.props} />
//         );
//     }
// }

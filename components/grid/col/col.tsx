import * as React from 'react';
import classNames from 'classnames';
import {Col} from 'antd';

declare type ColSpanType = number | string;
declare type FlexType = number | 'none' | 'auto' | string;
declare const ColAlign: ["flex-start", "flex-end", "center", "space-around", "space-between", "unset"];

export interface ColSize {
    span?: ColSpanType;
    order?: ColSpanType;
    offset?: ColSpanType;
    push?: ColSpanType;
    pull?: ColSpanType;
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    span?: ColSpanType;
    align?: typeof ColAlign[number];
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

const InternalCol: React.ForwardRefRenderFunction<ColSize, ColProps> = (props) => {
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
            {...props}
            className={classes}
            style={{...props.style, alignItems:props.align}}
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
import * as React from 'react';
import classNames from 'classnames';
import {Row} from 'antd';
import { Breakpoint, ScreenMap } from './responsiveObserve';

declare const RowAligns: ["top", "middle", "bottom", "stretch"];
declare const RowJustify: ["start", "end", "center", "space-around", "space-between"];
export declare type Gutter = number | Partial<Record<Breakpoint, number>>;
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    gutter?: Gutter | [Gutter, Gutter];
    align?: typeof RowAligns[number];
    justify?: typeof RowJustify[number];
    prefixCls?: string;
}
export interface RowState {
    screens: ScreenMap;
}

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<RowProps & React.RefAttributes<HTMLElement>> {}

const InternalRow: React.ForwardRefRenderFunction<RowState, RowProps> = (props) => {
    const {
        className,
        children
    } = props;

    const prefix = 'row';

    const classes = classNames(
        prefix,
        className
    );

    return (
        <Row
            {...props}
            className={classes}
        >
            {children}
        </Row>
    )
};

const NeoRow = React.forwardRef<unknown, RowProps>(InternalRow) as CompoundedComponent;

NeoRow.displayName = 'NeoRow';

NeoRow.defaultProps = {
};

export default NeoRow
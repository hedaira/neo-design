import * as React from 'react';
import classNames from 'classnames';
import { ConfigConsumerProps } from '../config-provider';
import { Breakpoint, ScreenMap } from './responsiveObserve';
import {Row} from 'antd';

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
            className={classes}
            {...props}
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



// import * as React from 'react';
// import classNames from 'classnames';
// import {tuple} from '../../_utils/tools'
//
// const RowTypes = tuple('disabled', 'secondary');
// export type ColType = typeof RowTypes[number];
//
// const SizeTypes = tuple('medium', 'large');
// export type SizeType = typeof SizeTypes[number];
//
// export interface RowProps {
//     style?;
//     type?: ColType;
//     size?: SizeType;
//     className?: string;
//     children?: React.ReactNode;
//     onClick?: React.MouseEventHandler<HTMLElement>;
// }
//
// const prefix = 'row';
//
// interface CompoundedComponent
//     extends React.ForwardRefExoticComponent<RowProps & React.RefAttributes<HTMLElement>> {}
//
// const InternalRow: React.ForwardRefRenderFunction<unknown, RowProps> = (props) => {
//     const {
//         type,
//         size,
//         className,
//         children
//     } = props;
//
//     const classes = classNames(
//         prefix,
//         {
//             [`${prefix}-${type}`]: type,
//             [`${prefix}-${size}`]: size
//         },
//         className
//     );
//
//     return (
//         <div
//             className={classes}
//             {...props}
//         >
//             {children}
//         </div>
//     )
// };
//
// const NeoRow = React.forwardRef<unknown, RowProps>(InternalRow) as CompoundedComponent;
//
// NeoRow.displayName = 'NeoRow';
//
// NeoRow.defaultProps = {
// };
//
// export default NeoRow


// import React, {Component} from 'react';
// import {Row} from 'antd';
// import styled from 'styled-components'
//
// export default class NXRow extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const StyledRow = styled(Row)`
//         display: flex;
//         align-items: center;
//         justify-content: ${(props) => (props.content==='center' ? 'center'
//                 : props.content==='flex-start' ? 'flex-start'
//                     : props.content==='flex-end' ? 'flex-end'
//                         : props.content==='space-around' ? 'space-around'
//                             : props.content==='space-between' ? 'space-between'
//                                 : 'flex-start')};
//         margin: ${(props) => (props.margin ? `${props.margin}` : "")};
//         padding: ${(props) => (props.padding ? `${props.padding}` : "")};
//         height: ${(props) => (props.height ? `${props.height}` : "auto")};
//         width: ${(props) => (props.width ? `${props.width}` : "auto")};
//         background-color: ${(props) => (props.color ? `${props.color}` : "")}
//         `
//         return (
//             <StyledRow {...this.props} />
//         );
//     }
// }
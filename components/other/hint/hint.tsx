import * as React from 'react';
import classNames from 'classnames';
import {Tooltip} from 'antd';


export interface HintProps {
    className?: string;
    onClick?: any;
    onChange?;
    getPopupContainer?;
    style?;
    title?;
    children?;

}

const prefix = 'hint';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<HintProps & React.RefAttributes<HTMLElement>> {}

const InternalSelect: React.ForwardRefRenderFunction<unknown, HintProps> = (props) => {
    const {
        className,
        children,
    } = props;


    const classes = classNames(
        className,
        prefix
    );

    return <div className={classes}
    ><Tooltip
        title={props.title}
        placement="bottomLeft"
        {...props}
    >{children}</Tooltip></div>
}

const NeoHint = React.forwardRef<unknown, HintProps>(InternalSelect) as CompoundedComponent;

NeoHint.displayName = 'NeoHint';

NeoHint.defaultProps = {
};

export default NeoHint



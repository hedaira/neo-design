import * as React from 'react';
import classNames from 'classnames';
import {Select} from 'antd';


export interface OptionProps {
    className?: string;
    children?: React.ReactNode;
    value?: any;
    disabled?: boolean;
    onClick?: any;
    title?: any;
}

const prefix = 'option';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<OptionProps & React.RefAttributes<HTMLElement>> {}

const InternalSelect: React.ForwardRefRenderFunction<unknown, OptionProps> = (props) => {
    const {
        className,
    } = props;


    const classes = classNames(
        className,
        prefix
    );

    const NeoOption = Select.Option

    return <NeoOption
        {...props}
        className={classes}
        value={props.value}
    />
}

const NeoOption = React.forwardRef<unknown, OptionProps>(InternalSelect) as CompoundedComponent;

NeoOption.displayName = 'NeoOption';

NeoOption.defaultProps = {
};

export default NeoOption



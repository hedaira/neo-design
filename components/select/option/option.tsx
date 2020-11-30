import * as React from 'react';
import classNames from 'classnames';
import {Select} from 'antd';


export interface OptionProps {
    width?: string;
    className?: string;
    children?: React.ReactNode;
    name?: string;
    value?: any;
    allowClear?: boolean;
    showSearch?: boolean;
    disabled?: boolean;
    placeholder?: string;
    defaultValue?: any;
    onClick?: any;
    mode?: 'default' | 'multiple' | 'tags';
    maxTagCount?: number;
    maxTagTextLength?: number;
    onChange?;
    getPopupContainer?;
    style?;
    maxTagPlaceholder?;

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
    />
}

const NeoOption = React.forwardRef<unknown, OptionProps>(InternalSelect) as CompoundedComponent;

NeoOption.displayName = 'NeoOption';

NeoOption.defaultProps = {
};

export default NeoOption



import * as React from 'react';
import classNames from 'classnames';
import {Select} from 'antd';


export interface SelectProps {
    width?: string;
    className?: string;
    children?: React.ReactNode;
    name?: string;
    value?: any;
    allowClear?: boolean;
    showSearch?: boolean;
    defaultValue?: string;
    onClick?: any;
    onChange?;
    getPopupContainer?;
    style?;
    placeholder?;
    suffix?;
    mode?;
}

const prefix = 'select';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLElement>> {}

const InternalSelect: React.ForwardRefRenderFunction<unknown, SelectProps> = (props) => {
    const {
        className,
    } = props;


    const classes = classNames(
        className,
        prefix
    );

        return <Select
            {...props}
            className={classes}
            style={{...props.style, width: `${props.width ? props.width : "185px"}`}}
            placeholder={props.placeholder}
        />
}

const NeoSelect = React.forwardRef<unknown, SelectProps>(InternalSelect) as CompoundedComponent;

NeoSelect.displayName = 'NeoSelect';

NeoSelect.defaultProps = {
};

export default NeoSelect



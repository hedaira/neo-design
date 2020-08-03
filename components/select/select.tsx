import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {Select} from 'antd';



export interface SelectProps {
    width?: string;
    className?: string;
    children?: React.ReactNode;
    name?: string;
    value?: string;
    allowClear?: boolean;
    onClick?: any;
    defaultValue?: string;

}

const prefix = 'select';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLElement>> {}

const InternalSelect: React.ForwardRefRenderFunction<unknown, SelectProps> = (props) => {
    const {
        className,
        children,
    } = props;


    const classes = classNames(
        className,
        prefix
    );

        return <Select
            {...props}
            className={classes}
            style={{width: `${props.width ? props.width : "185px"}`}}
        >
            {children}
        </Select>
}

const NeoSelect = React.forwardRef<unknown, SelectProps>(InternalSelect) as CompoundedComponent;

NeoSelect.displayName = 'NeoSelect';

NeoSelect.defaultProps = {
};

export default NeoSelect



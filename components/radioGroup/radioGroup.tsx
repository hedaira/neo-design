import * as React from 'react';
import classNames from 'classnames';
import {Radio} from 'antd';



export interface RadioGroupProps {
    className?: string;
    children?: React.ReactNode;
    value?: any;
    defaultValue?: any;
    placeholder?: string;
    disabled?: boolean;
    onChange?: any;
    style?: React.CSSProperties;
}

const prefix = 'RadioGroup';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLElement>> {}

const InternalRadioGroup: React.ForwardRefRenderFunction<unknown, RadioGroupProps> = (props) => {
    const {
        className,
        children,
    } = props;


    const classes = classNames(
        prefix,
        className,
    );

    return <Radio.Group
        {...props}
        className={classes}
        onChange={props.onChange}
        value={props.value}
        defaultValue={props.defaultValue}
    >
        {children}
    </Radio.Group>

}

const NeoRadioGroup = React.forwardRef<unknown, RadioGroupProps>(InternalRadioGroup) as CompoundedComponent;

NeoRadioGroup.displayName = 'NeoRadioGroup';

NeoRadioGroup.defaultProps = {
};

export default NeoRadioGroup



import * as React from 'react';
import classNames from 'classnames';
import {Radio} from 'antd';
import {Title} from "../_utils/Title";

export interface RadioGroupProps {
    className?: string;
    children?: React.ReactNode;
    hidden?: boolean;
    value?: any;
    defaultValue?: any;
    placeholder?: string;
    disabled?: boolean;
    onChange?: any;
    style?: React.CSSProperties;
    width?: string;
    required?: boolean;
    title?: string;
    titleOrientation?: "Top"|"Right"|"Bottom"|"Left",
    radioPosition?:"column"|"row"
}

const prefix = 'RadioGroup';

const InternalRadioGroup = React.forwardRef((props:RadioGroupProps, ref:any) => {
    const {
        className,
        children,
    } = props;

    const width = `${props.width ? props.width : undefined}`;
    const radioPosition = props.radioPosition ? props.radioPosition : "row";

    const classes = classNames(
        prefix,
        className,
        radioPosition
    );


    let radioGroup = <Radio.Group
        {...props}
        ref={ref}
        style={{
            ...props.style,
            flexDirection: radioPosition,
            width: props.width,
            display: props.hidden ? "none" : props.style?.display ? props.style?.display : "flex"
        }}
        className={classes}
        onChange={props.onChange}
        value={props.value}
        defaultValue={props.defaultValue}
    >
        {children}
    </Radio.Group>;

    if (props.title) {
        radioGroup = <Title
            hidden={props.hidden}
            title={props.title}
            titleOrientation={props.titleOrientation ? props.titleOrientation : "Left"}
            required={props.required} width={width}>
            {radioGroup}
        </Title>
    }

    return radioGroup
});

const NeoRadioGroup = InternalRadioGroup;

NeoRadioGroup.displayName = 'NeoRadioGroup';

NeoRadioGroup.defaultProps = {
};

export default NeoRadioGroup



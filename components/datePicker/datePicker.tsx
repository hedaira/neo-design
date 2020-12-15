import * as React from 'react';
import classNames from 'classnames';
import {DatePicker} from 'antd';
import {NeoIcon} from "neo-icon/lib";
import {Title} from "../_utils/Title";


export interface DatePickerProps {
    width?: string;
    defaultValue?;
    className?: string;
    disabled?: any;
    allowClear?: any;
    onChange?: any;
    key?: any;
    value?;
    format?;
    showTime?;
    title?: string;
    titleOrientation?: "Top"|"Right"|"Bottom"|"Left";
    getPopupContainer?: ()=>HTMLElement;
}

const prefix = 'datepicker';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLElement>> {}

const InternalDatePicker: React.ForwardRefRenderFunction<unknown, DatePickerProps> = (props) => {
    const {
        className,
    } = props;


    const classes = classNames(
        prefix,
        className,
    );

    const width = `${props.width ? props.width : "auto"}`;

    if (props.title && props.titleOrientation) {
        return <Title title={props.title} titleOrientation={props.titleOrientation} width={width}>
            <DatePicker
                {...props}
                className={classes}
                style={{width: `${props.width ? props.width : "auto"}`}}
                suffixIcon={<NeoIcon icon={"calendarFull"} color={"rgba(0, 0, 0, 0.25)"}/>}
            />
        </Title>
    }

    return <DatePicker
        {...props}
        className={classes}
        style={{width: width}}
        suffixIcon={<NeoIcon icon={"calendarFull"} color={"rgba(0, 0, 0, 0.25)"}/>}
    />
}

const NeoDatePicker = React.forwardRef<unknown, DatePickerProps>(InternalDatePicker) as CompoundedComponent;

NeoDatePicker.displayName = 'NeoDatePicker';

NeoDatePicker.defaultProps = {
};

export default NeoDatePicker



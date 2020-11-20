import * as React from 'react';
import classNames from 'classnames';
import {DatePicker} from 'antd';
import {NeoIcon} from "neo-icon/lib";


export interface DatePickerProps {
    width?: string;
    defaultValue?: any;
    className?: string;
    disabled?: boolean;
    allowClear?: boolean;
    onChange?: any;
    key?: any;
    value?: any;
    format?:any;
    showTime?:any;

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

        return <DatePicker
            {...props}
            className={classes}
            style={{width: `${props.width ? props.width : "auto"}`}}
            suffixIcon={<NeoIcon icon={"calendarFull"} color={"rgba(0, 0, 0, 0.25)"}/>}
        >
        </DatePicker>



}

const NeoDatePicker = React.forwardRef<unknown, DatePickerProps>(InternalDatePicker) as CompoundedComponent;

NeoDatePicker.displayName = 'NeoDatePicker';

NeoDatePicker.defaultProps = {
};

export default NeoDatePicker



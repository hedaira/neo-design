import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {DatePicker} from 'antd';
import {NeoIcon} from "neo-icon/lib";


export interface DatePickerProps {
    width?: string;
    defaultValue?: any;
    format?: any;
    showTime?: any;
    className?: string;
    onChange?: any;
    key?: any;
    value?: any;
    disabled?: any;
    allowClear?: any;

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



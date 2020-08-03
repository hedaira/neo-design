import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {Alert} from "antd/lib";

const AlertTypes = tuple('success', 'info', 'warning', 'error', 'default');
export type AlertType = typeof AlertTypes[number];


export interface AlertProps {
        typee?: AlertType;
        message?: string; // смотреть выше
        description?: string;
        width?: string;
        className?: string;
        children?: React.ReactNode;
}

const prefix = 'alert'; // для удобства чтоб понимать

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLElement>> {}

const InternalAlert: React.ForwardRefRenderFunction<unknown, AlertProps> = (props) => { // описание все что есть сверху
  const {
      typee,
      message,
      description,
      className,
      children,
  } = props;


    const classes = classNames(
        prefix,
        {
            [`${prefix}-${typee}`]: typee,
        },
        className
    );



    if (props.typee === 'default') {
        return <Alert
            message={message}
            closable
            {...props}
            className={classes}
            style={{width: `${props.width ? props.width : "auto"}`}}
        >
            {children}
        </Alert>
    }

}

const NeoAlert = React.forwardRef<unknown, AlertProps>(InternalAlert) as CompoundedComponent; // вызыввается

NeoAlert.displayName = 'NeoAlert';

NeoAlert.defaultProps = {
};

export default NeoAlert



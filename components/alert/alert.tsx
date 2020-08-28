import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {Alert} from "antd/lib";
import {NeoIcon} from "neo-icon/lib";

const AlertTypes = tuple('success', 'info', 'warning', 'error');
export type AlertType = typeof AlertTypes[number];


export interface AlertProps {
        Type?: AlertType;
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
      Type,
      message,
      description,
      className,
      children,
  } = props;


    const classes = classNames(
        className,
        prefix,
        {
            [`${prefix}-${Type}`]: Type,
        }

    );


    if (!props.Type) {

        return <Alert
            className={classes}
            message={message}
            closable
            {...props}
            style={{width: `${props.width ? props.width : "370px"}`}}
        >
            <NeoIcon icon={'calendar'} />
            {children}
        </Alert>
    }

    if (props.Type === 'info') {
        return <Alert
            message={message}
            description={description}
            closable
            {...props}
            className={classes}

            style={{width: `${props.width ? props.width : "370px"}`}}
        >
            {children}
        </Alert>
    }

    if (props.Type === 'error') {
        return <Alert
            message={message}
            description={description}
            closable
            {...props}
            className={classes}
            style={{width: `${props.width ? props.width : "370px"}`}}
        >
            {children}
        </Alert>
    }

    if (props.Type === 'success') {

        return <Alert
            message={message}
            description={description}
            closable
            {...props}
            className={classes}
            style={{width: `${props.width ? props.width : "370px"}`}}
        >
            {children}
        </Alert>
    }

    if (props.Type === 'warning') {
        return <Alert
            message={message}
            description={description}
            closable
            {...props}
            className={classes}
            style={{width: `${props.width ? props.width : "370px"}`}}
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



import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {Alert} from "antd/lib";
import NeoIcon from "../icon";

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
            {children}
        </Alert>
    }

    if (props.Type === 'info') {
        return <label className={'info'}>
        <Alert
            message={message}
            description={description}
            closable
            {...props}
            className={classes}

            style={{width: `${props.width ? props.width : "370px"}`}}
        >
            {children}
        </Alert>
        </label>
    }

    if (props.Type === 'error') {
        return <label className={'error'}>
        <Alert
            message={message}
            description={description}
            closable
            {...props}
            className={classes}
            style={{width: `${props.width ? props.width : "370px"}`}}
        >
            {children}
        </Alert>
        </label>
    }

    if (props.Type === 'success') {

        return <label className={'success'}>
        <Alert
            message={message}
            description={description}
            closable
            {...props}
            className={classes}
            style={{width: `${props.width ? props.width : "370px"}`}}
        >
            {children}
        </Alert>
        </label>
    }

    if (props.Type === 'warning') {
        return <label className={'warning'}>
        <Alert
            message={message}
            description={description}
            closable
            {...props}
            className={classes}
            style={{width: `${props.width ? props.width : "370px"}`}}
        >
            {children}
        </Alert>
        </label>
    }

}

const NeoAlert = React.forwardRef<unknown, AlertProps>(InternalAlert) as CompoundedComponent; // вызыввается

NeoAlert.displayName = 'NeoAlert';

NeoAlert.defaultProps = {
};

export default NeoAlert



import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {Alert} from "antd/lib";
import {NeoIcon} from "neo-icon/lib";

const AlertTypes = tuple('success', 'info', 'warning', 'error');
export type AlertType = typeof AlertTypes[number];


export interface AlertProps {
        type?: AlertType;
        message?: string; // смотреть выше
        description?: string;
        width?: string;
        className?: string;
        closable?: boolean;
}

const prefix = 'alert'; // для удобства чтоб понимать

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLElement>> {}

const InternalAlert: React.ForwardRefRenderFunction<unknown, AlertProps> = (props) => { // описание все что есть сверху
  const {
      type,
      message,
      description,
      className,
      closable
  } = props;


    const classes = classNames(
        className,
        prefix,
        {
            [`${prefix}-${type}`]: type,
        }

    );

    if (!props.type) {

        return <Alert
            banner
            closable={closable || false}
            message={message}
            className={classes}
            style={{width: `${props.width ? props.width : "370px"}`}}
            icon={<NeoIcon icon={'success'} color={'#27677c'}/>}
            closeText={closable && <NeoIcon icon={"close"} color={'#B3B3B3'}/>}
            {...props}
        />
    }

    if (props.type === 'error') {
        return <Alert
            banner
            closable={closable || true}
            message={message}
            className={classes}
            style={{width: `${props.width ? props.width : "370px"}`}}
            icon={<NeoIcon icon={'warning'} color={'#d47f9b'}/>}
            closeText={!closable && <NeoIcon icon={"close"} color={'#B3B3B3'}/>}
            description={description}
            {...props}
        />
    }

    if (props.type === 'info') {
        return <Alert
            banner
            closable={closable || true}
            message={message}
            className={classes}
            style={{width: `${props.width ? props.width : "370px"}`}}
            icon={<NeoIcon icon={'info'} color={'#424d78'}/>}
            closeText={!closable && <NeoIcon icon={"close"} color={'#B3B3B3'}/>}
            description={description}
            {...props}
        />
    }

    if (props.type === 'success') {

        return <Alert
            banner
            closable={closable || true}
            message={message}
            className={classes}
            style={{width: `${props.width ? props.width : "370px"}`}}
            icon={<NeoIcon icon={'success'} color={'#27677C'}/>}
            closeText={!closable && <NeoIcon icon={"close"} color={'#B3B3B3'}/>}
            description={description}
            {...props}
        />
    }

    if (props.type === 'warning') {
        return <Alert
            banner
            closable={closable || true}
            message={message}
            className={classes}
            style={{width: `${props.width ? props.width : "370px"}`}}
            icon={<NeoIcon icon={'info'} color={'#D9A54C'}/>}
            closeText={!closable && <NeoIcon icon={"close"} color={'#B3B3B3'}/>}
            description={description}
            {...props}
        />
    }

}

const NeoAlert = React.forwardRef<unknown, AlertProps>(InternalAlert) as CompoundedComponent; // вызыввается

NeoAlert.displayName = 'NeoAlert';

NeoAlert.defaultProps = {
};

export default NeoAlert



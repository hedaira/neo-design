import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {Alert} from "antd/lib";

const AlertTypes = tuple('success', 'info', 'warning', 'error');
export type AlertType = typeof AlertTypes[number];


export interface AlertProps {
    type?: 'success' | 'info' | 'warning' | 'error';
  message?: string; // смотреть выше
  description?: string;
  className?: string;
  closable?: boolean;
  children?: React.ReactNode;
}

const prefix = 'alrt'; // для удобства чтоб понимать

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLElement>> {} // обьевление интерфейса

const InternalAlert: React.ForwardRefRenderFunction<unknown, AlertProps> = (props) => { // описание все что есть сверху
  const {
        type,
        message,
        className,
        description,
        closable,
        children
  } = props;


  /*const classes = classNames(
      prefix,
      {
          [`${prefix}-${type}`]: type,
      },
      className,
  );*/

  return (
      <Alert
          className={className} // стлизуем кнопку
          message={message}
          closable={closable}
          description={description}
          showIcon
      >
        {children}
      </Alert>
  )
};

const NeoAlert = React.forwardRef<unknown, AlertProps>(InternalAlert) as CompoundedComponent; // вызыввается

NeoAlert.displayName = 'NeoAlert'; // указываем как вызывать

NeoAlert.defaultProps = {
};

export default Alert



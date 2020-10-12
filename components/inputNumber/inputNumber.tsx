import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {InputNumber} from 'antd';



export interface InputNumberProps {
  width?: string;
  className?: string;
  children?: React.ReactNode;
  defaultValue?: number;
  parser?: (displayValue: any | undefined) => number | string;
  formatter?: (value: number | string | undefined) => string;
  min?: number;
  max?: number;
  value?: any;
  placeholder?: string;
  disabled?: boolean;
  onChange?: any;
  style?: React.CSSProperties;
}

const prefix = 'inputNumber';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<InputNumberProps & React.RefAttributes<HTMLElement>> {}

const InternalInputNumber: React.ForwardRefRenderFunction<unknown, InputNumberProps> = (props) => {
  const {
    className,
    children,
  } = props;


  const classes = classNames(
      prefix,
      className,
  );


    return <InputNumber
        className={classes}
        {...props}
        style={{width: `${props.width ? props.width : "auto"}`}}
    >
      {children}
    </InputNumber>

}

const NeoInputNumber = React.forwardRef<unknown, InputNumberProps>(InternalInputNumber) as CompoundedComponent;

NeoInputNumber.displayName = 'NeoInputNumber';

NeoInputNumber.defaultProps = {
};

export default NeoInputNumber



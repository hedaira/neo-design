import * as React from 'react';
import classNames from 'classnames';
import {InputNumber, InputNumberProps} from 'antd';
import {Title} from "../_utils/Title";

export interface NeoInputNumberProps extends InputNumberProps {
  title?: string;
  titleOrientation?: "Top"|"Right"|"Bottom"|"Left"
}

const prefix = 'inputNumber';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<NeoInputNumberProps & React.RefAttributes<HTMLElement>> {}

const InternalInputNumber: React.ForwardRefRenderFunction<unknown, NeoInputNumberProps> = (props) => {
  const {
    className,
    children,
    hidden
  } = props;


  const classes = classNames(
      prefix,
      className,
  );


    return props.title ? <Title title={props.title}
                                hidden={hidden}
                                titleOrientation={props.titleOrientation ? props.titleOrientation : "Left"}
                                width={`${props.width ? props.width : "auto"}`}>
        <InputNumber
          className={classes}
          style={{width: `${props.width ? props.width : "auto"}`, display: hidden ? "none" : undefined}}
          {...props}
      >
        {children}
      </InputNumber>
    </Title> : <InputNumber
        className={classes}
        style={{width: `${props.width ? props.width : "auto"}`, display: hidden ? "none" : undefined}}
        {...props}
    >
      {children}
    </InputNumber>

}

const NeoInputNumber = React.forwardRef<unknown, NeoInputNumberProps>(InternalInputNumber) as CompoundedComponent;

NeoInputNumber.displayName = 'NeoInputNumber';

NeoInputNumber.defaultProps = {
};

export default NeoInputNumber



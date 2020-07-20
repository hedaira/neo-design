import * as React from 'react';
import classNames from 'classnames';

const tuple = <T extends string[]>(...args: T) => args;

const ButtonTypes = tuple('disabled', 'secondary');
export type ButtonType = typeof ButtonTypes[number];

const SizeTypes = tuple('medium', 'large');
export type SizeType = typeof SizeTypes[number];

export interface ButtonProps {
  type?: ButtonType;
  size?: SizeType;
  className?: string;
  children?: React.ReactNode;
}

const prefix = 'btn';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>> {}


const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props) => {
  const {
    type,
    size,
    className,
    children
  } = props;


  const classes = classNames(
      prefix,
      {
        [`${prefix}-${type}`]: type,
        [`${prefix}-${size}`]: size
      },
      className
  );

  return (
      <button
          className={classes}
      >
        {children}
      </button>
  )
};

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton) as CompoundedComponent;

Button.displayName = 'NeoButton';

Button.defaultProps = {
};

export default Button



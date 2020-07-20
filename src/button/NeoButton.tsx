import * as React from 'react';
import classNames from 'classnames';

const tuple = <T extends string[]>(...args: T) => args;

const ButtonTypes = tuple('disabled', 'secondary', 'primary');
export type ButtonType = typeof ButtonTypes[number];

const SizeTypes = tuple('medium', 'large');
export type SizeType = typeof SizeTypes[number];

export interface ButtonProps {
  type?: ButtonType;
  size?: SizeType;
  className?: string;
  children?: React.ReactNode;
}

const prefix = 'btn btn-primary';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>> {}


const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
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



  // return <button
  //     className={classes}
  // >
  //   {children}
  // </button>
};

const NeoButton = React.forwardRef<unknown, ButtonProps>(InternalButton) as CompoundedComponent;

NeoButton.displayName = 'NeoButton';

NeoButton.defaultProps = {
};

export default NeoButton



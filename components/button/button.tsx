import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'

const ButtonTypes = tuple('disabled', 'secondary', 'link', 'icon');
export type ButtonType = typeof ButtonTypes[number];

const SizeTypes = tuple('medium', 'large');
export type SizeType = typeof SizeTypes[number];

export interface ButtonProps {
    type?: ButtonType;
    size?: SizeType;
    title?: string;
    className?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
    style?;
    disabled?;
    color?;
}

const prefix = 'btn';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>> {}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props) => {
  const {
      type,
      size,
      title,
      className,
      children,
      style
  } = props;

  const classes = classNames(
      prefix,
      {
        [`${prefix}-${type}`]: type,
        [`${prefix}-${size}`]: size
      },
      className
  );

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        const { onClick } = props;
        if (onClick) {
            (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
        }
    };

    return (
        <button
            title={title}
            className={classes}
            onClick={handleClick}
            style={style}
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



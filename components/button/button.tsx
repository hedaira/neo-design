import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {Tooltip} from "antd";

const ButtonTypes = tuple('primary', 'disabled', 'secondary', 'link', 'ghost', 'circle', 'square', 'ghost-icon');
export type ButtonType = typeof ButtonTypes[number];

const SizeTypes = tuple('medium', 'large');
export type SizeType = typeof SizeTypes[number];

export interface ButtonProps {
    type?: ButtonType;
    size?: SizeType;
    title?: string;
    className?: string;
    id?: string;
    hidden?: boolean;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
    suffixIcon?: React.ReactNode;
    style?;
    color?: string;
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
      style,
      id,
      suffixIcon
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

    if (suffixIcon && props.title) {
        return (
            <Tooltip title={props.title} placement="bottomLeft">
                <button
                    id={id}
                    className={classes}
                    onClick={handleClick}
                    style={{...style, color: props.color==='blue' ? '#2a356c' : props.color==='white' ? '#fff': props.color ? props.color : undefined}}
                    hidden={props.hidden}
                    disabled={(props.type === 'disabled')}
                >
                    <div style={{marginRight: '6px', marginBottom: '-5px'}}>
                        {suffixIcon}
                    </div>
                    <div>
                        {children}
                    </div>
                </button>
            </Tooltip>
        )
    }
    if (suffixIcon) {
        return (
            <button
                id={id}
                title={title}
                className={classes}
                onClick={handleClick}
                style={{...style, color: props.color==='blue' ? '#2a356c' : props.color==='white' ? '#fff': props.color ? props.color : undefined}}
                hidden={props.hidden}
                disabled={(props.type === 'disabled')}
            >
                <div style={{marginRight: '6px', marginBottom: '-5px'}}>
                    {suffixIcon}
                </div>
                <div >
                    {children}
                </div>
            </button>
        )
    }
    if(props.title){
        return (
        <Tooltip title={props.title} placement="bottomLeft">
            <button
                id={id}
                className={classes}
                onClick={handleClick}
                style={{...style, color: props.color==='blue' ? '#2a356c' : props.color==='white' ? '#fff': props.color ? props.color : undefined}}
                hidden={props.hidden}
                disabled={(props.type === 'disabled')}
            >
                {children}
            </button>
        </Tooltip>
        )
    } else {
        return (
            <button
                id={id}
                className={classes}
                onClick={handleClick}
                style={{...style, color: props.color==='blue' ? '#2a356c' : props.color==='white' ? '#fff': props.color ? props.color : undefined}}
                hidden={props.hidden}
                disabled={(props.type === 'disabled')}
            >
                {children}
            </button>
        )
    }


};

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton) as CompoundedComponent;

Button.displayName = 'NeoButton';

Button.defaultProps = {
};

export default Button



import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'

const TypographyTypes = tuple(
    'capture-light',
    'capture-link',
    'capture-medium',
    'capture-regular',
    'body-bold',
    'body-link',
    'body-light',
    'body-regular',
    'body-medium',
    'h4-light',
    'h4-regular',
    'h4-medium',
    'h3-regular',
    'h3-medium',
    'h2-regular',
    'h2-medium',
    'h1-regular');
export type TypographyType = typeof TypographyTypes[number];

export interface TypographyProps {
    type?: TypographyType;
    className?: string;
    children?: React.ReactNode;
    style?;
    id?;
}

const prefix = 'typography';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<TypographyProps & React.RefAttributes<HTMLElement>> {}

const InternalButton: React.ForwardRefRenderFunction<unknown, TypographyProps> = (props) => {
  const {
      type,
      className,
      children,
      style,
      id
  } = props;

  const classes = classNames(
      prefix,
      {
        [`${prefix}-${type || 'capture-regular'}`]: true
      },
      className
  );

    return (
        <div
            id={id}
            className={classes}
            style={style}
        >
            {children}
        </div>
    )

};

const Typography = React.forwardRef<unknown, TypographyProps>(InternalButton) as CompoundedComponent;

Typography.displayName = 'NeoTypography';

Typography.defaultProps = {
};

export default Typography



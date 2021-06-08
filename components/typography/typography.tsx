import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'

const TypographyTypes = tuple(
    'h1_regular',
    'h2_medium',
    'h2_regular',
    'h3_medium',
    'h3_regular',
    'h4_medium',
    'h4_regular',
    'h4_light',
    'body_medium',
    'body_regular',
    'body_light',
    'body_link',
    'body_bold',
    'capture_regular',
    'capture_medium',
    'capture_link',
    'capture_light');
export type TypographyType = typeof TypographyTypes[number];

const TextDecorations = tuple(
    'line-through',
    'overline',
    'underline');

export type TextDecoration = typeof TextDecorations[number];

export interface TypographyProps {
    type?: TypographyType;
    className?: string;
    children?: React.ReactNode;
    style?;
    id?;
    hoverTextDecoration?: TextDecoration;
}

const prefix = 'typography';


const InternalButton = React.forwardRef((props:TypographyProps, ref:any) => {
  const {
      type,
      className,
      children,
      style,
      id,
      hoverTextDecoration
  } = props;

  const classes = classNames(
      prefix,
      {
          [`${prefix}-${type || 'capture_regular'}`]: true,
          [`${prefix}-${hoverTextDecoration}`]: hoverTextDecoration
      },
      className
  );

    return (
        <div
            ref={ref}
            id={id}
            className={classes}
            style={style}
        >
            {children}
        </div>
    )

});

const Typography = InternalButton;

Typography.displayName = 'NeoTypography';

Typography.defaultProps = {
};

export default Typography



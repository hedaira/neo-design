import * as React from 'react';
import classNames from 'classnames';
import {Typography} from "antd";
import {tuple} from "../../_utils/tools";

const {Paragraph} = Typography

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

export interface NeoParagraphProps {
    className?: string;
    type?: TypographyType;
    children?: React.ReactNode;
    style?;
    id?;
    key?;
    copyable?;
    editable?;
    code?;
    delete?;
    disabled?;
    ellipsis?;
    mark?;
    underline?;
    strong?;
}

const prefix = 'typography';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<NeoParagraphProps & React.RefAttributes<HTMLElement>> {}

const InternalButton: React.ForwardRefRenderFunction<unknown, NeoParagraphProps> = (props) => {
    const {
        key,
        type,
        className,
        children,
        style,
        copyable,
        editable,
        code,
        disabled,
        ellipsis,
        mark,
        underline,
        strong,
    } = props;

    const classes = classNames(
        prefix,
        {
            [`${prefix}-${type || 'capture_regular'}`]: true,
        },
        className
    );

    return (
        <Paragraph
            key={key}
            className={classes}
            style={style}
            copyable={copyable}
            editable={editable}
            code={code}
            disabled={disabled}
            ellipsis={ellipsis}
            mark={mark}
            underline={underline}
            strong={strong}
            delete={props.delete}
        >
            {children}
        </Paragraph>
    )
};

const NeoParagraph = React.forwardRef<unknown, NeoParagraphProps>(InternalButton) as CompoundedComponent;

NeoParagraph.displayName = 'NeoParagraph';

NeoParagraph.defaultProps = {
};

export default NeoParagraph



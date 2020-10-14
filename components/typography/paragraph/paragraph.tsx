import * as React from 'react';
import classNames from 'classnames';
import {Typography} from "antd";

const {Paragraph} = Typography

export interface NeoParagraphProps {
    className?: string;
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

const prefix = 'NeoParagraph';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<NeoParagraphProps & React.RefAttributes<HTMLElement>> {}

const InternalButton: React.ForwardRefRenderFunction<unknown, NeoParagraphProps> = (props) => {
    const {
        key,
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



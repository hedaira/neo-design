import * as React from "react";
import {tuple} from '../_utils/tools'
const allSvg = require('../../icons/sprite.svg');
const SvgNames = tuple(
    "arrowLong",
    "calendar",
    "close",
    "delete",
    "diagram",
    "diagramBlock",
    "diagramCircle",
    "edit",
    "fill",
    "gear",
    "letter",
    "list",
    "menu_open",
    "plus",
    "rubbish",
    "search",
    "swich",
    "alert",
    "info",
    "success",
    "warning",
    "down",
    "left",
    "right",
    "up",
    "add",
    "barChart",
    "calculator",
    "download",
    "filter",
    "fullScreen",
    "mark",
    "plusBlock",
    "print",
    "sort",
    "undo",
    "update",
    "calendar",
    "exit",
    "notification",
    "notification_off",
    "person",
    "question",
    "settings",
    "legend",
    "tiles",
    "more",
    "table",
    "tableUp",
    "hide",
    "show"
);

export type SvgName = typeof SvgNames[number];

export interface IconProps {
    icon: SvgName;
    className?: string;
    style?;
    color?: string;
    size?: string;
}

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<IconProps & React.RefAttributes<HTMLElement>> {}

const InternalIcon: React.ForwardRefRenderFunction<unknown, IconProps> = (props, ref) => {
    const {
        icon,
        className,
        style,
        color,
        size
    } = props;

    return (
        <div className={className} style={style}>
            <svg width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill={color || '#293468'}>
                <use xlinkHref={`${allSvg}#${icon}`} />
            </svg>
        </div>
    )
};

const NeoIcon = React.forwardRef<unknown, IconProps>(InternalIcon) as CompoundedComponent;

NeoIcon.displayName = 'NeoIcon';

NeoIcon.defaultProps = {
};

export default NeoIcon

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
    "person",
    "question",
    "settings",
    "legend",
    "tiles",
    "more",
    "table",
    "tableUp"
);

export type SvgName = typeof SvgNames[number];

export interface IconProps {
    icon: SvgName;
    className?: string;
}

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<IconProps & React.RefAttributes<HTMLElement>> {}

const InternalIcon: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
    const {
        icon,
        className,
    } = props;

    return (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref={`${allSvg}#${icon}`} />
        </svg>
    )
};

const NeoIcon = React.forwardRef<unknown, IconProps>(InternalIcon) as CompoundedComponent;

NeoIcon.displayName = 'NeoIcon';

NeoIcon.defaultProps = {
};

export default NeoIcon

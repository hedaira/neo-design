import * as React from "react";

const allSvg = require('../../icons/sprite.svg');
const SvgNames = require('../../icons/fileList.json');
// import SvgNames from '../../icons/fileList.json';

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
        <svg>
            <use xlinkHref={`${allSvg}#${icon}`} />
        </svg>
    )
};

const NeoIcon = React.forwardRef<unknown, IconProps>(InternalIcon) as CompoundedComponent;

NeoIcon.displayName = 'NeoIcon';

NeoIcon.defaultProps = {
};

export default NeoIcon

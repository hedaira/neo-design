import * as React from "react";

export interface IconProps {
    icon?: any;
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
        <img className={className} src={'sprite.svg#Vector'} alt={'Not found'}/>
    )
};

const NeoIcon = React.forwardRef<unknown, IconProps>(InternalIcon) as CompoundedComponent;

NeoIcon.displayName = 'NeoIcon';

NeoIcon.defaultProps = {
};

export default NeoIcon

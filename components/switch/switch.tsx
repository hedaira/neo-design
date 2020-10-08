import * as React from 'react';
import classNames from 'classnames';
import {Switch} from 'antd';


export type SwitchChangeEventHandler = (checked: boolean, event: MouseEvent) => void;
export type SwitchClickEventHandler = SwitchChangeEventHandler;

export interface SwitchProps {
    className?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: SwitchChangeEventHandler;
    onClick?: SwitchClickEventHandler;
    disabled?: boolean;
    style?: React.CSSProperties;
}

const prefix = 'switch';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLElement>> {
}

const InternalSwitch: React.ForwardRefRenderFunction<unknown, SwitchProps> = (props) => {
    const {
        className
    } = props;


    const classes = classNames(
        prefix,
        className,
    );

        return <Switch
            style={props.style}
            className={classes}
            {...props}
        >
        </Switch>

}

const NeoSwitch = React.forwardRef<unknown, SwitchProps>(InternalSwitch) as CompoundedComponent;


NeoSwitch.displayName = 'NeoSwitch';

NeoSwitch.defaultProps = {

};

export default NeoSwitch



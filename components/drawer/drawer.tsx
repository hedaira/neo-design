import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import { Drawer } from "antd";

const DrawerTypes = tuple('success', 'info', 'error');
export type DrawerType = typeof DrawerTypes[number];


export interface DrawerProps {
    type?: DrawerType;
    title?: string; // смотреть выше
    content?: string;
    visible?: boolean;
    onClose?;
    width?;
    className?: string;
    children?: React.ReactNode;
    getContainer?;
    mask?;
    footer?;
}



const prefix = 'Drawer';


interface CompoundedComponent
    extends React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<HTMLElement>> {}

const InternalDrawer: React.ForwardRefRenderFunction<unknown, DrawerProps> = (props) => {
    const {
        title,
        width,
        visible,
        className,
        children,
    } = props;

const classes = classNames(
    className,
    prefix,
);

    return (
        <Drawer
            title={title}
            width={width}
            onClose={props.onClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
            style={{top:'80px'}}
            className={classes}
        >
            {children}
            <div
                style={{
                    position: 'absolute',
                    right: 0,
                    bottom: '80px',
                    width: '100%',
                    borderTop: '1px solid #e9e9e9',
                    padding: '16px 40px',
                    background: '#F2F2F2',
                    textAlign: 'left',
                }}
            >
                {props.footer}
            </div>
        </Drawer>
    )

}

const NeoDrawer = React.forwardRef<unknown, DrawerProps>(InternalDrawer) as CompoundedComponent; // вызыввается

NeoDrawer.displayName = 'NeoDrawer';

NeoDrawer.defaultProps = {
};

export default NeoDrawer



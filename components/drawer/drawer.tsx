import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import { Drawer } from "antd";
declare type getContainerFunc = () => HTMLElement;

const DrawerTypes = tuple('success', 'info', 'error');
export type DrawerType = typeof DrawerTypes[number];


export interface DrawerProps {
    type?: DrawerType;
    title?: string; // смотреть выше
    content?: string;
    visible?: boolean;
    className?: string;
    children?: React.ReactNode;
    getContainer?: string | HTMLElement | getContainerFunc | false;
    mask?: boolean;
    width?;
    onClose?;
    footer?;
    style?;
}



const prefix = 'Drawer';


interface CompoundedComponent
    extends React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<HTMLElement>> {}

const InternalDrawer: React.ForwardRefRenderFunction<unknown, DrawerProps> = (props) => {
    const {
        title,
        visible,
        className,
        children,
        width
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
            style={{...props.style, top:'79px'}}
            className={classes}
            {...props}
            getContainer={props.getContainer}
        >
            {children}

                {props.footer && <div
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: '79px',
                        width: '100%',
                        borderTop: '1px solid #e9e9e9',
                        padding: '16px 40px',
                        background: '#F2F2F2',
                        textAlign: 'left',
                    }}
                >{props.footer}</div>
                }
        </Drawer>
    )

}

const NeoDrawer = React.forwardRef<unknown, DrawerProps>(InternalDrawer) as CompoundedComponent; // вызыввается

NeoDrawer.displayName = 'NeoDrawer';

NeoDrawer.defaultProps = {
};

export default NeoDrawer



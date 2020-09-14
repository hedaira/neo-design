import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import { Drawer } from "antd";
import { NeoButton } from "../index";

const DrawerTypes = tuple('success', 'info', 'error');
export type DrawerType = typeof DrawerTypes[number];


export interface DrawerProps {
    type?: DrawerType;
    title?: string; // смотреть выше
    content?: string;
    visible?: boolean;
    onClose?;
    onSubmit?;
    onOk?: React.MouseEventHandler<HTMLElement>;
    onCancel?: React.MouseEventHandler<HTMLElement>;
    width?;
    className?: string;
    children?: React.ReactNode;
    getContainer?;
    mask?;
}



const prefix = 'Drawer';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<HTMLElement>> {}

const InternalDrawer: React.ForwardRefRenderFunction<unknown, DrawerProps> = (props) => {
    const {
        type,
        title,
        width,
        visible,
        className,
        children,
    } = props;

    return (
        <Drawer
            title={title}
            width={width}
            onClose={props.onClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
            style={{top:'80px'}}
        >
            {children}
            <div
                style={{
                    position: 'absolute',
                    right: 0,
                    bottom: '80px',
                    width: '100%',
                    borderTop: '1px solid #e9e9e9',
                    padding: '10px 16px',
                    background: '#fff',
                    textAlign: 'right',
                }}
            >
                <NeoButton onClick={props.onSubmit}>
                    Submit
                </NeoButton>
                <NeoButton type={'secondary'} onClick={props.onClose} style={{ marginRight: 8 }}>
                    Cancel
                </NeoButton>
            </div>
        </Drawer>
    )

}

const NeoDrawer = React.forwardRef<unknown, DrawerProps>(InternalDrawer) as CompoundedComponent; // вызыввается

NeoDrawer.displayName = 'NeoDrawer';

NeoDrawer.defaultProps = {
};

export default NeoDrawer



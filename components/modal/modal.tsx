import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {Modal} from "antd/lib";
import {NeoButton} from "../index";


const ModalTypes = tuple('success', 'info', 'error');
export type ModalType = typeof ModalTypes[number];


export interface ModalProps {
        type?: ModalType;
        title?: string; // смотреть выше
        content?: string;
        visible?: boolean;
        onOk?: React.MouseEventHandler<HTMLElement>;
        onCancel?: React.MouseEventHandler<HTMLElement>;
        width?: string;
        className?: string;
        children?: React.ReactNode;
}



const prefix = 'Modal';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLElement>> {}

const InternalModal: React.ForwardRefRenderFunction<unknown, ModalProps> = (props) => {
  const {
      type,
      title,
      content,
      visible,
      className,
      children,
  } = props;


    const classes = classNames(
        className,
        prefix,
        {
            [`${prefix}-${type}`]: type,
        }

    );

    const handleOk = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        const { onOk } = props;
        if (onOk) {
            (onOk as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        const { onOk } = props;
        if (onOk) {
            (onOk as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
        }
    };

    if (!props.type) {
        return <label className={'question'}>
        <Modal
            className={classes}
            title={title}
            visible={visible}
            closable={false}
            footer={<div>
                <NeoButton size={'medium'} className={'question-button-close'} type={'secondary'} onClick={handleClick}>Close</NeoButton>
                <NeoButton size={'medium'} className={'question-button-ok'} onClick={handleClick}>OK</NeoButton>
            </div>}
            {...props}
            style={{width: `${props.width ? props.width : "430px"}`}}
        >
            {content}
            {children}
        </Modal>
        </label>
    }

    if (props.type === 'info') {
        return <Modal
            className={classes}
            title={title}
            onOk={handleClick}
            visible={visible}
            closable={false}
            footer={
                <NeoButton className={'info-button'}  size={'medium'} onClick={handleClick}>OK</NeoButton>}
            {...props}
            style={{width: `${props.width ? props.width : "930px"}`}}
        >
            <div style={{width: '100%', display:'flex', alignItems:'center', flexDirection:'column'}}>
            {content}
            </div>
        </Modal>


    }

    if (props.type === 'error') {
        return <Modal
            className={classes}
            title={title}
            visible={visible}
            closable={false}
            footer={
                <NeoButton size={'medium'} className={'error-button'} onClick={handleClick}>OK</NeoButton>}
            {...props}
            style={{width: `${props.width ? props.width : "430px"}`}}
        >
            <div style={{width: '100%', display:'flex', alignItems:'center', flexDirection:'column'}}>
                {content}
            </div>
            {children}
        </Modal>

    }

    if (props.type === 'success') {
        return <Modal
            className={classes}
            title={<div style={{width: '100%', display:'flex', alignItems:'center', flexDirection:'column'}}>{title}
            </div>}
            visible={visible}
            closable={false}
            footer={
                <NeoButton size={'medium'} className={'success-button'} onClick={handleClick}>OK</NeoButton>}
            {...props}
            style={{width: `${props.width ? props.width : "430px"}`}}
        >
            <div style={{width: '100%', display:'flex', alignItems:'center', flexDirection:'column'}}>
                {content}
            </div>
            {children}
        </Modal>

    }

}

const NeoModal = React.forwardRef<unknown, ModalProps>(InternalModal) as CompoundedComponent; // вызыввается

NeoModal.displayName = 'NeoModal';

NeoModal.defaultProps = {
};

export default NeoModal



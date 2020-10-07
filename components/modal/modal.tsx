import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {Modal} from "antd/lib";
import {NeoButton, NeoTypography} from "../index";
import {NeoIcon} from "neo-icon/lib";


const ModalTypes = tuple('success', 'info', 'error', 'edit', 'question');
export type ModalType = typeof ModalTypes[number];


export interface ModalProps {
        type?: ModalType;
        title?: string; // смотреть выше
        content?: string;
        visible?: boolean;
        textOfLeftButton?: string;
        textOfRightButton?: string;
        onLeftButtonClick?: any;
        onRightButtonClick?: any;
        onOk?: React.MouseEventHandler<HTMLElement>;
        onCancel?: React.MouseEventHandler<HTMLElement>;
        width?: string;
        className?: string;
        children?: React.ReactNode;
        closable?;
}



const prefix = 'Modal';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLElement>> {}

const InternalModal: React.ForwardRefRenderFunction<unknown, ModalProps> = (props) => {
  const {
      type,
      title,
      textOfLeftButton,
      textOfRightButton,
      onLeftButtonClick,
      onRightButtonClick,
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

    if (props.type === 'question') {
        return <label className={'question'}>
        <Modal
            {...props}
            className={classes}
            title={title}
            visible={visible}
            closable={props.closable}
            footer={<div>
                <NeoButton size={'medium'} className={'question-button-close'} type={'secondary'} onClick={handleClick}>Close</NeoButton>
                <NeoButton size={'medium'} className={'question-button-ok'} onClick={handleClick}>OK</NeoButton>
            </div>}
            style={{width: `${props.width ? props.width : "430px"}`}}
        >
            {content}
            {children}
        </Modal>
        </label>
    }

    if (props.type === 'info') {
        return <Modal
            {...props}
            className={classes}
            title={
                <div>
                    <NeoIcon icon={'info'} customSize={'60'}/>
                    <div style={{width: '100%', display:'flex', alignItems:'center', flexDirection:'column', marginTop: '17px'}}>
                        {title}
                    </div>
                </div>}
            onOk={handleClick}
            visible={visible}
            closable={props.closable}
            footer={<NeoButton className={'info-button'}  size={'medium'} onClick={handleClick}>OK</NeoButton>}
            style={{width: `${props.width ? props.width : "930px"}`}}
        >
            <div style={{width: '100%', display:'flex', alignItems:'center', flexDirection:'column'}}>
                {content}
            </div>
            {children}
        </Modal>
    }

    if (props.type === 'error') {
        return <Modal
            {...props}
            className={classes}
            title={
                <div>
                    <NeoIcon icon={"warning"} customSize={'60'} color={'#e16468'}/>
                    <div style={{width: '100%', display:'flex', alignItems:'center', flexDirection:'column', marginTop: '17px'}}>
                        {title}
                    </div>
                </div>}
            visible={visible}
            closable={props.closable}
            footer={<NeoButton size={'medium'} className={'error-button'} onClick={handleClick}>OK</NeoButton>}
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
            {...props}
            className={classes}
            title={
                <div>
                    <NeoIcon icon={"success"} customSize={'60'} color={'#27677c'}/>
                    <div style={{width: '100%', display:'flex', alignItems:'center', flexDirection:'column', marginTop: '17px'}}>
                        {title}
                    </div>
                </div>}
            visible={visible}
            closable={props.closable}
            footer={<NeoButton size={'medium'} className={'success-button'} onClick={handleClick}>OK</NeoButton>}
            style={{width: `${props.width ? props.width : "430px"}`}}
        >
            <div style={{width: '100%', display:'flex', alignItems:'center', flexDirection:'column'}}>
                {content}
            </div>
            {children}
        </Modal>
    }

    if (props.type === 'edit' ) {
        return <label className={'question'}>
            <Modal
                {...props}
                className={classes}
                title={title}
                visible={visible}
                closable={props.closable}
                footer={<div>
                    <NeoButton style={{width:"111px", height: "32px"}} className={'edit-button-left'} type={'secondary'} onClick={onLeftButtonClick}><NeoTypography style={{color: "#424D78"}} type={'capture-regular'}>{textOfLeftButton}</NeoTypography></NeoButton>
                    <NeoButton style={{width:"111px", height: "32px", marginLeft: "8px"}} className={'edit-button-right'} onClick={onRightButtonClick}><NeoTypography style={{color: "#FFFFFF"}} type={'capture-regular'}>{textOfRightButton}</NeoTypography></NeoButton>
                </div>}
                style={{width: `${props.width ? props.width : "430px"}`}}
            >
               <NeoTypography type={'capture-regular'} style={{color: "#333333"}}>{content} </NeoTypography>
                {children}
            </Modal>
        </label>
    }



}

const NeoModal = React.forwardRef<unknown, ModalProps>(InternalModal) as CompoundedComponent; // вызыввается

NeoModal.displayName = 'NeoModal';

NeoModal.defaultProps = {
};

export default NeoModal



import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {Modal} from "antd/lib";
import {NeoButton, NeoTypography} from "../index";
import {NeoIcon} from "neo-icon/lib";


const ModalTypes = tuple('success', 'info', 'error', 'edit', 'basic');
export type ModalType = typeof ModalTypes[number];


export interface ModalProps {
        type: ModalType;
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
        closable?: boolean;
        footer?: any;
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
      footer
  } = props;


    const classes = classNames(
        className,
        prefix,
        {
            [`${prefix}-${type}`]: type,
        }

    );


    if (props.type === 'basic') {
        return <label className={'basic'}>
        <Modal
            {...props}
            className={classes}
            title={title}
            visible={visible}
            closable={props.closable}
            footer={footer ? footer :<div>
                {onLeftButtonClick && <NeoButton size={'medium'} className={'basic-button-ok'} onClick={onLeftButtonClick}>{textOfLeftButton ? textOfLeftButton : 'Ок'}</NeoButton>}
                {onRightButtonClick && <NeoButton size={'medium'} className={'basic-button-close'} type={'secondary'} onClick={onRightButtonClick}>{textOfRightButton ? textOfRightButton : 'Отменить'}</NeoButton>}
            </div>}
            style={{width: `${props.width ? props.width : "432px"}`}}
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
                    <div style={{width: '100%', display:'flex', alignItems:'center', flexDirection:'column', marginTop: '9px'}}>
                        {title}
                    </div>
                </div>}
            onOk={onLeftButtonClick}
            visible={visible}
            closable={props.closable}
            footer={footer ? footer :<NeoButton className={'info-button'}  size={'medium'} onClick={onLeftButtonClick}>{textOfLeftButton ? textOfLeftButton : 'Ок'}</NeoButton>}
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
                    <div style={{width: '100%', display:'flex', alignItems:'center', flexDirection:'column', marginTop: '9px'}}>
                        {title}
                    </div>
                </div>}
            visible={visible}
            closable={props.closable}
            footer={footer ? footer :<NeoButton size={'medium'} className={'error-button'} onClick={onLeftButtonClick}>{textOfLeftButton ? textOfLeftButton : 'Ок'}</NeoButton>}
            style={{width: `${props.width ? props.width : "432px"}`}}
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
                    <div style={{width: '100%', display:'flex', alignItems:'center', flexDirection:'column', marginTop: '9px'}}>
                        {title}
                    </div>
                </div>}
            visible={visible}
            closable={props.closable}
            footer={footer ? footer :<NeoButton size={'medium'} className={'success-button'} onClick={onLeftButtonClick}>{textOfLeftButton ? textOfLeftButton : 'Ок'}</NeoButton>}
            style={{width: `${props.width ? props.width : "432px"}`}}
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
                className={classes}
                {...props}
                title={title}
                visible={visible}
                closable={props.closable}
                footer={footer ? footer : <div>
                    {onLeftButtonClick && <NeoButton style={{width:"111px", height: "32px"}} className={'edit-button-right'} onClick={onLeftButtonClick}>
                        <NeoTypography style={{color: "#FFFFFF"}} type={'capture_regular'}>{textOfLeftButton ? textOfLeftButton : 'Ок'}</NeoTypography>
                    </NeoButton>}
                    {onRightButtonClick && <NeoButton style={{width:"111px", height: "32px"}} className={'edit-button-left'} type={'secondary'} onClick={onRightButtonClick}>
                        <NeoTypography style={{color: "#424D78"}} type={'capture_regular'}>{textOfRightButton ? textOfRightButton : 'Отменить'}</NeoTypography>
                    </NeoButton>}
                </div>}
                style={{width: `${props.width ? props.width : "432px"}`}}
            >
               <NeoTypography type={'capture_regular'} style={{color: "#333333"}}>{content} </NeoTypography>
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



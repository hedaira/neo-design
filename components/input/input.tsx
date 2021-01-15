import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {Input, Radio} from 'antd';
import {Title} from "../_utils/Title";
const InputTypes = tuple('search', 'textArea', 'checkbox', 'radio');
export type InputType = typeof InputTypes[number];


export interface InputProps {
    type?: InputType;
    width?: string;
    password?: boolean;
    autofocus?: boolean;
    className?: string;
    children?: React.ReactNode;
    name?: string;
    value?: any;
    allowClear?: boolean;
    onClick?: any;
    onChange?: any;
    onSearch?: any;
    defaultChecked?: boolean;
    checked?: boolean;
    hidden?: boolean;
    placeholder?: string;
    disabled?: any;
    title?: string;
    titleOrientation?: "Top"|"Right"|"Bottom"|"Left"
    required?: boolean;
    defaultValue?: string;
    style?;
    id?;
    key?;
    onKeyUp?;
    onPressEnter?;
}

const prefix = 'input';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLElement>> {}

const InternalInput: React.ForwardRefRenderFunction<unknown, InputProps> = (props) => {
    const {
        type,
        className,
        children,
    } = props;


    const classes = classNames(
        prefix,
        {
            [`${prefix}-${type}`]: type,
        },
            className,
    );

    if (!props.type && !props.password) {
        return props.title && props.titleOrientation ? <Title title={props.title} required={props.required} titleOrientation={props.titleOrientation} width={`${props.width ? props.width : "auto"}`}>
            <Input
                {...props}
                autoFocus={props.autofocus}
                className={classes}
                hidden={props.hidden}
                onPressEnter={props.onPressEnter}
                style={{...props.style, width: `${props.width ? props.width : "auto"}`}}
                placeholder={props.placeholder}
                disabled={props.disabled}
                defaultValue={props.defaultValue}
                value={props.value}
                onChange={props.onChange}
            >
                {children}
            </Input>
        </Title> : <Input
            {...props}
            autoFocus={props.autofocus}
            className={classes}
            hidden={props.hidden}
            onPressEnter={props.onPressEnter}
            style={{...props.style, width: `${props.width ? props.width : "auto"}`}}
            placeholder={props.placeholder}
            disabled={props.disabled}
            defaultValue={props.defaultValue}
            value={props.value}
            onChange={props.onChange}
        >
            {children}
        </Input>
    }

    if (!props.type && props.password) {
        return <Input
            {...props}
            autoFocus={props.autofocus}
            type="password"
            className={classes}
            hidden={props.hidden}
            onPressEnter={props.onPressEnter}
            style={{...props.style, width: `${props.width ? props.width : "auto"}`}}
            placeholder={props.placeholder}
            disabled={props.disabled}
            defaultValue={props.defaultValue}
            value={props.value}
            onChange={props.onChange}
        >
            {children}
        </Input>
    }

    if (props.type === 'search') {
        return <Input.Search
            placeholder='Поиск'
            autoFocus={props.autofocus}
            {...props}
            className={classes}
            hidden={props.hidden}
            onPressEnter={props.onPressEnter}
            onSearch={props.onSearch}
            style={{...props.style, width: `${props.width ? props.width : "auto"}`}}
            disabled={props.disabled}
            defaultValue={props.defaultValue}
            value={props.value}
            onChange={props.onChange}
        >
            {children}
        </Input.Search>
    }

    if (props.type === 'checkbox') {
        return <label className={classes} style={props.disabled? {cursor:'no-drop'}:{}}>
            <input value={props.value} type={'checkbox'} checked={(props.checked)} defaultChecked={(props.defaultChecked)} onChange={props.onChange} onClick={props.onClick} disabled={props.disabled}/>
            <span className="checkmark" style={props.disabled? {backgroundColor:'rgba(0,0,0,0.15)'}:{}} />
            <span>{children}</span>
        </label>
    }

    if (props.type === 'radio') {
        return  <Radio {...props} className={classes}>
                    {children}
                </Radio>
    }

    if (props.type === 'textArea') {
        return <textarea {...props} className={classes} style={{...props.style, width: `${props.width ? props.width : "auto"}`}}>
            {children}
        </textarea>
    }
}

const NeoInput = React.forwardRef<unknown, InputProps>(InternalInput) as CompoundedComponent;

NeoInput.displayName = 'NeoInput';

NeoInput.defaultProps = {
};

export default NeoInput



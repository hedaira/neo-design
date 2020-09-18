import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {Input} from 'antd';
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
    value?: string;
    allowClear?: boolean;
    onClick?: any;
    onChange?: any;
    onSearch?: any;
    defaultChecked?: boolean;
    checked?: boolean;
    style?;
    placeholder?;
    disabled?: any;
    id?;
    key?;
    title?;
    onKeyUp?;
    hidden?;
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
        return <Input
            {...props}
            autoFocus={props.autofocus}
            className={classes}
            hidden={props.hidden}
            style={{width: `${props.width ? props.width : "auto"}`}}
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
            style={{width: `${props.width ? props.width : "auto"}`}}
        >
            {children}
        </Input>
    }

    if (props.type === 'search') {
        return <Input.Search
            placeholder='Поиск'
            autoFocus={props.autofocus}
            className={classes}
            {...props}
            hidden={props.hidden}
            onSearch={props.onSearch}
            style={{...props.style, width: `${props.width ? props.width : "auto"}`}}
        >
            {children}
        </Input.Search>
    }

    if (props.type === 'checkbox') {
        return <label className={classes} style={props.disabled? {cursor:'no-drop'}:{}}>
            <input type={'checkbox'} checked={(props.checked)} defaultChecked={(props.defaultChecked)} onChange={props.onChange} disabled={props.disabled}/>
            <span className="checkmark" style={props.disabled? {backgroundColor:'#E6E6E6', border:'1px solid #8C8C8C'}:{}} />
            <span>{children}</span>
        </label>
    }

    if (props.type === 'radio') {
        return <label className={classes}>
            <input type={'radio'} name={props.name} value={props.value} />
            <span className="checkmark" />
            <span>{children}</span>
        </label>
    }

    if (props.type === 'textArea') {
        return <textarea className={classes} style={{...props.style, width: `${props.width ? props.width : "auto"}`}} placeholder={props.placeholder}>
            {children}
        </textarea>
    }
}

const NeoInput = React.forwardRef<unknown, InputProps>(InternalInput) as CompoundedComponent;

NeoInput.displayName = 'NeoInput';

NeoInput.defaultProps = {
};

export default NeoInput



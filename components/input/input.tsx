import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {Input} from 'antd';
const InputTypes = tuple('search', 'textArea', 'checkbox', 'radio');
export type InputType = typeof InputTypes[number];


export interface InputProps {
    type?: InputType;
    width?: string;
    className?: string;
    children?: React.ReactNode;
    name?: string;
    value?: string;
    allowClear?: boolean;
    onClick?: any;

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

    if (!props.type) {
        return <Input
            {...props}
            className={classes}
            style={{width: `${props.width ? props.width : "auto"}`}}
        >
            {children}
        </Input>
    }

    if (props.type === 'search') {
        return <Input
            placeholder='Поиск'
            {...props}
            className={classes}
            style={{width: `${props.width ? props.width : "auto"}`}}
        >
            {children}
        </Input>
    }

    if (props.type === 'checkbox') {
        return <label className={'checkbox-label'}>
            {children}
                <input type={'checkbox'} className={classes} />
            <span className="checkmark" />
        </label>
    }

    if (props.type === 'radio') {
        return <label
            className={'radio-label'} >
            {children}
                <input type={'radio'} className={classes} name={props.name} value={props.value} />
            <span className="checkmark" />
        </label>
    }

    if (props.type === 'textArea') {
        return <textarea className={classes} style={{width: `${props.width ? props.width : "auto"}`}}>
            {children}
        </textarea>
    }
}

const NeoInput = React.forwardRef<unknown, InputProps>(InternalInput) as CompoundedComponent;

NeoInput.displayName = 'NeoInput';

NeoInput.defaultProps = {
};

export default NeoInput



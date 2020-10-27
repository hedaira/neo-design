import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {NeoIcon} from "neo-icon/lib";
import {NeoTypography} from "../index";

const HrefTypes = tuple('success', 'warning', 'error');
export type HrefType = typeof HrefTypes[number];


export interface HrefProps {
    type?: HrefType;
    message?: string; // смотреть выше
    description?: string;
    width?: string;
    className?: string;
    closable?: boolean;
    hidden?: boolean;
    href?;
    children?: React.ReactNode;
}

const prefix = 'href'; // для удобства чтоб понимать

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<HrefProps & React.RefAttributes<HTMLElement>> {}

const InternalHref: React.ForwardRefRenderFunction<unknown, HrefProps> = (props) => { // описание все что есть сверху
    const {
        type,
        message,
        description,
        className,
        closable,
        hidden,
        href
    } = props;


    const classes = classNames(
        className,
        prefix,
        {
            [`${prefix}-${type}`]: type,
        }

    );

    if (props.type === 'error') {
        return <a
            className={classes}
            hidden={hidden}
            href={href}>
            <NeoIcon style={{margin:'5px 12px 0 0'}} icon={'warning'} color={'#AD1457'}/>
            <NeoTypography type={'body_regular'} style={{color:'#AD1457'}}>{props.children}</NeoTypography>
        </a>
    }

    if (props.type === 'success') {
        return <a
            className={classes}
            hidden={hidden}
            href={href}>
            <NeoIcon style={{margin:'5px 12px 0 0'}} icon={'success'} color={'#27677C'}/>
            <NeoTypography type={'body_regular'} style={{color:'#0E5A7D'}}>{props.children}</NeoTypography>
        </a>
    }

    if (props.type === 'warning') {
        return <a
            className={classes}
            hidden={hidden}
            href={href}>
            <NeoIcon style={{margin:'5px 12px 0 0'}} icon={'warning'} color={'#D9A54C'}/>
            <NeoTypography type={'body_regular'} style={{color:'#D9A54C'}}>{props.children}</NeoTypography>
        </a>
    }

}

const NeoHref = React.forwardRef<unknown, HrefProps>(InternalHref) as CompoundedComponent; // вызыввается

NeoHref.displayName = 'NeoHref';

NeoHref.defaultProps = {
};

export default NeoHref



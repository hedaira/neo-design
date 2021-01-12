import * as React from 'react';
import classNames from 'classnames';
import {Select} from 'antd';
import {Title} from "../_utils/Title";


export interface SelectProps {
    width?: string;
    className?: string;
    children?: React.ReactNode;
    name?: string;
    value?: any;
    allowClear?: boolean;
    showSearch?: boolean;
    disabled?: boolean;
    placeholder?: string;
    defaultValue?: any;
    onClick?: any;
    mode?: 'default' | 'multiple' | 'tags';
    maxTagCount?: number;
    maxTagTextLength?: number;
    filterOption?;
    onChange?;
    getPopupContainer?: ()=>HTMLElement;
    onDropdownVisibleChange?;
    style?;
    maxTagPlaceholder?;
    title?: string;
    titleOrientation?: "Top"|"Right"|"Bottom"|"Left";
}

const prefix = 'select';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLElement>> {}

const InternalSelect: React.ForwardRefRenderFunction<unknown, SelectProps> = (props) => {
    const {
        className,
    } = props;


    const classes = classNames(
        className,
        prefix
    );

    const width = `${props.width ? props.width : "185px"}`;

    if (props.title && props.titleOrientation) {
        return <Title title={props.title} titleOrientation={props.titleOrientation} width={width}>
            <Select
                {...props}
                getPopupContainer={props.getPopupContainer}
                className={classes}
                style={{...props.style, width: width}}
                placeholder={props.placeholder}
                filterOption={props.filterOption}
                showSearch={props.showSearch}
                allowClear={props.allowClear}
            >
                {props.children}
            </Select>
        </Title>
    }

    return <Select
        {...props}
        getPopupContainer={props.getPopupContainer}
        className={classes}
        style={{...props.style, width: width}}
        placeholder={props.placeholder}
        filterOption={props.filterOption}
        showSearch={props.showSearch}
        allowClear={props.allowClear}
    >
        {props.children}
    </Select>
}

const NeoSelect = React.forwardRef<unknown, SelectProps>(InternalSelect) as CompoundedComponent;

NeoSelect.displayName = 'NeoSelect';

NeoSelect.defaultProps = {
};

export default NeoSelect



import * as React from 'react';
import classNames from 'classnames';
import {Select} from 'antd';
import {Title} from "../_utils/Title";
import {RefSelectProps} from "antd/es/select";
import {RefObject} from "react";
import {NeoIcon} from "neo-icon/lib";


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
    mode?: undefined | 'multiple' | 'tags';
    maxTagCount?: any;
    maxTagTextLength?: number;
    filterOption?;
    onChange?;
    getPopupContainer?: ()=>HTMLElement;
    onDropdownVisibleChange?;
    style?;
    maxTagPlaceholder?;
    title?: string;
    titleOrientation?: "Top"|"Right"|"Bottom"|"Left";
    required?: boolean;
    hidden?: boolean;
    id?: string;
    dropdownRender?;
    tagRender?;
    ref?;
    suffixIcon?;
}

const prefix = 'select';

const InternalSelect = React.forwardRef((props:SelectProps, ref:RefObject<RefSelectProps>) => {
    const {
        className,
    } = props;

    const classes = classNames(
        className,
        prefix
    );

    const width = `${props.width ? props.width : "185px"}`;

    if (props.title) {
        return <Title
            hidden={props.hidden}
            title={props.title}
            titleOrientation={props.titleOrientation ? props.titleOrientation : "Left"}
            required={props.required} width={width}>
            <Select
                {...props}
                ref={ref}
                id={props.id}
                getPopupContainer={props.getPopupContainer}
                className={classes}
                style={{display: props.hidden ? "none" : undefined, ...props.style, width: width}}
                placeholder={props.placeholder}
                showSearch={props.showSearch}
                allowClear={props.allowClear}
                filterOption={props.filterOption||true}
                dropdownRender={props.dropdownRender}
                tagRender={props.tagRender}
                suffixIcon={props.suffixIcon ? props.suffixIcon : <NeoIcon icon={'arrowDown'} size={'s'} />}
            >
                {props.children}
            </Select>
        </Title>
    }

    return <Select
        {...props}
        ref={ref}
        id={props.id}
        getPopupContainer={props.getPopupContainer}
        className={classes}
        style={{display: props.hidden ? "none" : undefined, ...props.style, width: width}}
        placeholder={props.placeholder}
        showSearch={props.showSearch}
        allowClear={props.allowClear}
        filterOption={props.filterOption||true}
        dropdownRender={props.dropdownRender}
        tagRender={props.tagRender}
        suffixIcon={props.suffixIcon ? props.suffixIcon : <NeoIcon icon={'arrowDown'} size={'s'} />}
    >
        {props.children}
    </Select>
});

const NeoSelect = InternalSelect;

NeoSelect.displayName = 'NeoSelect';

NeoSelect.defaultProps = {
};

export default NeoSelect



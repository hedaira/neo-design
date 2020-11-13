import * as React from 'react';
import classNames from 'classnames';
import {Table} from 'antd';


export interface TableProps {
    className?: string;
    onClick?: any;
    onChange?;
    getPopupContainer?;
    style?;
    columns?;
    dataSource?;
    size?;
    scroll?;
    bordered?: boolean;
    rowSelection?;
    pagination?;
    position?;
}

const prefix = 'table';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLElement>> {}

const InternalSelect: React.ForwardRefRenderFunction<unknown, TableProps> = (props) => {
    const {
        className,
    } = props;


    const classes = classNames(
        className,
        prefix
    );

    return <Table
        {...props}
        className={classes}
        style={...props.style}
        bordered={props.bordered}
        scroll={props.scroll}
        rowSelection={props.rowSelection}
        pagination={props.pagination}
    />
}

const NeoTable = React.forwardRef<unknown, TableProps>(InternalSelect) as CompoundedComponent;

NeoTable.displayName = 'NeoTable';

NeoTable.defaultProps = {
};

export default NeoTable



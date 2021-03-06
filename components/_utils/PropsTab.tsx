import React from 'react';
import {NeoTable} from "../index";

interface TabProps {
    dataSource?;
    size?;
    pagination?;
    header?;
}

export class PropsTab extends React.Component<TabProps, unknown>{

    render(){
        const columns = [
            {
                title: <div className='table__column_header'>
                    <span style={{width:'100%', textAlign: 'center'}}>Name</span>
                </div>,
                dataIndex: 'name',
            },
            {
                title: <div className='table__column_header'>
                    <span style={{width:'100%', textAlign: 'center'}}>Description</span>
                </div>,
                dataIndex: 'description'
            },
            {
                title: <div className='table__column_header'>
                    <span style={{width:'100%', textAlign: 'center'}}>Default</span>
                </div>,
                dataIndex: 'default',
            },
            {
                title: <div className='table__column_header'>
                    <span style={{width:'100%', textAlign: 'center'}}>Value</span>
                </div>,
                dataIndex: 'value',
            }]

        return <div className={'propsTab'}>
            <h2 className="title">{this.props.header ? this.props.header : 'API:'}</h2>
            <NeoTable columns={columns} dataSource={this.props.dataSource} position={'none'} pagination={this.props.pagination} {...this.props}/>
        </div>
    }
}
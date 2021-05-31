import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {Tabs} from "antd/lib";
import {Component} from "react";

const TabsTypes = tuple('card', 'editable-card', 'line');
const TabsPositions = tuple('top', 'right', 'bottom', 'left');
// const TabsSizes = tuple('large','default','small');

export declare type SizeType = 'small' | 'middle' | 'large' | undefined;
export type TabType = typeof TabsTypes[number];
export type TabPosition = typeof TabsPositions[number];
// export type TabSize = typeof TabsSizes[number];


export interface TabProps {
    style?;
    type?: TabType;
    tabPosition?: TabPosition;
    hideAdd?: boolean;
    activeKey?: string;
    className?: string;
    animated?: boolean | {inkBar:boolean, tabPane:boolean};
    renderTabBar?: (props: any, DefaultTabBar: React.ComponentClass) => React.ReactElement;
    defaultActiveKey?: string;
    size?: SizeType;
    tabBarExtraContent?: React.ReactNode;
    tabBarGutter?: number;
    tabBarStyle?: object;
    onChange?: any;
    onEdit?: (targetKey: string, action: any) => void;
    onNextClick?: any;
    onPrevClick?: any;
    onTabClick?: (key: string, event: any) => void;
    children?: React.ReactNode;
}

const prefix = 'tabs'; // для удобства чтоб понимать

export default class NeoTabs extends Component<TabProps, any> {
  static TabPane = Tabs.TabPane;

    classes = classNames(
        this.props.className,
        prefix,
        {
            [`${prefix}-${this.props.type}-${this.props.tabPosition || 'top'}`]: this.props.type,
        }
    );

    render() {
        return (
            this.props.activeKey !== undefined ?
                <Tabs
                    style={this.props.style}
                    type={this.props.type || 'line'}
                    tabPosition={this.props.tabPosition || 'top'}
                    hideAdd={this.props.hideAdd || false}
                    className={this.classes}
                    animated={this.props.animated}
                    renderTabBar={this.props.renderTabBar}
                    activeKey={this.props.activeKey}
                    defaultActiveKey={this.props.defaultActiveKey}
                    size={this.props.size}
                    tabBarExtraContent={this.props.tabBarExtraContent}
                    tabBarGutter={this.props.tabBarGutter}
                    tabBarStyle={this.props.tabBarStyle}
                    onChange={this.props.onChange}
                    onEdit={this.props.onEdit}
                    // onNextClick={this.props.onNextClick}
                    // onPrevClick={this.props.onPrevClick}
                    onTabClick={this.props.onTabClick}
                    children={this.props.children}
                />
                :
                <Tabs
                    style={this.props.style}
                    type={this.props.type || 'line'}
                    tabPosition={this.props.tabPosition || 'top'}
                    hideAdd={this.props.hideAdd || false}
                    className={this.classes}
                    animated={this.props.animated}
                    renderTabBar={this.props.renderTabBar}
                    defaultActiveKey={this.props.defaultActiveKey}
                    size={this.props.size}
                    tabBarExtraContent={this.props.tabBarExtraContent}
                    tabBarGutter={this.props.tabBarGutter}
                    tabBarStyle={this.props.tabBarStyle}
                    onChange={this.props.onChange}
                    onEdit={this.props.onEdit}
                    // onNextClick={this.props.onNextClick}
                    // onPrevClick={this.props.onPrevClick}
                    // onTabClick={this.props.onTabClick}
                    children={this.props.children}
                />
        )
    }
}
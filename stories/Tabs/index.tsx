import React, { Fragment } from 'react';
// import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoTabs} from "../../components";
import '../../components/tabs/styles/index.less'
import {PropsTab} from "../../components/_utils/PropsTab";

export default class TabsPage extends React.Component {
    state = {};
    render() {
        const propsData = [
            {name:'activeKey', default:'-', description:'Текущий активный Tab', value: 'String'},
            {name:'animated', default:'true', description:'data', value: 'true / false'},
            {name:'defaultActiveKey', default:'-', description:'Начальный активный ключ TabPane, если activeKey не установлен', value: 'String'},
            {name:'key', default:'-', description:'Ключ Tab', value: 'string'},
            {name:'tab', default:'false', description:'Границы', value: 'String | ReactNode'},
            {name:'tabPosition', default:'top', description:'Расположение вкладок', value: 'top | right | bottom | left'},
            {name:'type', default:'line', description:'Базовый стиль вкладок', value: 'line | card | editable-card'},
        ];

        return (
            <Fragment>
                <h1 className="title">Табы</h1>

                <p className="text">
                    Tabs - это компонент предназначенный для создания вкладок.
                    TabPane - это отдельная вкладка, содержащяя произвольный контент.
                </p>
                <section className="example">

                    <NeoTabs
                        activeKey={"activeKey1"}
                        type={"card"}
                        tabPosition={"top"}
                    >
                        <NeoTabs.NeoTabPane/>
                    </NeoTabs>

                    <NeoTabs
                        activeKey={"activeKey2"}
                        type={"editable-card"}
                        tabPosition={"left"}
                    >
                    </NeoTabs>

                    <NeoTabs
                        activeKey={"activeKey3"}
                        type={"line"}
                        tabPosition={"right"}
                    >
                    </NeoTabs>
    {/*                <NeoTabs*/}
    {/*                    defaultActiveKey={"2"}*/}
    {/*                    onChange={()=>{alert("changed")}}*/}
    {/*                    animated={false}*/}
    {/*                >*/}
    {/*                    <NeoTabs.NeoTabPane key={"1"} tab={"Ecore"}>Test 1</NeoTabs.NeoTabPane>*/}
    {/*                    <NeoTabs.NeoTabPane key={"2"} tab={"Resource"}>Test 2</NeoTabs.NeoTabPane>*/}
    {/*                    <NeoTabs.NeoTabPane key={"3"} tab={"Application"}>Test 3</NeoTabs.NeoTabPane>*/}
    {/*                </NeoTabs>*/}
    {/*                <SyntaxHighlighter id='table' language='jsx' style={okaidia}>*/}
    {/*                    {`*/}
    {/*import React from "react";*/}
    {/*import {NeoTabs} from "neo-design/lib";*/}
    
    {/*<NeoTabs*/}
    {/*    defaultActiveKey={"2"}*/}
    {/*    onChange={( )=>{alert("changed")}}*/}
    {/*    animated={false}*/}
    {/*>*/}
    {/*    <NeoTabs.NeoTabPane key={"1"} tab={"Ecore"}>Test 1</NeoTabs.NeoTabPane>*/}
    {/*    <NeoTabs.NeoTabPane key={"2"} tab={"Resource"}>Test 2</NeoTabs.NeoTabPane>*/}
    {/*    <NeoTabs.NeoTabPane key={"3"} tab={"Application"}>Test 3</NeoTabs.NeoTabPane>*/}
    {/*</NeoTabs>                   */}
    {/*                    `}*/}
    {/*                </SyntaxHighlighter>*/}
                </section>

                <PropsTab dataSource={propsData} size="middle" pagination={false}/>

            </Fragment>
        );
    }
}


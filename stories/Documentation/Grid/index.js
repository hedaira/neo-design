import React, { Component, Fragment } from 'react';
import {NeoButton, NeoCol, NeoRow} from "../../../components/index";
import {PropsTab} from "../../../components/_utils/PropsTab";
import showCode from "../../../components/_utils/tools";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {okaidia} from "react-syntax-highlighter/dist/esm/styles/prism";

export default class GridPageDoc extends Component {
    state = {}
    render() {
        const rowData = [{name:'justify', default:'-', description:"Расположение контента внутри блока по горизонтали", value: "'start', 'end' | 'center' | 'space-around' | 'space-between' | 'unset'"},
            {name:'align', default:'auto', description:'Расположение контента внутри блока по вертикали', value: "'top' | 'middle' | 'bottom' | 'stretch'"},
            {name:'gutter', default:'false', description:'Расстояние между сетками, может быть числом или объектом, например {xs: 8, sm: 16, md: 24}', value: 'String'}];

        const colData = [{name:'span', default:'-', description:"Количество занимаемых ячеек, 0 соответствует отображению: нет", value: "Number"},
            {name:'justify', default:'center', description:'Расположение контента внутри блока', value: "'start', 'end' | 'center' | 'space-around' | 'space-between' | 'unset'"},
            {name:'order', default:'0', description:'Порядок, используемый в режиме гибкого макета (flex)', value: 'Number'},
            {name:'offset', default:'0', description:'Количество ячеек для смещения Col слева', value: 'Number'},
            {name:'xs', default:'-', description:'<576px, а также настройка по умолчанию, может быть значением диапазона или объектом, содержащим указанные выше свойства', value: 'Number | Object'},
            {name:'sm', default:'-', description:'≥576px, может быть значением диапазона или объектом, содержащим указанные выше свойства.', value: 'Number | Object'},
            {name:'md', default:'-', description:'≥768 пикселей, может быть значением диапазона или объектом, содержащим указанные выше свойства', value: 'Number | Object'},
            {name:'lg', default:'-', description:'≥992 пикселей, может быть значением диапазона или объектом, содержащим указанные выше свойства', value: 'Number | Object'},
            {name:'xl', default:'-', description:'≥1200 пикселей, может быть значением диапазона или объектом, содержащим указанные выше свойства', value: 'Number | Object'},
            {name:'xxl', default:'-', description:'≥1600 пикселей, может быть значением диапазона или объектом, содержащим указанные выше свойства', value: 'Number | Object'},];
        return (
            <Fragment>
                <section className="example">

                <h1 className="title">Сетка и размеры</h1>

                <p className="text">
                    Мы придерживаемся 8 пиксельной сетки.<br/>
                    <b>Размерный ряд:</b>
                    <ul>
                        <li>S - 8px</li>
                        <li>M - 16px</li>
                        <li>L - 24px</li>
                        <li>Xl - 32px</li>
                    </ul>
                    Исключение 12pх, используется при необходимости.
                </p>
            </section>
            <section className="example">
                <h2 className="title">Сетка</h2>

                <p className="text">
                    <b>Параметры для размера 1440/920:</b>
                    <ul>
                        <li> 12 колонок</li>
                        <li> Width - 96</li>
                        <li> Type - center</li>
                        <li> Gutter - 16px</li>
                </ul>
                </p>
                <NeoRow gutter={16} style={{height:'350px'}}>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                </NeoRow>
                <div className='showCode'>
                    <NeoButton style={{width: '170px'}} id='TextArea' onClick={showCode}>Show Code</NeoButton>
                    <SyntaxHighlighter id='TextArea' language='jsx' style={okaidia} >
                        {`import { NeoCol, NeoRow } from "neo-design/lib";

<NeoRow gutter={16} style={{height:'350px'}}>
    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
</NeoRow>`}
                    </SyntaxHighlighter>
                </div>
            </section>
                <PropsTab dataSource={rowData} size="middle" pagination={false} header='Row:' />
                <PropsTab dataSource={colData} size="middle" pagination={false} header='Col:' />
            </Fragment>
        );
    }
}


import React, { Component, Fragment } from 'react';
import {NeoTypography, NeoButton} from "../../../components";
import {okaidia} from "react-syntax-highlighter/dist/esm/styles/prism";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import showCode from "../../../components/_utils/tools";
import NeoParagraph from "../../../components/typography/paragraph";
import {PropsTab} from "../../../components/_utils/PropsTab";

const marginBottom = '20px';
export default class TypographyPageDoc extends Component {
    state = {}
    render() {
        const data = [{name:'type', default:'capture_regular', description:'Тип'},
            {name:'copyable', default:'false', description:'Можно установить копию текста и обратный вызов, когда это объект. boolean | { text: string, onCopy: Function }'},
            {name:'code', default:'false', description:'Стиль кода'},
            {name:'delete', default:'false', description:'Зачеркивание'},
            {name:'disabled', default:'false', description:'Disabled'},
            {name:'ellipsis', default:'false', description:'Отображать многоточие при переполнении текста. Можно настраивать строки и расширять с помощью объекта. boolean | { rows: number, expandable: boolean, onExpand: Function }'},
            {name:'mark', default:'false', description:'Выделение'},
            {name:'underline', default:'false', description:'Подчеркивание'},
            {name:'strong', default:'false', description:'Выделение жирным'},
            {name:'required', default:'false', description:'Пометить звездочкой'},
        ];
        return (
            <Fragment>
                <NeoTypography type={'h1_regular'} className="title">Типографика и текст в интерфейсах</NeoTypography>

                <h2 className="title">Как использовать</h2>
                <SyntaxHighlighter language='jsx' style={okaidia} >
                    {`import NeoTypography from 'neo-design/lib';`}
                </SyntaxHighlighter>

                <p className="text">
                    <NeoTypography type={'h3_medium'}>NeoParagraph</NeoTypography>
                </p>
                <section className="example">
                    <NeoParagraph
                        key={1}
                        type={'h2_regular'}
                        className={'cssClass'}
                        copyable={false}    //Копия. Можно установить копию текста и обратный вызов, когда это объект. boolean | { text: string, onCopy: Function }
                        code={true}         //Стиль кода
                        delete={false}      //Зачеркивание
                        disabled={false}    //Disabled
                        ellipsis={false}    //Отображать многоточие при переполнении текста. Можно настраивать строки и расширять с помощью объекта. boolean | { rows: number, expandable: boolean, onExpand: Function }
                        mark={false}        //Выделение
                        underline={true}    //Подчеркивание
                        strong={true}       //Выделение жирным
                        required={true}     //Пометить звездочкой
                    >
                        NeoParagraph
                    </NeoParagraph>
                    <div className='showCode'>
                        <NeoButton  id='typographyHover' style={{width: '170px'}} onClick={showCode}>Show code</NeoButton>
                        <SyntaxHighlighter id='typographyHover' language='jsx' style={okaidia} >
                            {`import {NeoParagraph} from "neo-design/lib";

<NeoParagraph
    key={1}
    type={'h2_regular'}
    className={'cssClass'}
    copyable={false}    //Копия. Можно установить копию текста и обратный вызов, когда это объект. boolean | { text: string, onCopy: Function }
    code={true}         //Стиль кода
    delete={false}      //Зачеркивание
    disabled={false}    //Disabled
    ellipsis={false}    //Отображать многоточие при переполнении текста. Можно настраивать строки и расширять с помощью объекта. boolean | { rows: number, expandable: boolean, onExpand: Function }
    mark={false}        //Выделение
    underline={true}    //Подчеркивание
    strong={true}       //Выделение жирным
    required={true}     //Пометить звездочкой
>
    NeoParagraph
</NeoParagraph>`}
                        </SyntaxHighlighter>
                    </div>
                </section>

                <PropsTab dataSource={data} size="middle" pagination={false}/>

            </Fragment>
        );
    }
}


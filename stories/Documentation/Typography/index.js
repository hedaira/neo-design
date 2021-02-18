import React, { Component, Fragment } from 'react';
import {NeoCol, NeoRow, NeoTypography, NeoButton} from "../../../components";
import {okaidia} from "react-syntax-highlighter/dist/esm/styles/prism";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import showCode from "../../../components/_utils/tools";
import {PropsTab} from "../../../components/_utils/PropsTab";

const marginBottom = '20px';
export default class TypographyPageDoc extends Component {
    state = {}
    render() {
        const data = [{name:'type', default:'capture_regular', description:'Тип', value: "'h1_regular' | 'h2_medium' | 'h2_regular' | 'h3_medium' | 'h3_regular' | 'h4_medium' | 'h4_regular' | 'h4_light' | 'body_medium' | 'body_regular' | 'body_light' | 'body_link' | 'body_bold' | 'capture_regular' | 'capture_medium' | 'capture_link' | 'capture_light'"},
            {name:'copyable', default:'false', description:'Можно установить копию текста и обратный вызов, когда это объект', value: 'true / false | { text: string, onCopy: Function }'},
            {name:'code', default:'false', description:'Стиль кода', value: 'true / false'},
            {name:'delete', default:'false', description:'Зачеркивание', value: 'true / false'},
            {name:'disabled', default:'false', description:'Disabled', value: 'true / false'},
            {name:'ellipsis', default:'false', description:'Отображать многоточие при переполнении текста. Можно настраивать строки и расширять с помощью объекта', value: 'boolean | { rows: number, expandable: boolean, onExpand: Function }'},
            {name:'mark', default:'false', description:'Выделение', value: 'true / false'},
            {name:'underline', default:'false', description:'Подчеркивание', value: 'true / false'},
            {name:'strong', default:'false', description:'Выделение жирным', value: 'true / false'},
            {name:'required', default:'false', description:'Пометить звездочкой', value: 'true / false'}];
        return (
            <Fragment>
                <NeoTypography type={'h1_regular'} className="title">Типографика и текст в интерфейсах</NeoTypography>

                <h2 className="title">Как использовать</h2>
                <SyntaxHighlighter language='jsx' style={okaidia} >
                    {`import NeoTypography from 'neo-design/lib';`}
                </SyntaxHighlighter>

                <section className="example example_typography">
                    <p className="text">
                        <NeoTypography type={'h3_medium'}>Шрифт -  Roboto</NeoTypography>
                    </p>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'h1_regular'}>56px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h1_regular'}>H1</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h1_regular'}>Text</NeoTypography>
                        </NeoCol>

                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'h2_medium'}>32px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h2_medium'}>H2/medium</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h2_medium'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'h2_regular'}>32px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h2_regular'}>H2/regular</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h2_regular'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'h3_medium'}>20px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h3_medium'}>H3/medium</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h3_medium'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'h3_regular'}>20px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h3_regular'}>H3/regular</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h3_regular'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4_medium'}>16px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4_medium'}>H4/medium</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4_medium'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4_regular'}>16px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4_regular'}>H4/regular</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4_regular'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4_light'}>16px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4_light'}>H4/light</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4_light'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'body_medium'}>14px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body_medium'}>body/medium</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body_medium'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'body_regular'}>14px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body_regular'}>body/regular</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body_regular'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'body_light'}>14px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body_light'}>body/light</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body_light'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'body_link'}>14px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body_link'}>body/link</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body_link'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'body_bold'}>14px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body_bold'}>body/bold</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body_bold'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture_regular'}>12px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture_regular'}>capture/regular</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture_regular'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture_medium'}>12px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture_medium'}>capture/medium</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture_medium'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture_link'}>12px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture_link'}>capture/link</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture_link'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture_light'}>12px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture_light'}>capture/light</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture_light'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>

                    <div className='showCode'>
                        <NeoButton  id='typographyAll' style={{width: '170px'}} onClick={showCode}>Show code</NeoButton>
                        <SyntaxHighlighter id='typographyAll' language='jsx' style={okaidia} >
                            {`import {NeoCol, NeoRow, NeoTypography} from "neo-design/lib";
const marginBottom = '20px';

<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'h1_regular'}>56px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h1_regular'}>H1</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h1_regular'}>Text</NeoTypography>
    </NeoCol>

</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'h2_medium'}>32px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h2_medium'}>H2/medium</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h2_medium'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'h2_regular'}>32px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h2_regular'}>H2/regular</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h2_regular'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'h3_medium'}>20px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h3_medium'}>H3/medium</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h3_medium'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'h3_regular'}>20px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h3_regular'}>H3/regular</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h3_regular'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'h4_medium'}>16px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h4_medium'}>H4/medium</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h4_medium'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'h4_regular'}>16px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h4_regular'}>H4/regular</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h4_regular'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'h4_light'}>16px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h4_light'}>H4/light</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h4_light'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'body_medium'}>14px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body_medium'}>body/medium</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body_medium'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'body_regular'}>14px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body_regular'}>body/regular</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body_regular'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'body_light'}>14px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body_light'}>body/light</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body_light'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'body_link'}>14px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body_link'}>body/link</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body_link'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'body_bold'}>14px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body_bold'}>body/bold</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body_bold'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'capture_regular'}>12px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'capture_regular'}>capture/regular</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'capture_regular'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'capture_medium'}>12px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'capture_medium'}>capture/medium</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'capture_medium'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'capture_link'}>12px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'capture_link'}>capture/link</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'capture_link'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'capture_light'}>12px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'capture_light'}>capture/light</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'capture_light'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>`}
                        </SyntaxHighlighter>
                    </div>
                </section>
                <p className="text">
                    <NeoTypography type={'h3_medium'}>Hover</NeoTypography>
                </p>
                <section className="example">
                    <p className="text">
                        <NeoTypography type={'h3_medium'} hoverTextDecoration={'underline'} style={{cursor: 'pointer'}}>Underline</NeoTypography>
                    </p>
                    <p className="text">
                        <NeoTypography type={'h3_medium'} hoverTextDecoration={'line-through'} style={{cursor: 'pointer'}}>Line-through</NeoTypography>
                    </p>
                    <div className='showCode'>
                        <NeoButton  id='typographyHover' style={{width: '170px'}} onClick={showCode}>Show code</NeoButton>
                        <SyntaxHighlighter id='typographyHover' language='jsx' style={okaidia} >
                            {`import {NeoTypography} from "neo-design/lib";

<NeoTypography type={'h3_medium'} hoverTextDecoration={'underline'} style={{cursor: 'pointer'}}>Underline</NeoTypography>
<NeoTypography type={'h3_medium'} hoverTextDecoration={'line-through'} style={{cursor: 'pointer'}}>Line-through</NeoTypography>`}
                        </SyntaxHighlighter>
                    </div>
                </section>

                <PropsTab dataSource={data} size="middle" pagination={false}/>

            </Fragment>
        );
    }
}


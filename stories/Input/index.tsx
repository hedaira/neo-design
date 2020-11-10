import * as React from 'react';

import {NeoInput, NeoButton} from '../../components/index';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import showCode from "../../components/_utils/tools";
import {PropsTab} from "../../components/_utils/PropsTab";

class InputPage extends React.Component {
    render() {

        const data = [{name:'type', default:'-', description:"Тип('search', 'textArea', 'checkbox', 'radio', 'password')"},
            {name:'width', default:'auto', description:'Ширина'},
            {name:'hidden', default:'true/false', description:'Кнопка вторичного призыва к действию (Secondary)'},
            {name:'disabled', default:'-', description:'Кнопка, запрещающая выполнение действия'},
            {name:'onSearch', default:'', description:'()=>{}'},
            {name:'placeholder', default:'-', description:'Placeholder'},
            {name:'allowClear', default:'true/false', description:'Очистить поле(иконка)'},
            {name:'isIcon', default:'-', description:'Применяется, если кнопка содержит в себе иконку'}];

        return (
            <React.Fragment>
                <h1 className="title">Inputs</h1>



                <section className="example">

                    <div>
                        <h4>Default input</h4>
                        <br />
                        <NeoInput width={"250px"} title={"test"} />
                    </div>
                    <div className='showCode'>
                        <NeoButton style={{width: '170px'}} id='DefaultInput' onClick={showCode}>Show Code</NeoButton>
                    <SyntaxHighlighter id='DefaultInput' language='jsx' style={okaidia} >
                        {`import { NeoInput } from "neo-design/lib";

<NeoInput type={'default'} width={"250px"} />`}
                    </SyntaxHighlighter>
                    </div>
                    <br/>

                    <div>
                        <h4>Default with text input</h4>
                        <br />
                        <NeoInput width={"250px"} placeholder={"Text"} title={"test"} />
                    </div>
                    <div className='showCode'>
                        <NeoButton style={{width: '170px'}} id='DefaultWithText' onClick={showCode}>Show Code</NeoButton>
                        <SyntaxHighlighter id='DefaultWithText' language='jsx' style={okaidia} >
                            {`import { NeoInput } from "neo-design/lib";

<NeoInput width={"250px"} value={"Text"} title={"test"} />`}
                        </SyntaxHighlighter>
                    </div>
                    <br/>

                    <div>
                        <h4>Search input</h4>
                        <br />
                        <NeoInput type={'search'} className={'inputttt'} width={"250px"} />
                    </div>
                    <div className='showCode'>
                        <NeoButton style={{width: '170px'}} id='Search' onClick={showCode}>Show Code</NeoButton>
                    <SyntaxHighlighter id='Search' language='jsx' style={okaidia} >
                        {`import { NeoInput } from "neo-design/lib";

<NeoInput type={'search'} width={"250px"} />`}
                    </SyntaxHighlighter>
                    </div>
                    <br/>

                    <div>
                        <h4>Clear input</h4>
                        <br />
                        <NeoInput width={'250px'} allowClear />
                    </div>
                    <div className='showCode'>
                        <NeoButton style={{width: '170px'}} id='Clear' onClick={showCode}>Show Code</NeoButton>
                    <SyntaxHighlighter id='Clear' language='jsx' style={okaidia} >
                        {`import { NeoInput } from "neo-design/lib";

<NeoInput type={'default'} width={'250px'} allowClear />`}
                    </SyntaxHighlighter>
                    </div>


                    <br/>
                    <div>
                        <h4>Text Area</h4>
                        <NeoInput type={'textArea'} width={'250px'} />
                    </div>
                    <div className='showCode'>
                        <NeoButton style={{width: '170px'}} id='TextArea' onClick={showCode}>Show Code</NeoButton>
                    <SyntaxHighlighter id='TextArea' language='jsx' style={okaidia} >
                        {`import { NeoInput } from "neo-design/lib";

<NeoInput type={'textArea'} width={'250px'} />`}
                    </SyntaxHighlighter>
                    </div>
                </section>

                <PropsTab dataSource={data} size="middle" pagination={false}/>

            </React.Fragment>
        );
    }
}

export default InputPage;

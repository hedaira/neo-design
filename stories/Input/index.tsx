import * as React from 'react';

import {NeoInput, NeoSelect, NeoDatePicker, NeoButton} from '../../components/index';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoIcon} from "neo-icon/lib";
import showCode from "../../components/_utils/tools";
// import {PropsTab} from "../../../utils/helpers";

class InputPage extends React.Component {
    render() {

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


                {/*<PropsTab Props={*/}
                {/*    [*/}
                {/*        {name:'width', default:'100%', description:'Ширина'},*/}

                {/*    ]*/}
                {/*}/>*/}
            </React.Fragment>
        );
    }
}

export default InputPage;

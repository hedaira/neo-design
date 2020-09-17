import * as React from 'react';

import { NeoInput, NeoSelect, NeoDatePicker } from '../../components/index';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoIcon} from "neo-icon/lib";
// import {PropsTab} from "../../../utils/helpers";

class InputPage extends React.Component {
    render() {

        return (
            <React.Fragment>
                <h1 className="title">Формы ввода</h1>

                <h2 className="title">Примеры:</h2>
                <section className="example">
                    <div>
                        <h3 className="ex-title">Checkbox</h3>
                        <br />
                        <NeoInput type={'checkbox'}>Checkbox 1</NeoInput>
                        <NeoInput type={'checkbox'}>Checkbox 2</NeoInput>
                        <NeoInput type={'checkbox'}>Checkbox 3</NeoInput>
                    </div>
                    <SyntaxHighlighter language='jsx' style={okaidia} >
                        {`import { NeoInput } from "neo-design/lib";

<NeoInput type={'checkbox'}>Checkbox 1</NeoInput>
<NeoInput type={'checkbox'}>Checkbox 2</NeoInput>
<NeoInput type={'checkbox'}>Checkbox 3</NeoInput>`}
                    </SyntaxHighlighter>
                </section>

                <section className="example">
                    <h3 className="ex-title">Radio</h3>
                    <div>
                        <h4>Radio group</h4>
                        <br />
                        <NeoInput type={'radio'} name={'radio'}>Radio 1</NeoInput>
                        <NeoInput type={'radio'} name={'radio'}>Radio 2</NeoInput>
                        <NeoInput type={'radio'} name={'radio'}>Radio 3</NeoInput>
                    </div>
                    <SyntaxHighlighter language='jsx' style={okaidia} >
                        {`import { NeoInput } from "neo-design/lib";

<NeoInput type={'radio'} name={'radio'}>Radio 1</NeoInput>
<NeoInput type={'radio'} name={'radio'}>Radio 2</NeoInput>
<NeoInput type={'radio'} name={'radio'}>Radio 3</NeoInput>`}
                    </SyntaxHighlighter>
                </section>

                <section className="example">
                    <h3 className="ex-title">Input</h3>

                    <div>
                        <h4>Basic input</h4>
                        <br />
                        <NeoInput width={"250px"} title={"test"} />
                    </div>
                    <SyntaxHighlighter language='jsx' style={okaidia} >
                        {`import { NeoInput } from "neo-design/lib";

<NeoInput type={'default'} width={"250px"} />`}
                    </SyntaxHighlighter>
                    <br/>

                    <div>
                        <h4>Search input</h4>
                        <br />
                        <NeoInput type={'search'} width={"250px"} />
                    </div>
                    <SyntaxHighlighter language='jsx' style={okaidia} >
                        {`import { NeoInput } from "neo-design/lib";

<NeoInput type={'search'} width={"250px"} />`}
                    </SyntaxHighlighter>
                    <br/>

                    <div>
                        <h4>Clear input</h4>
                        <br />
                        <NeoInput width={'250px'} allowClear />
                    </div>
                    <SyntaxHighlighter language='jsx' style={okaidia} >
                        {`import { NeoInput } from "neo-design/lib";

<NeoInput type={'default'} width={'250px'} allowClear />`}
                    </SyntaxHighlighter>
                </section>

                <section className="example">
                    <h3 className="ex-title">Text Area</h3>
                    <br />
                    <div>
                        <NeoInput type={'textArea'} width={'250px'} />
                    </div>
                    <SyntaxHighlighter language='jsx' style={okaidia} >
                        {`import { NeoInput } from "neo-design/lib";

<NeoInput type={'textArea'} width={'250px'} />`}
                    </SyntaxHighlighter>
                </section>

                <section className="example">
                    <h3 className="ex-title">Date Picker</h3>

                    <div>
                       <NeoDatePicker/>
                    </div>
                    <SyntaxHighlighter language='jsx' style={okaidia} >
                        {`import { NXDatePicker } from "neo-design/lib";

<NeoDatePicker/>}/>`}
                    </SyntaxHighlighter>
                </section>

                <section className="example">
                    <h3 className="ex-title">Select</h3>

                    <h4>Basic</h4>
                    <div>
                        <NeoSelect defaultValue={'lucy'}>
                            <option value="lucy">Lucy</option>
                            <option value="jack">Jack</option>
                            <option value="john">John</option>
                        </NeoSelect>
                    </div>
                    <SyntaxHighlighter language='jsx' style={okaidia} >
                        {`import { NeoSelect } from "neo-design/lib";

<NeoSelect defaultValue="lucy">
    <option value="lucy">Lucy</option>
    <option value="jack">Jack</option>
    <option value="john">John</option>
</NeoSelect>`}
                    </SyntaxHighlighter>
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

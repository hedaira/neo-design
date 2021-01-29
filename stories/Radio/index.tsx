import React, {Fragment} from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoButton, NeoInput, NeoRadioGroup} from "../../components";
import showCode from "../../components/_utils/tools";
import {PropsTab} from "../../components/_utils/PropsTab";

export default class RadioPage extends React.Component {
    state = {
        value: 1
    }


    render() {
        const data = [{name:'type', default:'-', description:"Тип", value: "'search' | 'textArea' | 'checkbox' | 'radio' | 'password'"},
            {name:'disabled', default:'false', description:'disabled', value: 'true / false'},
            {name:'checked', default:'false', description:'checked', value: 'true / false'},
            {name:'defaultChecked', default:'false', description:'Выбрано по умолчанию', value: 'true / false'},
            {name:'onChange', default:'-', description:'onChange', value: 'function(e)'}];

        return (
            <Fragment>
                <h1 className="title">Radio</h1>

                <section className="example">
                    <div>
                        <h4>Radio button</h4>
                        <br />
                            <NeoInput type={'radio'}>Radio button</NeoInput>
                    </div>
                    <div className='showCode'>
                        <NeoButton style={{width: '170px'}} id='RadioButton' onClick={showCode}>Show Code</NeoButton>
                        <SyntaxHighlighter id='RadioButton' language='jsx' style={okaidia} >
                            {`import { NeoInput } from "neo-design/lib";

<NeoInput type={'radio'}>Radio button</NeoInput>
`}
                        </SyntaxHighlighter>
                    </div>
                </section>

                <section className="example">
                    <div>
                        <h4>Radio group</h4>
                        <br />
                        <NeoRadioGroup value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})}>
                            <NeoInput type={'radio'} value={1}>Radio 1</NeoInput>
                            <NeoInput type={'radio'} value={2}>Radio 2</NeoInput>
                            <NeoInput type={'radio'} value={3}>Radio 3</NeoInput>
                        </NeoRadioGroup>
                    </div>
                    <div className='showCode'>
                        <NeoButton style={{width: '170px'}} id='Radio' onClick={showCode}>Show Code</NeoButton>
                    <SyntaxHighlighter id='Radio' language='jsx' style={okaidia} >
                        {`import { NeoRadioGroup, NeoInput } from "neo-design/lib";

state = {
    value: 1
}

<NeoRadioGroup value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})}>
    <NeoInput type={'radio'} value={1}>Radio 1</NeoInput>
    <NeoInput type={'radio'} value={2}>Radio 2</NeoInput>
    <NeoInput type={'radio'} value={3}>Radio 3</NeoInput>
</NeoRadioGroup>`}
                    </SyntaxHighlighter>
                    </div>
                </section>
                <PropsTab dataSource={data} size="middle" pagination={false}/>

            </Fragment>
        );
    }
}


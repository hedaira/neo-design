import React, {Fragment} from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoButton, NeoInput} from "../../components";
import showCode from "../../components/_utils/tools";
import {PropsTab} from "../../components/_utils/PropsTab";

export default class RadioPage extends React.Component {
    state = {}


    render() {
        const data = [{name:'type', default:'-', description:"Тип('search', 'textArea', 'checkbox', 'radio', 'password')"}];

        return (
            <Fragment>
                <h1 className="title">Radio</h1>

                <section className="example">
                    <div>
                        <h4>Radio group</h4>
                        <br />
                        <NeoInput type={'radio'} name={'radio'}>Radio 1</NeoInput>
                        <NeoInput type={'radio'} name={'radio'}>Radio 2</NeoInput>
                        <NeoInput type={'radio'} name={'radio'}>Radio 3</NeoInput>
                    </div>
                    <div className='showCode'>
                        <NeoButton style={{width: '170px'}} id='Radio' onClick={showCode}>Show Code</NeoButton>
                    <SyntaxHighlighter id='Radio' language='jsx' style={okaidia} >
                        {`import { NeoInput } from "neo-design/lib";

<NeoInput type={'radio'} name={'radio'}>Radio 1</NeoInput>
<NeoInput type={'radio'} name={'radio'}>Radio 2</NeoInput>
<NeoInput type={'radio'} name={'radio'}>Radio 3</NeoInput>`}
                    </SyntaxHighlighter>
                    </div>
                </section>
                <PropsTab dataSource={data} size="middle" pagination={false}/>

            </Fragment>
        );
    }
}


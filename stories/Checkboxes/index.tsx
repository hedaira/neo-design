import React, {Fragment} from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoButton, NeoHint, NeoInput} from "../../components";
import showCode from "../../components/_utils/tools";

export default class CheckboxesPage extends React.Component {
    state = {}


    render() {
        return (
            <Fragment>
                <h1 className="title">Checkboxes</h1>

                <section className="example">
                    <div>
                        <h3 className="ex-title">Checkbox</h3>
                        <br />
                        <NeoInput type={'checkbox'}>Checkbox 1</NeoInput>
                        <NeoInput type={'checkbox'}>Checkbox 2</NeoInput>
                        <NeoInput type={'checkbox'}>Checkbox 3</NeoInput>
                    </div>
                    <div className='showCode'>
                        <NeoButton style={{width: '170px'}} id='Checkboxes' onClick={showCode}>Show Code</NeoButton>
                    <SyntaxHighlighter id='Checkboxes' language='jsx' style={okaidia} >
                        {`import { NeoInput } from "neo-design/lib";

<NeoInput type={'checkbox'}>Checkbox 1</NeoInput>
<NeoInput type={'checkbox'}>Checkbox 2</NeoInput>
<NeoInput type={'checkbox'}>Checkbox 3</NeoInput>`}
                    </SyntaxHighlighter>

                    </div>
                </section>
            </Fragment>
        );
    }
}


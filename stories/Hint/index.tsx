import React, {Fragment} from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoButton, NeoHint} from "../../components";
import showCode from "../../components/_utils/tools";

export default class HintPage extends React.Component {
    state = {}


    render() {
        return (
            <Fragment>
                <h1 className="title">Hint</h1>

                <section className="example">
                    <div className='flex-column'>
                        <h3 className="ex-title">Hint</h3><br/>
                        <NeoHint title='Hint example'>Hover me</NeoHint>
                        <div className='showCode'>
                            <NeoButton style={{width: '170px'}} id='Hint' onClick={showCode}>Show Code</NeoButton>
                        <SyntaxHighlighter id='Hint' language='jsx' style={okaidia} >
                            {`import { NeoHint } from "neo-design/lib";

<NeoHint title='Hint example'>Hover me</NeoHint>
`}
                        </SyntaxHighlighter>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}


import React, { Component, Fragment } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoHint} from '../../components/'

export default class ComponentsPage extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <h1 className="title">Components</h1>

                <section className="example">
                    <div className='flex-column'>
                        <h3 className="ex-title">Hint</h3><br/>
                        <NeoHint title='Hint example'>Hover me</NeoHint>
                        <SyntaxHighlighter language='jsx' style={okaidia} >
                            {`import { NeoHint } from "neo-design";

<NeoHint title='Hint example'>Hover me</NeoHint>
`}
                        </SyntaxHighlighter>
                    </div>
                </section>

            </Fragment>
        );
    }
}


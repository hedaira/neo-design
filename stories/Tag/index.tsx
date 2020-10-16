import * as React from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoButton, NeoTag} from '../../components/index'
import showCode from "../../components/_utils/tools";
import {Fragment} from "react";

export default class TagPage extends React.Component {
  render() {
    return (
        <Fragment>
            <h1 className="title">Теги</h1>

            <h2 className="title">Примеры:</h2>

            <section className="example">
                <div>
                <NeoTag closable={true}>closable</NeoTag>
                <NeoTag>not closable</NeoTag>
                </div>
                <div className='showCode'>
                    <NeoButton style={{width: '170px'}} id='Tag' onClick={showCode}>Show Code</NeoButton>
                <SyntaxHighlighter id='Tag' language='jsx' style={okaidia}>
                    {`
      <NeoTag closable={true}>closable</NeoTag>
      <NeoTag>not closable</NeoTag>     
                        `}
                </SyntaxHighlighter>
                </div>
            </section>
        </Fragment>
    );
  }
}


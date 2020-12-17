import React, {Fragment} from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoButton, NeoHint} from "../../components";
import showCode from "../../components/_utils/tools";
import {PropsTab} from "../../components/_utils/PropsTab";

export default class HintPage extends React.Component {
    state = {}


    render() {
        const data = [{name:'title', default:'-', description:'Всплывающее сообщение при наведении'},
            {name:'placement', default:'bottomLeft', description:'Позиционирование всплывающего сообщения: top, left, right, bottom, topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom'},
            {name:'width', default:'250px', description:'Максимальная ширина всплывающего сообщения при наведении'}];
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
                <PropsTab dataSource={data} size="middle" pagination={false}/>

            </Fragment>
        );
    }
}


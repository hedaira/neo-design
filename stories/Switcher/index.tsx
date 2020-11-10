import React, {Fragment} from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoButton, NeoSwitch} from "../../components";
import showCode from "../../components/_utils/tools";
import {PropsTab} from "../../components/_utils/PropsTab";

export default class SwitcherPage extends React.Component {
    state = {}

    render() {
        const data = [{name:'disabled', default:'-', description:'Disabled'}];
        return (
            <Fragment>
                <h1 className="title">Switcher</h1>

                <section className="example">
                    <div className='flex-column'>
                        <h3 className="ex-title">Switcher</h3><br/>
                        <NeoSwitch/>
                        <div className='showCode'>
                            <NeoButton style={{width: '170px'}} id='Switcher' onClick={showCode}>Show Code</NeoButton>
                        <SyntaxHighlighter id='Switcher' language='jsx' style={okaidia} >
                            {`import { NeoSwitch } from "neo-design/lib";

 <NeoSwitch/>
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


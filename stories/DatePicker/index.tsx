import React, { Component, Fragment } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoButton, NeoAlert, NeoDatePicker} from "../../components";
import showCode from "../../components/_utils/tools";

export default class DatePickerPage extends React.Component {
    state = {}


    render() {
        return (
            <Fragment>
                <h1 className="title">DatePicker</h1>

                <section className="example">
                    <h3 className="ex-title">Date Picker</h3>

                    <div>
                        <NeoDatePicker/>
                    </div>
                    <div className='showCode'>
                    <NeoButton style={{width: '170px'}} id='DatePicker' onClick={showCode}>Show Code</NeoButton>
                    <SyntaxHighlighter id='DatePicker' language='jsx' style={okaidia} >
                        {`import { NXDatePicker } from "neo-design/lib";

<NeoDatePicker/>}/>`}
                    </SyntaxHighlighter>
                    </div>
                </section>

            </Fragment>
        );
    }
}


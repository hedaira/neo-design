import React, { Fragment } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoButton, NeoDatePicker} from "../../components";
import showCode from "../../components/_utils/tools";
import {PropsTab} from "../../components/_utils/PropsTab";

export default class DatePickerPage extends React.Component {
    state = {}


    render() {
        const data = [{name:'defaultValue', default:'-', description:'Установка даты по умолчанию', value: 'moment'},
            {name:'width', default:'auto', description:'Ширина', value: 'String'},
            {name:'title', default:'false', description:'Заголовок', value: 'String'},
            {name:'titleOrientation', default:'false', description:'Ориентация заголовка', value: '"Top" | "Right" | "Bottom" | "Left"'},
            {name:'format', default:'YYYY-MM-DD', description:'Формат даты', value: 'String'},
            {name:'disabled', default:'false', description:'disabled', value: 'true / false'},
            {name:'showTime', default:'-', description:'Для обеспечения дополнительного выбора времени', value: 'true / false | object'},
            {name:'onChange', default:'-', description:'onChane', value: 'function(e)'},
            {name:'allowClear', default:'false', description:'Показывать кнопку очистки', value: 'true / false'},
            {name:'getCalendarContainer', default: '-', description:"Контейнер в котором будет отображаться календарь NeoDatePicker'а", value: 'function(e)'}
            ];
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
                        {`import { NeoDatePicker } from "neo-design/lib";

<NeoDatePicker/>`}
                    </SyntaxHighlighter>
                    </div>
                    <br/>
                    <h3 className="ex-title">Date Picker with title</h3>

                    <div>
                        <NeoDatePicker width={"185px"} title={"DateTime"} titleOrientation={"Top"}/>
                        <br/>
                        <br/>
                        <br/>
                        <NeoDatePicker width={"185px"} title={"DateTime"} titleOrientation={"Left"}/>
                    </div>
                    <div className='showCode'>
                        <NeoButton style={{width: '170px'}} id='DatePickerTitle' onClick={showCode}>Show Code</NeoButton>
                        <SyntaxHighlighter id='DatePickerTitle' language='jsx' style={okaidia} >
                            {`import { NeoDatePicker } from "neo-design/lib";

<NeoDatePicker width={"185px"} title={"DateTime"} titleOrientation={"Top"}/>
<NeoDatePicker width={"185px"} title={"DateTime"} titleOrientation={"Left"}/>`}
                        </SyntaxHighlighter>
                    </div>
                </section>
                <PropsTab dataSource={data} size="middle" pagination={false}/>

            </Fragment>
        );
    }
}


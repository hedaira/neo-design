import React, { Fragment } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoAlert} from "../../components";
import {PropsTab} from "../../components/_utils/PropsTab";

export default class AlertPage extends React.Component {
    state = {}


    render() {
        const data = [{name:'type', default:'-', description:"Тип Alert'а", value: "'success' | 'info' | 'warning' | 'error'"},
            {name:'message', default:'-', description:'Основное сообщение(заголовок)', value: 'String'},
            {name:'description', default:'-', description:'Описание', value: 'String'},
            {name:'width', default:'370px', description:'Ширина', value: 'String'},
            {name:'closable', default:'true', description:'Добавляет возможность закрыть окно', value: 'true / false'}]
        return (
            <Fragment>
                <h1 className="title">Алерт</h1>

                <p className="text">
                    Алерт показывает короткое и важное сообщение для того, чтобы привлечь внимание пользователя, не отвлекая его от задачи. Сообщение призвано помочь пользователю не допустить ошибку, устранить уже имеющуюся или о чем-то проинформировать важном, но не влияющем на работу приложения в целом.
                </p>
                <h2 className="title">Как использовать</h2>
                <SyntaxHighlighter language='jsx' style={okaidia} >
                    {`import { NeoAlert } from "neo-design/lib";`}
                </SyntaxHighlighter>

                <h2 className="title">Примеры:</h2>
                <section className="example space-between">
                    <div>
                        <h3 className="ex-title">Basic</h3>
                        <br/>
                        <NeoAlert message={'Success Text'} width={'233px'}/>
                        <SyntaxHighlighter language='jsx' style={okaidia} >
                            {`<NeoAlert message={'Success Text'} width={'233px'}/>`}
                        </SyntaxHighlighter>
                    </div>
                </section>

                <section className="example space-between">
                    <div>
                        <h3 className="ex-title">Error</h3>
                        <br/>
                        <NeoAlert type={'error'} message={'Error'} description={'This is an error alert'}/>
                        <SyntaxHighlighter language='jsx' style={okaidia} >
                            {`<NeoAlert type={'error'} message={'Error'} description={'This is an error alert'}/>`}
                        </SyntaxHighlighter>
                    </div>
                    <div className='comp-descr'>
                        <p className='text'>
                            Alert error сообщает пользователю о какой-то критической ошибке, которая уже произошла и влияет на работу приложения или не дает пройти сценарий.                </p>
                    </div>
                </section>

                <section className="example space-between">
                    <div>
                        <h3 className="ex-title">Info</h3>
                        <br/>
                        <NeoAlert type={'info'} message={'Info'}  description={'This is an info alert'}/>

                        <SyntaxHighlighter language='jsx' style={okaidia} >
                            {`<NeoAlert type={'info'} message={'Info'}  description={'This is an info alert'}/>`}
                        </SyntaxHighlighter>
                    </div>
                    <div className='comp-descr'>
                        <p className='text'>
                            Alert info информационные алерты, которые не сообщают об ошибках и возможных проблемах, а несут строго информационный характе. Это может быть информация о скором обновлении или добавлении нового функционала, все, что может быть полезно.
                        </p>
                    </div>
                </section>

                <section className="example space-between">
                    <div>
                        <h3 className="ex-title">Warning</h3>
                        <br/>
                        <NeoAlert type={'warning'} message={'Warning'}  description={'This is a warning alert'}/>

                        <SyntaxHighlighter language='jsx' style={okaidia} >
                            {`<NeoAlert type={'warning'} message={'Warning'}  description={'This is a warning alert'}/>`}
                        </SyntaxHighlighter>
                    </div>
                    <div className='comp-descr'>
                        <p className='text'>
                            Alert warning предупреждает пользователя об опасном действии, которое может привести к ошибке или остановки приложения.
                        </p>
                    </div>
                </section>
                <section className="example space-between">
                    <div>
                        <h3 className="ex-title">Success</h3>
                        <br/>
                        <NeoAlert type={'success'} message={'Success'} description={'This is a success alert'} />

                        <SyntaxHighlighter language='jsx' style={okaidia} >
                            {`<NeoAlert type={'success'} message={'Success'} description={'This is a success alert'}/>`}
                        </SyntaxHighlighter>
                    </div>
                    <div className='comp-descr'>
                        <p className='text'>
                            Alert success содержат положительную информацию, могут сообщать пользователю об успешном устранении ошибки.
                        </p>
                    </div>
                </section>
                <PropsTab dataSource={data} size="middle" pagination={false}/>

            </Fragment>
        );
    }
}


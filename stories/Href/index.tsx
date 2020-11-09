import React, { Fragment } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoHref} from "../../components";
import {PropsTab} from "../../components/_utils/PropsTab";

export default class HrefPage extends React.Component {
    render() {
        const data = [{name:'type', default:'-', description:'Тип'},
            {name:'hidden', default:'false', description:'Видимость оповещение'},
            {name:'dangerouslySetInnerHTML', default:'-', description:"__html: 'Пример'"}];

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
                        <NeoHref type={'success'} hidden={false} dangerouslySetInnerHTML={{__html: 'Первый &middot; Второй'}} />
                        <br/>
                        <NeoHref type={'warning'} hidden={false} dangerouslySetInnerHTML={{__html: 'Первый &middot; Второй'}} />
                        <br/>
                        <NeoHref type={'error'} hidden={false} dangerouslySetInnerHTML={{__html: 'Первый &middot; Второй'}} />
                        <SyntaxHighlighter language='jsx' style={okaidia} >
                            {`import {NeoHref} from 'neo-design/lib';

<NeoHref type={'success'} hidden={false} dangerouslySetInnerHTML={{__html: 'Первый &middot; Второй'}} />
<NeoHref type={'warning'} hidden={false} dangerouslySetInnerHTML={{__html: 'Первый &middot; Второй'}} />
<NeoHref type={'error'} hidden={false} dangerouslySetInnerHTML={{__html: 'Первый &middot; Второй'}} />`}
                        </SyntaxHighlighter>
                    </div>
                </section>
                <PropsTab dataSource={data} size="middle" pagination={false}/>

            </Fragment>
        );
    }
}


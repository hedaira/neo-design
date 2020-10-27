import React, { Component, Fragment } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoAlert, NeoHref} from "../../components";

export default class HrefPage extends React.Component {
    render() {
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
                        <NeoHref type={'success'} href={'#'} hidden={false}>Ошибки не обнаружены</NeoHref>
                        <br/>
                        <NeoHref type={'warning'} href={'#'} hidden={false}>Текст предупреждение</NeoHref>
                        <br/>
                        <NeoHref type={'error'} href={'#'} hidden={false}>Обнаружены ошибки</NeoHref>
                        <SyntaxHighlighter language='jsx' style={okaidia} >
                            {`import {NeoHref} from 'neo-design/lib';

<NeoHref type={'success'} href={'#'} hidden={false}>Ошибки не обнаружены</NeoHref>
<NeoHref type={'warning'} href={'#'} hidden={false}>Текст предупреждение</NeoHref>
<NeoHref type={'error'} href={'#'} hidden={false}>Обнаружены ошибки</NeoHref>`}
                        </SyntaxHighlighter>
                    </div>
                </section>

            </Fragment>
        );
    }
}


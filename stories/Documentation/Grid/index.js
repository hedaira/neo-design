import React, { Component, Fragment } from 'react';
import {NeoCol, NeoRow} from "../../../components/index";

export default class GridPageDoc extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <section className="example">

                <h1 className="title">Сетка и размеры</h1>

                <p className="text">
                    Мы придерживаемся 8 пиксельной сетки.<br/>
                    <b>Размерный ряд:</b>
                    <ul>
                        <li>S - 8px</li>
                        <li>M - 16px</li>
                        <li>L - 24px</li>
                        <li>Xl - 32px</li>
                    </ul>
                    Исключение 12pх, используется при необходимости.
                </p>
            </section>
            <section className="example">
                <h2 className="title">Сетка</h2>

                <p className="text">
                    <b>Параметры для размера 1440/920:</b>
                    <ul>
                        <li> 12 колонок</li>
                        <li> Width - 96</li>
                        <li> Type - center</li>
                        <li> Gutter - 16px</li>
                </ul>
                </p>
                <NeoRow gutter={16} style={{height:'350px'}}>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                    <NeoCol span={2}><div style={{width:'100%', height:'100%', backgroundColor:"rgba(51, 51, 51, 0.2)"}}></div></NeoCol>
                </NeoRow>
            </section>

            </Fragment>
        );
    }
}


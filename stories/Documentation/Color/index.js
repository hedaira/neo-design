import React, {Component, Fragment} from 'react';
import {NeoCol, NeoColor, NeoRow, NeoTypography} from "../../../components";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {okaidia} from "react-syntax-highlighter/dist/esm/styles/prism";
import {message} from "antd";

export default class MainColorPageDoc extends Component {
    state = {};

    renderColorBox = (title, color, value) => {
        return (
            <NeoCol span={2} direction='column' style={{display: 'inline-block'}}>
                <NeoTypography type={'body-medium'} style={{marginBottom: '12px', marginTop: '12px'}}>{color}</NeoTypography>
                    <div
                        style={{backgroundColor: NeoColor[color], width:'108px', height:'108px', display:'flex', alignItems:'center', justifyContent:'center'}}
                        onClick={() => this.copyToClipboard(color)}
                    >
                        <NeoTypography type={'body-medium'} style={{color: NeoColor.grey_1}}>{title}</NeoTypography>
                    </div>
                <NeoTypography type={'body-medium'} style={{marginTop: '12px'}}>{value}</NeoTypography>
            </NeoCol>)
    };

    copyToClipboard = (color) => {
        const el = document.createElement('textarea');
        el.value = `NeoColor."${color}"`;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        return (
            message.success(`copied to clipboard "NeoColor.${color}"`)
        )
    };

    render() {
        return (
            <Fragment>
                <h1 className="title">Цвет</h1>

                <h2 className="title">Как использовать</h2>
                <SyntaxHighlighter language='jsx' style={okaidia} >
                    {`import {NeoColor} from 'neo-design/lib';
                    
<NeoTypography type={'body-medium'} style={{color: NeoColor.violete_6}}>Example</NeoTypography>
                    `}
                </SyntaxHighlighter>


                    <h2 className="title">Основные цвета</h2>
                <section className="example">

                    <p className="text">
                        Фиолетовый используются в качестве основного цвета хедера, кнопок, иконок.
                    </p>

                    <NeoRow gutter={16}>
                        {this.renderColorBox('Hover', 'violete_6', '#D9A54C')}
                        {this.renderColorBox('Default', 'violete_5', '#FFCC66')}
                    </NeoRow>

                </section>
                <section className="example">

                    <p className="text">
                        Цветовая раскладка фиолетового цвета
                    </p>

                    <NeoRow gutter={16}>
                        {this.renderColorBox('', 'violete_8', '#000000')}
                        {this.renderColorBox('', 'violete_7', '#171D45')}
                        {this.renderColorBox('Hover', 'violete_6', '#2A356C')}
                        {this.renderColorBox('Default', 'violete_5', '#424D78')}
                        {this.renderColorBox('', 'violete_4', '#5E6785')}
                        {this.renderColorBox('', 'violete_3', '#7E8391')}
                        {this.renderColorBox('', 'violete_2', 'rgba(66, 77, 120, 0.15)')}
                    </NeoRow>

                </section>
                <section className="example">

                    <p className="text">
                        Графит используются как основной шрифтовой цвет
                    </p>
                    <p className="text">
                        Основной цвет - grey-9
                        Цвет текста возле инпутов в боковом меню(фильтры, сортировки) - grey-8
                    </p>

                    <NeoRow gutter={16}>
                        {this.renderColorBox('', 'grey_9', '#333333')}
                        {this.renderColorBox('', 'grey_8', '#404040')}
                    </NeoRow>

                </section>
                <section className="example">

                    <p className="text">
                        Цветовая раскладка серого цвета.
                    </p>

                    <NeoRow gutter={16}>
                        {this.renderColorBox('', 'grey_9', '#333333')}
                        {this.renderColorBox('', 'grey_8', '#404040')}
                        {this.renderColorBox('', 'grey_7', '#666666')}
                        {this.renderColorBox('', 'grey_6', '#8C8C8C')}
                        {this.renderColorBox('', 'grey_5', '#B3B3B3')}
                        {this.renderColorBox('', 'grey_4', '#D9D9D9')}
                        {this.renderColorBox('', 'grey_3', '#E6E6E6')}
                        {this.renderColorBox('', 'grey_2', '#F2F2F2')}
                        {this.renderColorBox('', 'grey_1', '#FAFAFA')}
                    </NeoRow>

                </section>

                <h2 className="title">Акцентные цвета</h2>
                <section className="example">

                    <p className="text">
                        Желтый
                        Основной акцентный цвет
                    </p>

                    <NeoRow gutter={16}>
                        {this.renderColorBox('Default', 'yellow_5', '#FFCC66')}
                    </NeoRow>

                </section>
                <section className="example">

                    <p className="text">
                        Цветовая раскладка желтого цвета
                    </p>

                    <NeoRow gutter={16}>
                        {this.renderColorBox('', 'yellow_7', '#B38136')}
                        {this.renderColorBox('Hover', 'yellow_6', '#D9A54C')}
                        {this.renderColorBox('Default', 'yellow_5', '#FFCC66')}
                        {this.renderColorBox('', 'yellow_4', '#FFDD8F')}
                        {this.renderColorBox('', 'yellow_3', '#FFECB8')}
                        {this.renderColorBox('', 'yellow_2', '#FFF8E0')}
                        {this.renderColorBox('', 'yellow_1', '#FFFCF3')}
                    </NeoRow>

                </section>
                <section className="example">

                    <p className="text">
                        Розовый
                        Дополнительный вкцентный цвет
                    </p>

                    <NeoRow gutter={16}>
                        {this.renderColorBox('', 'magenta_6', '#AD1457')}
                    </NeoRow>

                </section>
                <section className="example">

                    <p className="text">
                        Цветовая раскладка розового цвета
                    </p>

                    <NeoRow gutter={16}>
                        {this.renderColorBox('', 'magenta_8', '#610231')}
                        {this.renderColorBox('', 'magenta_7', '#870944')}
                        {this.renderColorBox('', 'magenta_6', '#AD1457')}
                        {this.renderColorBox('', 'magenta_5', '#BA346A')}
                        {this.renderColorBox('', 'magenta_4', '#C75880')}
                        {this.renderColorBox('', 'magenta_3', '#D47F9B')}
                        {this.renderColorBox('', 'magenta_2', '#E0ABBB')}
                        {this.renderColorBox('', 'magenta_1', '#EDDADF')}
                    </NeoRow>

                </section>
                <section className="example">

                    <p className="text">
                        Голубой и зеленый
                        Дополнительные акцентные цвета, используются при необходимости
                    </p>
                    <NeoRow gutter={16}>
                        {this.renderColorBox('', 'blue_8', '#0E5A7D')}
                        {this.renderColorBox('', 'blue_7', '#1A7CA3')}
                        {this.renderColorBox('', 'blue_6', '#2AA2C9')}
                        {this.renderColorBox('', 'blue_5', '#4FB9D6')}
                        {this.renderColorBox('', 'blue_4', '#78CFE3')}
                        {this.renderColorBox('', 'blue_3', '#A5E5F0')}
                        {this.renderColorBox('', 'blue_2', '#D7F8FC')}
                        {this.renderColorBox('', 'blue_1', '#F0FEFF')}
                    </NeoRow>
                    <NeoRow gutter={16}>
                        {this.renderColorBox('', 'green_8', '#0A2430')}
                        {this.renderColorBox('', 'green_7', '#174557')}
                        {this.renderColorBox('', 'green_6', '#27677C')}
                        {this.renderColorBox('', 'green_5', '#417A8A')}
                        {this.renderColorBox('', 'green_4', '#5F8C96')}
                        {this.renderColorBox('', 'green_3', '#819EA3')}
                        {this.renderColorBox('', 'green_2', '#A5AFB0')}
                        {this.renderColorBox('', 'green_1', '#E7EEEF')}
                    </NeoRow>

                </section>
            </Fragment>
        );
    }
}


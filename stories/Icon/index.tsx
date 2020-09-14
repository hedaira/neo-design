import * as React from 'react';
//
// import { NeoInput, NeoSelect } from '../../components/index';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoIcon} from "neo-icon/lib";
import {message} from "antd";

class IconPage extends React.Component {

    copyToClipboard = (icon) => {
        const el = document.createElement('textarea');
        el.value = `<NeoIcon icon={"${icon}"}/>`;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        return (
            message.success(`copied to clipboard <NeoIcon icon={"${icon}"}/>`)

        )
    };

    groupIcon = (arr) => {
        return arr.map((icon, i) =>
            <div
                className="icon"
                onClick={() => this.copyToClipboard(icon)}
            >
                <NeoIcon key={i} icon={icon} size={"m"}/>
                <br/>
        </div>)
    }

    groupMenuIcon = (arr) => {
        return arr.map((icon, i) =>
            <div
                style={{width: '200px'}}
                className="icon"
                onClick={() => this.copyToClipboard(icon)}
            >
                <NeoIcon key={i} icon={icon} customSize={'200'}/>
            </div>)
    }

    render() {

        const header = ['notification',
            'notificationOff',
            'question',
            'person',
            'exit',
            'settings'
        ];

        const functionalBar = [
            'filter',
            'plusBlock',
            'calculator',
            'barChart',
            'sort',
            'add',
            'update-clock',
            'mark',
            'update',
            'fullScreen',
            'fullScreenUnDo'
        ];

        const diagrams = [
            'diagram',
            'diagramCircle',
            'diagramBlock'
        ];

        const arrows = [
            'arrowUp',
            'arrowDown',
            'arrowLeft',
            'arrowRight'
        ];

        const tables = [
            'more',
            'table',
            'tableUp'
        ];

        const alerts = [
            'alert',
            'success',
            'info',
            'warning'
        ];

        const icons = [
            'delete',
            'plus',
            'close',
            'calendar',
            'calendarFull',
            'rubbish',
            'fill',
            'letter',
            'gear',
            'download',
            'print',
            'list',
            'arrowLong',
            'edit',
            'menuOpen',
            'search',
            'tiles',
            "play",
            "show",
            "hide",
            "journal",
            'star',
            'starFull',
            'addFile',
            'attachedFile',
            'duplicate',
            'exportFile',
            'importFile',
            'undo',
            'checkbox',
            'checkboxFill'
        ];

        const colorIcons = [
            'radioButton',
            'radioButtonFill',
            'switchOff',
            'switchOn',
            'legend',
        ];

        const menu = [
            'menu-1',
            'menu-2',
            'menu-3',
            'menu-4',
            'menu-5'
        ];

        return (
            <React.Fragment>
                <h1 className="title">Icons</h1>

                <SyntaxHighlighter language='jsx' style={okaidia} >
                    {`import { NeoIcon } from "neo-design/lib";`}
                </SyntaxHighlighter>


                <h2 className="title">Examples:</h2>
                <section className="example">
                    <div>
                        <h3 className="ex-title">Size</h3>
                        <br />
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={"m"}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={"s"}/>
                        </div>
                    </div>
                    <SyntaxHighlighter language='jsx' style={okaidia} >
                        {`import { NeoIcon } from "neo-design/lib";

<NeoIcon icon={"notification"} size={'s'}/>
<NeoIcon icon={"notification"}/>
<NeoIcon icon={"notification"} size={'m'}/>`}
                    </SyntaxHighlighter>
                </section>

                <section className="example">
                    <div>
                        <h3 className="ex-title">Color</h3>
                        <br />
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={"m"} color={'#171d45'}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={"m"} color={'#d9a54c'}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={"m"} color={'#404040'}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={"m"} color={'#870944'}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={"m"} color={'#174557'}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={"m"} color={'#1a7ca3'}/>
                        </div>
                    </div>
                    <SyntaxHighlighter language='jsx' style={okaidia} >
                        {`import { NeoIcon } from "neo-design/lib";

<NeoIcon icon={"notification"} size={"m"} color={'#171d45'}/>
<NeoIcon icon={"notification"} size={"m"} color={'#d9a54c'}/>
<NeoIcon icon={"notification"} size={"m"} color={'#404040'}/>
<NeoIcon icon={"notification"} size={"m"} color={'#870944'}/>
<NeoIcon icon={"notification"} size={"m"} color={'#174557'}/>
<NeoIcon icon={"notification"} size={"m"} color={'#1a7ca3'}/>`}
                    </SyntaxHighlighter>
                </section>

                <h2 className="title">When you click on the icon, it will be copied to the clipboard</h2>

                <section className="example">
                    <div>
                        <h3 className="ex-title">Header</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupIcon(header)
                            }
                        </section>
                    </div>
                    <div>
                        <h3 className="ex-title">Functional Bar</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupIcon(functionalBar)
                            }
                        </section>
                    </div>
                    <div>
                        <h3 className="ex-title">Diagram</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupIcon(diagrams)
                            }
                        </section>
                    </div>
                    <div>
                        <h3 className="ex-title">Arrow</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupIcon(arrows)
                            }
                        </section>
                    </div>
                    <div>
                        <h3 className="ex-title">Table</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupIcon(tables)
                            }
                        </section>
                    </div>
                    <div>
                        <h3 className="ex-title">Alert</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupIcon(alerts)
                            }
                        </section>
                    </div>
                    <div>
                        <h3 className="ex-title">All</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupIcon(icons)
                            }
                        </section>
                    </div>
                    <div>
                        <h3 className="ex-title">No color changes</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupIcon(colorIcons)
                            }
                        </section>
                    </div>
                    <div>
                        <h3 className="ex-title">Menu</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupMenuIcon(menu)
                            }
                        </section>
                    </div>
                </section>
                {/*<PropsTab Props={*/}
                {/*    [*/}
                {/*        {name:'icon', default:'-', description:'Имя иконки'},*/}
                {/*        {name:'small', default:'16px', description:'Размер иконки - 8px'},*/}
                {/*        {name:'big', default:'16px', description:'Размер иконки - 24px'},*/}
                {/*        {name:'margin', default:'auto 3px', description:'Внешний отступ'},*/}
                {/*        {name:'fill', default:'-', description:'Цвет иконки'},*/}
                {/*        {name:'noPoint', default:'pointer', description:'При наведении на иконку будет установлен cursor: default'}*/}

                {/*    ]*/}
                {/*}/>*/}
            </React.Fragment>
        );
    }
}

export default IconPage;

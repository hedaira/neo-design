import * as React from 'react';
//
// import { NeoInput, NeoSelect } from '../../components/index';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoIcon} from "neo-icon/lib";
import {message} from "antd";

class IconPage extends React.Component {

    alert = (str: string) => {

    }

    copyToClipboard = (icon, size) => {
        const el = document.createElement('textarea');
        el.value = `<NeoIcon icon={${icon}} size={${size}}/>`;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        return (
            message.success(`copied to clipboard "<NeoIcon icon={${icon}} size={${size}}" />`)

        )
    };

    groupIcon = (arr) => {
        return arr.map((icon, i) =>
            <div
                className="icon"
                onClick={() => this.copyToClipboard(icon, '40')}
            >
                <NeoIcon key={i} icon={icon} size={'40'}/>
                <br/>
        </div>)
    }

    groupMenuIcon = (arr) => {
        return arr.map((icon, i) =>
            <div
                style={{width: '200px'}}
                className="icon"
                onClick={() => this.copyToClipboard(icon, '200')}
            >
                <NeoIcon key={i} icon={icon} size={'200'}/>
            </div>)
    }

    render() {

        const header = ['notification',
            'notification_off',
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
            'fullScreen'
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
            'switchOff',
            'switchOn',
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
            'legend',
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
            'undo'
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
                            <NeoIcon icon={"notification"} size={'50'}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={'40'}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={'30'}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={'15'}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={'10'}/>
                        </div>
                    </div>
                    <SyntaxHighlighter language='jsx' style={okaidia} >
                        {`import { NeoIcon } from "neo-design/lib";

<NeoIcon icon={"notification"} size={'50'}/>
<NeoIcon icon={"notification"} size={'40'}/>
<NeoIcon icon={"notification"} size={'30'}/>
<NeoIcon icon={"notification"}/>
<NeoIcon icon={"notification"} size={'15'}/>
<NeoIcon icon={"notification"} size={'10'}/>`}
                    </SyntaxHighlighter>
                </section>

                <section className="example">
                    <div>
                        <h3 className="ex-title">Color</h3>
                        <br />
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={'50'} color={'#171d45'}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={'50'} color={'#d9a54c'}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={'50'} color={'#404040'}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={'50'} color={'#870944'}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={'50'} color={'#174557'}/>
                        </div>
                        <div className="icon">
                            <NeoIcon icon={"notification"} size={'50'} color={'#1a7ca3'}/>
                        </div>
                    </div>
                    <SyntaxHighlighter language='jsx' style={okaidia} >
                        {`import { NeoIcon } from "neo-design/lib";

<NeoIcon icon={"notification"} size={'50'} color={'#171d45'}/>
<NeoIcon icon={"notification"} size={'50'} color={'#d9a54c'}/>
<NeoIcon icon={"notification"} size={'50'} color={'#404040'}/>
<NeoIcon icon={"notification"} size={'50'} color={'#870944'}/>
<NeoIcon icon={"notification"} size={'50'} color={'#174557'}/>
<NeoIcon icon={"notification"} size={'50'} color={'#1a7ca3'}/>`}
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
                        <h3 className="ex-title">Menu</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupMenuIcon(menu)
                            }
                        </section>
                    </div>
                    <SyntaxHighlighter language='jsx' style={okaidia} >
                        {`import { NeoIcon } from "neo-design/lib";

/*Header*/
<NeoIcon icon={"notification"} size={'50'}/>
<NeoIcon icon={"question"} size={'50'}/>
<NeoIcon icon={"person"} size={'50'}/>
<NeoIcon icon={"exit"} size={'50'}/>
<NeoIcon icon={"settings"} size={'50'}/>`}
                    </SyntaxHighlighter>
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

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

    groupSwitcherIcon = (arr) => {
        return arr.map((icon, i) =>
            <div
                className="icon"
                style={{marginRight: '20px'}}
                onClick={() => this.copyToClipboard(icon)}
            >
                <NeoIcon key={i} icon={icon} customSize={'44'}/>
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

        const functionalBarCheck = [
            'filterCheck',
            'plusBlockCheck',
            'calculatorCheck',
            'barChartCheck',
            'sortCheck',
            'addCheck'
        ];

        const diagrams = [
            'diagram',
            'diagramCircle',
            'diagramBlock'
        ];

        const arrows = [
            'arrowUp',
            'arrowDown',
            'arrowVerticalRight',
            'arrowLeft',
            'arrowRight',
            'arrowVerticalLeft',
            'moveDown',
            'moveUp',
            'doubleLeft',
            'doubleRight',
        ];

        const tables = [
            'more',
            'table',
            'tableUp',
            'search',
            'dragAndDrop'
        ];

        const tablesCheck = [
            'searchCheck'
        ];

        const alerts = [
            'alert',
            'success',
            'info',
            'warning'
        ];

        const checkbox = [
            'checkbox',
            'checkboxFill',
            'checkboxDisabled'
        ];

        const switcher = [
            'switchOff',
            'switchOn'
        ];

        const files = [
            'folder',
            'folderOpen',
            'folderAdd',
            'fileExcel',
            'document',
            'fileWord'
        ];

        const mainMenu = [
            'file',
            'compose',
            'tools',
            'updateTwoLine',
            'checkStatus',
            'form',
            'cloudDownload',
            'directory',
            'team'
        ]

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
            'cloudServer',
            'code',
            'ellipsis'
        ];

        const colorIcons = [
            'radioButton',
            'radioButtonFill',
            'legend',
        ];

        const menu = [
            'menu-1',
            'menu-2',
            'menu-3',
            'menu-4',
            'menu-5'
        ];

        const additional = [
            "ancore",
            "arrow-back",
            "arrow-backward",
            "arrow-double-reply",
            "arrow-down-cicle",
            "arrow-down-circle",
            "arrow-down-table",
            "arrow-down",
            "arrow-left-cicle",
            "arrow-left-circle",
            "arrow-next",
            "arrow-reply",
            "arrow-right-cicle",
            "arrow-swap",
            "arrow-up-cicle",
            "arrow-up-circle",
            "arrow-up",
            "arrows-h",
            "arrows-v",
            "asteriks",
            "backward",
            "bank",
            "bar-chart-h",
            "base-server",
            "base",
            "big-grid-1",
            "big-grid",
            "binokulars",
            "block",
            "book-finance",
            "book-formula",
            "book-upload",
            "book-warning",
            "book",
            "branch",
            "breifcase",
            "bring-to-front",
            "bug",
            "building",
            "calendar-check",
            "calendar-delete",
            "calendar-minus",
            "calendar-plus",
            "camera",
            "caret-down",
            "caret-left",
            "caret-right",
            "caret-square-down",
            "caret-square-left",
            "caret-square-right",
            "caret-square-up",
            "caret-up",
            "chat-bubbles-question",
            "chat-dialog",
            "chat-help",
            "chat-off",
            "chat-warning",
            "chat",
            "cicle",
            "circle-o",
            "clip",
            "clipboard",
            "clock",
            "close-menu",
            "cloud-upload",
            "cloud",
            "code-html",
            "colorpicker",
            "comment",
            "connect",
            "contact",
            "cookies",
            "copy",
            "cub",
            "cut",
            "dark-theme",
            "data-histogram",
            "data-line",
            "date-scatter",
            "design",
            "desktop",
            "developer-board",
            "disconnect",
            "document-list",
            "documents",
            "dotted",
            "double-down",
            "double-up",
            "drag-and-drop",
            "drag",
            "eject",
            "email",
            "envelope-email-square",
            "erase",
            "eur",
            "external-link-square",
            "external-link",
            "fast-backward",
            "fast-forward",
            "fax",
            "file-ai",
            "file-delete",
            "file-download",
            "file-eps",
            "file-minus",
            "file-pdf",
            "file-png",
            "file-ppt",
            "file-search",
            "file-svg",
            "file-text",
            "file-upload",
            "file-xml",
            "file-zip",
            "files",
            "flag",
            "flash",
            "folder-delete",
            "folder-download",
            "folder-minus",
            "folder-public",
            "folder-upload",
            "folder-zip",
            "fort",
            "forward",
            "gbp",
            "gift",
            "globe",
            "graduation-cap",
            "hdd",
            "heart",
            "home",
            "hourglass",
            "image",
            "important",
            "key",
            "keyboard",
            "lightbulbt",
            "link-remove",
            "link",
            "location-map",
            "location",
            "lock-open",
            "lock",
            "map-signs",
            "map",
            "minus-circle",
            "minus-square",
            "minus",
            "money",
            "move",
            "news",
            "note",
            "notebook",
            "notepad",
            "open-folder",
            "pause-circle",
            "pause-filled",
            "pause",
            "percent",
            "phone-1",
            "phone-desktop",
            "phone",
            "pin",
            "play-arrow",
            "play-filled",
            "plus-square",
            "plus2",
            "pointer",
            "power",
            "qcode",
            "question2",
            "repeat",
            "rub",
            "save",
            "search-in",
            "search-out",
            "send",
            "sertificat",
            "server",
            "share",
            "sing-up",
            "skalefit",
            "speed",
            "spinner",
            "status",
            "stop-circle",
            "stop-filled",
            "system-settings",
            "table-column",
            "table-rows",
            "table2",
            "tablet",
            "tag",
            "tags",
            "target",
            "tasks",
            "text-bullet-list-search",
            "text-bullet-list",
            "text-number-list",
            "timer",
            "toolbox",
            "try",
            "upload",
            "usd",
            "user-add",
            "user-delete",
            "video-camera",
            "video-square",
            "warning-triangle",
            "wifi"
        ];

        return (
            <React.Fragment>
                <h1 className="title">Иконки</h1>

                <SyntaxHighlighter language='jsx' style={okaidia} >
                    {`import { NeoIcon } from "neo-design/lib";`}
                </SyntaxHighlighter>


                <h2 className="title">Примеры:</h2>
                <section className="example">
                    <div>
                        <h3 className="ex-title">Размер</h3>
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
                        {/*<div className="icon">*/}
                        {/*    <NeoIcon icon={"notification"} size={"xs"}/>*/}
                        {/*</div>*/}
                    </div>
                    <SyntaxHighlighter language='jsx' style={okaidia} >
                        {`import { NeoIcon } from "neo-design/lib";

<NeoIcon icon={"notification"} size={'m'}/>
<NeoIcon icon={"notification"}/>
<NeoIcon icon={"notification"} size={'s'}/>
<NeoIcon icon={"notification"} size={'xs'}/>`}
                    </SyntaxHighlighter>
                </section>

                <section className="example">
                    <div>
                        <h3 className="ex-title">Цвет</h3>
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

                <h2 className="title">Нажав на иконку, ее код будет скопирован в буфер</h2>

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
                        <h3 className="ex-title">Functional Bar Check</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupIcon(functionalBarCheck)
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
                        <h3 className="ex-title">Table Check</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupIcon(tablesCheck)
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
                        <h3 className="ex-title">Files</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupIcon(files)
                            }
                        </section>
                    </div>
                    <div>
                        <h3 className="ex-title">Main menu</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupIcon(mainMenu)
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
                        <h3 className="ex-title">Checkbox</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupIcon(checkbox)
                            }
                        </section>
                    </div>
                    <div>
                        <h3 className="ex-title">Switcher</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupSwitcherIcon(switcher)
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
                    <div>
                        <h3 className="ex-title">Additional</h3>
                        <br />
                        <section className="icons ml20">
                            {
                                this.groupIcon(additional)
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

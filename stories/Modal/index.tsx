import React, { Component, Fragment } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoModal, NeoButton} from "../../components";
import {PropsTab} from "../../components/_utils/PropsTab";

export default class ModalPage extends Component {
    state = {
        visible: false,
        visibleInfo: false,
        visibleError: false,
        visibleSuccess: false,
        visibleEdit: false,

    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            visible: false,
        });
    };

    handleClose = () => {
        this.setState({
            visible: false,
        });
    };

    showModalEdit = () => {
        this.setState({
            visibleEdit: true,
        });
    };

    handleLeftEdit = () => {
        this.setState({
            visibleEdit: false,
        });
        alert("left")
    };

    close = () => {
        this.setState({
            visibleEdit: false,
        });
    };

    handleRightEdit = () => {
        this.setState({
            visibleEdit: false,
        });
        alert("right")
    };

    showModalInfo = () => {
        this.setState({
            visibleInfo: true,
        });
    };

    handleOkInfo = () => {
        this.setState({
            visibleInfo: false,
        });
    };
    showModalError = () => {
        this.setState({
            visibleError: true,
        });
    };

    handleOkError = () => {
        this.setState({
            visibleError: false,
        });
    };

    showModalSuccess = () => {
        this.setState({
            visibleSuccess: true,
        });
    };

    handleOkSuccess = () => {
        this.setState({
            visibleSuccess: false,
        });
    };
    render() {
        const data = [{name:'type', default:'-', description:"Тип модального окна(обязательно)", value: "'basic' / 'success' / 'info' / 'error' / 'edit'"},
            {name:'title', default:'-', description:"Заголовок модального окна", value: 'ReactNode'},
            {name:'content', default:'-', description:"Сообщение модального окна", value: 'ReactNode'},
            {name:'visible', default:'false', description:"Показываетсся ли модальное окно", value: 'true / false'},
            {name:'onLeftButtonClick', default:'-', description:"Событие, при нажатии основной кнопки 'Ок'", value: 'function(e)'},
            {name:'onRightButtonClick', default:'-', description:"Событие, при нажатии 'Отменить'", value: 'function(e)'},
            {name:'textOfLeftButton', default:'Ок', description:"Текст основной кнопки 'Ок'", value: 'ReactNode'},
            {name:'textOfRightButton', default:'Отменить', description:"Текст кнопки 'Отменить'", value: 'ReactNode'},
            {name:'onCancel', default:'-', description:"Действие при закрытии модального окна(крестик)", value: 'function(e)'},
            {name:'closable', default:'false', description:"Видна ли кнопка закрытия (крестик) в правом верхнем углу модального диалога или нет", value: 'true / false'},
            {name:'footer', default:'-', description:"Кастомизация блока footer", value: 'ReactNode'},
            {name:'getContainer', default:'body', description:"Функция возращающая контейнер для модального окна", value: 'function()|Selectors|HTMLElement|false'}];
        return (
            <Fragment>
                <h1 className="title">Модальное окно</h1>

                <p className="text">
                    Модальное окно — это окно, которое блокирует работу пользователя с приложением до тех пор, пока это окно не закроют.
                    <br/>
                    Модальные окна нужны, чтобы предупредить пользователя о каком-то действии. Например, это может быть сообщение о завершении сценария.
                </p>

                <p className="text">
                    Отличие от компонента Алерт:
                    <br/>
                    Модальное окно блокирует работу с приложением до тех пор, пока его (модальное окно) не закроют.
                    У модального окна всегда есть кнопка действия.
                </p>


                <h2 className="title">Как использовать</h2>
                <SyntaxHighlighter language='jsx' style={okaidia} >
                    {`import { NeoModal } from "neo-design/lib";`}
                </SyntaxHighlighter>

                <h2 className="title">Примеры:</h2>

                <section className="example space-between">
                    <div>
                        <h3 className="ex-title">Basic</h3>
                        <br/>
                        <NeoButton type={'secondary'} onClick={this.showModal}>Open Modal</NeoButton>
                        <br/>
                        <NeoModal type={'basic'} title={"Question?"} content={"This is a question modal"}
                                  visible={this.state.visible} onLeftButtonClick={this.handleOk} onRightButtonClick={this.handleClose}>
                        </NeoModal>

                        <SyntaxHighlighter language='jsx' style={okaidia} >
                            {`state = {visible: false}

showModal = () => {this.setState({visible: true})}
handleOk = () => {this.setState({visible: false})}
    
<NeoButton type={'secondary'} onClick={this.showModal}>Open Modal</NeoButton>
<NeoModal type={'basic'} title={"Question?"} content={"This is a question modal"} visible={this.state.visible} onLeftButtonClick={this.handleOk} onRightButtonClick={this.handleClose}>
`}
                        </SyntaxHighlighter>
                    </div>
                </section>

                <section className="example space-between">
                    <div>
                        <h3 className="ex-title">Info</h3>
                        <br/>
                        <NeoButton type={'secondary'} onClick={this.showModalInfo}>Open Modal</NeoButton>
                        <br/>
                        <NeoModal type={'info'} title={'Info'} content={'This is an info modal'} visible={this.state.visibleInfo} onLeftButtonClick={this.handleOkInfo}/>

                        <SyntaxHighlighter language='jsx' style={okaidia} >
                            {`state = {visible: false}

showModal = () => {this.setState({visible: true})}
handleOk = () => {this.setState({visible: false})}
    
<NeoButton type={'secondary'} onClick={this.showModal}>Open Modal</NeoButton>
<NeoModal type={'info'} title={'Info'} content={'This is an info modal'} visible={this.state.visible} onLeftButtonClick={this.handleOk}>
`}
                        </SyntaxHighlighter>
                    </div>
                </section>

                <section className="example space-between">
                    <div>
                        <h3 className="ex-title">Success</h3>
                        <br/>
                        <NeoButton type={'secondary'} onClick={this.showModalSuccess}>Open Modal</NeoButton>
                        <br/>
                        <NeoModal type={'success'} title={'Success'} content={'This is a success modal'} visible={this.state.visibleSuccess} onLeftButtonClick={this.handleOkSuccess}/>
                        <SyntaxHighlighter language='jsx' style={okaidia} >
                            {`state = {visible: false}

showModal = () => {this.setState({visible: true})}
handleOk = () => {this.setState({visible: false})}
    
<NeoButton type={'secondary'} onClick={this.showModal}>Open Modal</NeoButton>
<NeoModal type={'success'} title={'Success'} content={'This is a success modal'} visible={this.state.visible} onLeftButtonClick={this.handleOk}>
`}
                        </SyntaxHighlighter>
                    </div>
                </section>

                <section className="example space-between">
                    <div>
                        <h3 className="ex-title">Error</h3>
                        <br/>
                        <NeoButton type={'secondary'} onClick={this.showModalError}>Open Modal</NeoButton>
                        <br/>
                        <NeoModal type={'error'} title={'Error'} content={'This is an error modal'} visible={this.state.visibleError} onLeftButtonClick={this.handleOkError}/>
                        <SyntaxHighlighter language='jsx' style={okaidia} >
                            {`state = {visible: false}

showModal = () => {this.setState({visible: true})}
handleOk = () => {this.setState({visible: false})}
    
<NeoButton type={'secondary'} onClick={this.showModal}>Open Modal</NeoButton>
<NeoModal type={'error'} title={'Error'} content={'This is an error modal'} visible={this.state.visible} onLeftButtonClick={this.handleOk}>
`}
                        </SyntaxHighlighter>
                    </div>
                </section>


                <section className="example space-between">
                    <div>
                        <h3 className="ex-title">Edit</h3>
                        <br/>
                        <NeoButton type={'secondary'} onClick={this.showModalEdit}>Open Modal</NeoButton>
                        <br/>
                        <NeoModal  onCancel={this.close} closable={true} type={'edit'} title={"Edit?"} content={"This is an edit mode modal"} visible={this.state.visibleEdit} onLeftButtonClick={this.handleLeftEdit}
                                              onRightButtonClick={this.handleRightEdit} textOfLeftButton={"left"} textOfRightButton={"right"}
                    >
                    </NeoModal>
                        <SyntaxHighlighter language='jsx' style={okaidia}>
                            {`state = {visibleEdit: false}

showModalEdit = () => {this.setState({ visibleEdit: true,});};
handleLeftEdit = () => {this.setState({visibleEdit: false,});alert("left")};
handleRightEdit = () => {this.setState({visibleEdit: false,});alert("right")};
    
<NeoButton type={'secondary'} onClick={this.showModalEdit}>Open Modal</NeoButton>
<NeoModal onCancel={this.close} closable={true} type={'edit'} title={"Edit?"} content={"This is a edit mode modal"} visible={this.state.visibleEdit} onLeftButtonClick={this.handleLeftEdit}
                                  onRightButtonClick={this.handleRightEdit} textOfLeftButton={"left"} textOfRightButton={"right"}
                        >
                        </NeoModal>
`}
                        </SyntaxHighlighter>
                    </div>
                </section>

                <PropsTab dataSource={data} size="middle" pagination={false}/>


            </Fragment>
        );
    }
}


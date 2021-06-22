import React, { Component, Fragment } from 'react';
import {NeoButton, NeoStep, NeoSteps} from "../../components";


export default class StepsPage extends Component {
    state = {
        visible: false,
        visibleInfo: false,
        visibleError: false,
        visibleSuccess: false,
        visibleEdit: false,
        current: 0
    };



    render() {

        return (
            <Fragment>
                <h1 className="title">Progress Bar - Steps</h1>

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

                <NeoSteps style={{paddingLeft: "20px"}} current={this.state.current}>
                    <NeoStep description={'Загрузка данных за выбранную дату'} />
                    <NeoStep description={'Запуск классификации ссуд'} />
                    <NeoStep description={'Запуск расчета резервов'} />
                    <NeoStep description={'Расчет проводок'} />
                </NeoSteps>
                <NeoButton onClick={()=>this.setState({current:this.state.current-1})} type={"secondary"}>Prev</NeoButton>
                <NeoButton onClick={()=>this.setState({current:this.state.current+1})}>Next</NeoButton>

            </Fragment>
        );
    }
}


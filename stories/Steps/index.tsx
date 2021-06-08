import React, { Component, Fragment } from 'react';
import {Steps} from "antd";
import NeoSteps from "../../components/steps";


export default class StepsPage extends Component {
    state = {
        visible: false,
        visibleInfo: false,
        visibleError: false,
        visibleSuccess: false,
        visibleEdit: false,

    };



    render() {

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


                <NeoSteps style={{paddingLeft: "20px"}} current={0} status="process">
                    <NeoSteps.Steps title="Finished" subTitle={"rteere"} description="This is a description." />
                    <NeoSteps.Steps title="In Progress" description="This is a description." />
                    <NeoSteps.Steps title="Waiting" description="This is a description." />
                </NeoSteps>






            </Fragment>
        );
    }
}


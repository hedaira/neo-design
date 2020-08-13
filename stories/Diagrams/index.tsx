import React, { Component, Fragment } from 'react';

import NXDiagram from './Diagram';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import "../../../utils/helpers";
import showCode from '../../../utils/helpers';

export default class DiagramsPage extends Component {
    render() {

        return (
            <Fragment>
                <h1 className="title">Bars</h1>

                <h2 className="title">Примеры:</h2>

                <section className="example">

                    <NXDiagram />

                    <div className='showCode'>
                        <button id='diagram' onClick={showCode}>Show Code</button>
                        <SyntaxHighlighter id='diagram' language='jsx' style={okaidia} >
                            {`import * as React from "react";
import {NXIcon, diagramBlock, diagramCircle, barChart, diagram, NXButton, NXCol, NXRow, NXInput, NXSelect, NXOption, NXForm, close} from "../../../index.js";

export default class NXDiagram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diagramType: "Block"
        };
    }

    getColumnSelectOptions(id, placeHolder) {
         return <NXSelect width='100%' placeholder={placeHolder}>
                    <NXOption
                    value='parameter'
                    >
                        Опции
                    </NXOption>
                </NXSelect>
    };

    getInput(id, placeHolder, disabled = false) {
        return <NXInput width='100%' disabled={disabled} placeholder={placeHolder}/>
    };

render() {
    return (
        <NXForm style={{ height:'100vh', boxShadow:'0 0 5px #F2F2F2' }}
                width='700px'>
            <div style={{display:'flex', alignItems: 'center', height:'53px', justifyContent:'space-between', padding: '16px 40px', border: '1px solid #F2F2F2'}}>
                <h3 style={{margin:'0'}}>Диаграммы</h3>
                <NXIcon icon={close}/>
            </div>
            <div style={{height:'106px', padding:'24px 40px'}}>
                <NXRow><h3>Выберите тип диаграммы</h3></NXRow>
                <NXRow margin='15px 0 0 0' content='space-between'>
                    <NXCol span={5}>
                        <NXButton
                        onClick={()=>{this.setState({diagramType:"Block"})}}
                        padding='0'
                        isIcon='24px'>
                        <NXIcon icon={diagramBlock} fill='#424D78' />
                        </NXButton>
                        <h4>Гистограмма</h4>
                    </NXCol>
                    <NXCol span={5}>
                        <NXButton
                        onClick={()=>{this.setState({diagramType:"Bar"})}}
                        padding='0'
                        isIcon='24px'>
                            <NXIcon icon={barChart} fill='#424D78' />
                        </NXButton>
                        <h4>Линейчатая</h4>
                    </NXCol>
                    <NXCol span={4}>
                        <NXButton
                        onClick={()=>{this.setState({diagramType:"Pie"})}}
                        padding='0'
                        isIcon='24px'>
                            <NXIcon icon={diagramCircle} fill='#424D78' />
                        </NXButton>
                        <h4>Круговая</h4>
                    </NXCol>
                    <NXCol span={4}>
                        <NXButton
                        onClick={()=>{this.setState({diagramType:"Line"})}}
                        padding='0'
                        isIcon='24px'>
                            <NXIcon icon={diagram} fill='#424D78' />
                        </NXButton>
                        <h4>График</h4>
                    </NXCol>
                </NXRow>
            </div>
            <div style={{border: 'solid 1px #F2F2F2', maxHeight:'298px', padding:'12px 40px'}}>
            <NXRow margin='8px 0'>
                <NXInput placeholder='Название диаграммы' />
            </NXRow>
                {(this.state.diagramType==="Line")?
            <NXRow margin='16px 0'>
                    <NXInput placeholder='Легенда'/>
            </NXRow>
                    :""}
            <NXRow gutter={16} margin='16px 0'>
                <NXCol span={12}>
                    {this.getColumnSelectOptions("axisXColumnName", "Ось X")}
                </NXCol>
                <NXCol span={12}>
                    {this.getColumnSelectOptions("axisYColumnName", "Ось Y")}
                </NXCol>
            </NXRow>
                    {
                        (this.state.diagramType!=="Pie")?
            <NXRow gutter={16} margin='16px 0'>
                <NXCol span={12}>
                    {this.getInput("axisXLabel", "Подпись оси X")}
                </NXCol>
                <NXCol span={12}>
                    {this.getColumnSelectOptions("axisXPosition","Положение оси X")}
                </NXCol>
            </NXRow>
                        :""}
                    {
                        (this.state.diagramType!=="Pie")?
            <NXRow gutter={16} margin='16px 0'>
                <NXCol span={12}>
                    {this.getInput("axisYLabel", "Подпись оси Y")}
                </NXCol>
                <NXCol span={12}>
                    {this.getColumnSelectOptions("axisYPosition","Положение оси Y")}
                </NXCol>
            </NXRow>
                        :""
                    }
            <NXRow margin='8px 0'>
                <NXCol span={24}>
                    {this.getColumnSelectOptions("legendPosition", 'Положение легенды')}
                </NXCol>
            </NXRow>
            </div>
            <div style={{minHeight:'34%'}}>

            </div>
            <div style={{backgroundColor: '#F2F2F2', padding:'16px 40px', height:'64px'}}>
            <NXRow content='flex-start'>
                {this.props.action === "edit"
                    ?<NXCol span={5}><NXButton htmlType="submit">Редактировать</NXButton></NXCol>
                    :<NXCol span={5}><NXButton htmlType="submit" primary>Добавить</NXButton></NXCol>}
                <NXCol span={5}><NXButton>Очистить</NXButton></NXCol>
            </NXRow>
            </div>
        </NXForm>
    )
}
}
`}
                        </SyntaxHighlighter>
                    </div>

                </section>
            </Fragment>
        );
    }
}






/*constructor(props) {
    super(props);
    this.state = {
        diagramType: "Block"
    };
}

getColumnSelectOptions(id, placeHolder) {
    return <NeoSelect width='100%' defaultValue={placeHolder}>
            <option value={'parameter'}>
                Опции
            </option>
    </NeoSelect>
};

getInput(id, placeHolder,) {
    return <NeoInput width='100%' value={placeHolder}/>
};

render() {
return (
      <form style={{ height:'100vh', boxShadow:'0 0 5px #F2F2F2', width: '700px' }}>
          <div style={{display:'flex', alignItems: 'center', height:'53px', justifyContent:'space-between', padding: '16px 40px', border: '1px solid #F2F2F2'}}>
              <h3 style={{margin:'0'}}>Диаграммы</h3>
              {/!*<NXIcon icon={close}/>*!/}
          </div>
          <div style={{height:'106px', padding:'24px 40px'}}>
              <NeoRow><h3>Выберите тип диаграммы</h3></NeoRow>
              <NeoRow>
                  <NeoCol span={5}>
                      <NeoButton
                          onClick={()=>{this.setState({diagramType:"Block"})}}>
                          {/!*<NXIcon icon={diagramBlock} fill='#424D78' />*!/}
                      </NeoButton>
                      <h4>Гистограмма</h4>
                  </NeoCol>
                  <NeoCol span={5}>
                      <NeoButton
                          onClick={()=>{this.setState({diagramType:"Bar"})}}>
                          {/!*<NXIcon icon={barChart} fill='#424D78' />*!/}
                      </NeoButton>
                      <h4>Линейчатая</h4>
                  </NeoCol>
                  <NeoCol span={4}>
                      <NeoButton
                          onClick={()=>{this.setState({diagramType:"Pie"})}}>
                         {/!* <NXIcon icon={diagramCircle} fill='#424D78' />*!/}
                      </NeoButton>
                      <h4>Круговая</h4>
                  </NeoCol>
                  <NeoCol span={4}>
                      <NeoButton
                          onClick={()=>{this.setState({diagramType:"Line"})}}>
                          {/!*<NXIcon icon={diagram} fill='#424D78' />*!/}
                      </NeoButton>
                      <h4>График</h4>
                  </NeoCol>
              </NeoRow>
          </div>
          <div style={{border: 'solid 1px #F2F2F2', maxHeight:'298px', padding:'12px 40px'}}>
              <NeoRow>
                  <NeoInput value='Название диаграммы' />
              </NeoRow>
              { this.state.diagramType === "Line" ?
                  <NeoRow>
                      <NeoInput value='Легенда'/>
                  </NeoRow>
                  :""}
              <NeoRow gutter={16}>
                  <NeoCol span={12}>
                      {this.getColumnSelectOptions("axisXColumnName", "Ось X")}
                  </NeoCol>
                  <NeoCol span={12}>
                      {this.getColumnSelectOptions("axisYColumnName", "Ось Y")}
                  </NeoCol>
              </NeoRow>
              {
                  (this.state.diagramType!=="Pie")?
                      <NeoRow gutter={16}>
                          <NeoCol span={12}>
                              {this.getInput("axisXLabel", "Подпись оси X")}
                          </NeoCol>
                          <NeoCol span={12}>
                              {this.getColumnSelectOptions("axisXPosition","Положение оси X")}
                          </NeoCol>
                      </NeoRow>
                      :""}
              {
                  (this.state.diagramType!=="Pie")?
                      <NeoRow gutter={16}>
                          <NeoCol span={12}>
                              {this.getInput("axisYLabel", "Подпись оси Y")}
                          </NeoCol>
                          <NeoCol span={12}>
                              {this.getColumnSelectOptions("axisYPosition","Положение оси Y")}
                          </NeoCol>
                      </NeoRow>
                      :""
              }
              <NeoRow>
                  <NeoCol span={24}>
                      {this.getColumnSelectOptions("legendPosition", 'Положение легенды')}
                  </NeoCol>
              </NeoRow>
          </div>
          <div style={{minHeight:'34%'}}>

          </div>
          <div style={{backgroundColor: '#F2F2F2', padding:'16px 40px', height:'64px'}}>
              <NeoRow>
                  {this.props.action === "edit"
                      ?<NeoCol span={5}><NeoButton>Редактировать</NeoButton></NeoCol>
                      :<NeoCol span={5}><NeoButton>Добавить</NeoButton></NeoCol>}
                  <NeoCol span={5}><NeoButton>Очистить</NeoButton></NeoCol>
              </NeoRow>
          </div>
      </form>
  )
}
}*/


import React, { Component, Fragment } from 'react';
import './diagrams.css'

import {NeoSelect, NeoButton, NeoInput, NeoRow, NeoCol, NeoIcon} from "../../components";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import showCode from "../../components/_utils/tools";
import {Form} from "antd";

export default class DiagramsPage extends Component {

        state = {
            diagramType: "Block"
        }


    getColumnSelectOptions(id, placeHolder) {
         return <NeoSelect width='100%' placeholder={placeHolder}>
                    <option
                    value='parameter'
                    >
                        Опции
                    </option>
                </NeoSelect>
    };

    getInput(id, placeHolder) {
        return <NeoInput width='100%' placeholder={placeHolder}/>
    };

    render() {  
        
        return(

            <Fragment>
                <h1 className="title">Bars</h1>

                <h2 className="title">Примеры:</h2>

                <section className="example">


            
        <Form style={{ height:'100vh', boxShadow:'0 0 5px #F2F2F2', width: '700px' }}>
            <div style={{display:'flex', alignItems: 'center', height:'53px', justifyContent:'space-between', padding: '16px 40px', border: '1px solid #F2F2F2'}}>
                <h3 style={{margin:'0'}}>Диаграммы</h3>
                {/*<NeoIcon icon={close}/>*/}
            </div>
            <div style={{height:'106px', padding:'24px 40px'}}>
                <NeoRow><h3>Выберите тип диаграммы</h3></NeoRow>
                <NeoRow className={'chooseRow'}>
                    <NeoCol span={7} className={'chooseCol'}>
                        <NeoButton className={'chooseButton'} size={'medium'}
                        onClick={()=>{this.setState({diagramType:"Block"})}}>
                        {/*<NXIcon icon={diagramBlock} fill='#424D78' />*/}
                        </NeoButton>
                        <h4>Гистограмма</h4>
                    </NeoCol>
                    <NeoCol span={7} className={'chooseCol'}>
                        <NeoButton className={'chooseButton'} size={'medium'}
                        onClick={()=>{this.setState({diagramType:"Bar"})}}>
                            {/*<NXIcon icon={barChart} fill='#424D78' />*/}
                        </NeoButton>
                        <h4>Линейчатая</h4>
                    </NeoCol>
                    <NeoCol span={5} className={'chooseCol'}>
                        <NeoButton className={'chooseButton'} size={'medium'}
                        onClick={()=>{this.setState({diagramType:"Pie"})}}>
                            {/*<NXIcon icon={diagramCircle} fill='#424D78' />*/}
                        </NeoButton>
                        <h4>Круговая</h4>
                    </NeoCol>
                    <NeoCol span={5} className={'chooseCol'}>
                        <NeoButton className={'chooseButton'} size={'medium'}
                        onClick={()=>{this.setState({diagramType:"Line"})}}>
                            {/*<NXIcon icon={diagram} fill='#424D78' />*/}
                        </NeoButton>
                        <h4>График</h4>
                    </NeoCol>
                </NeoRow>
            </div>
            <div style={{border: 'solid 1px #F2F2F2', maxHeight:'298px', padding:'12px 40px'}}>
            <NeoRow className={'nameOfDiagram'}>
                <NeoInput width= 'none' placeholder='Название диаграммы' />
            </NeoRow>
                {(this.state.diagramType==="Line")?
            <NeoRow className={'Selects'}>
                    <NeoInput width= 'none' placeholder='Легенда'/>
            </NeoRow>
                    :""}
            <NeoRow gutter={16} className={'Selects'}>
                <NeoCol span={12}>
                    {this.getColumnSelectOptions("axisXColumnName", "Ось X")}
                </NeoCol>
                <NeoCol span={12}>
                    {this.getColumnSelectOptions("axisYColumnName", "Ось Y")}
                </NeoCol>
            </NeoRow>
                    {
                        (this.state.diagramType!=="Pie")?
            <NeoRow gutter={16} className={'Selects'}>
                <NeoCol span={12}>
                    {this.getInput("axisXLabel", "Подпись оси X")}
                </NeoCol>
                {/*<NeoCol span={12}>
                    {this.getColumnSelectOptions("axisXPosition","Положение оси X")}
                </NeoCol>*/}
            </NeoRow>
                        :""}
                    {
                        (this.state.diagramType!=="Pie")?
            <NeoRow gutter={16} className={'Selects'}>
                <NeoCol span={12}>
                    {this.getInput("axisYLabel", "Подпись оси Y")}
                </NeoCol>
                {/*<NeoCol span={12}>
                    {this.getColumnSelectOptions("axisYPosition","Положение оси Y")}
                </NeoCol>*/}
            </NeoRow>
                        :""
                    }
            <NeoRow className={'nameOfDiagram'}>
                {/*<NeoCol span={24}>
                    {this.getColumnSelectOptions("legendPosition", 'Положение легенды')}
                </NeoCol>*/}
            </NeoRow>
            </div>
            <div style={{minHeight:'34%'}}>

            </div>
            <div style={{backgroundColor: '#F2F2F2', padding:'16px 40px', height:'64px'}}>
            <NeoRow className={"bottomButtons"}>
                    <NeoCol span={5}><NeoButton size={'large'} className={'Buttons'}>Добавить</NeoButton></NeoCol>
                <NeoCol span={5}><NeoButton size={'large'} type={'secondary'} className={'Buttons'}>Очистить</NeoButton></NeoCol>
            </NeoRow>
            </div>
        </Form>
                    <div className='showCode'>
                        <button id='diagram' onClick={showCode}>Show Code</button>


                    <SyntaxHighlighter id='diagram' language='jsx' style={okaidia} >
                        {`import {NeoSelect, NeoButton, NeoInput, NeoRow, NeoCol, NeoIcon} from "neo-design";
import {Form} from "antd";

export default class DiagramsPage extends Component {

        state = {
            diagramType: "Block"
        }


    getColumnSelectOptions(id, placeHolder) {
         return <NeoSelect width='100%' placeholder={placeHolder}>
                    <option
                    value='parameter'
                    >
                        Опции
                    </option>
                </NeoSelect>
    };

    getInput(id, placeHolder) {
        return <NeoInput width='100%' value={placeHolder}/>
    };

    render() {  
        
        return(

            
            
        <Form style={{ height:'100vh', boxShadow:'0 0 5px #F2F2F2', width: '700px' }}>
            <div style={{display:'flex', alignItems: 'center', height:'53px', justifyContent:'space-between', padding: '16px 40px', border: '1px solid #F2F2F2'}}>
                <h3 style={{margin:'0'}}>Диаграммы</h3>
                {/*<NeoIcon icon={close}/>*/}
            </div>
            <div style={{height:'106px', padding:'24px 40px'}}>
                <NeoRow><h3>Выберите тип диаграммы</h3></NeoRow>
                <NeoRow className={'chooseRow'}>
                    <NeoCol span={7} className={'chooseCol'}>
                        <NeoButton className={'chooseButton'} size={'medium'}
                        onClick={()=>{this.setState({diagramType:"Block"})}}>
                        {/*<NXIcon icon={diagramBlock} fill='#424D78' />*/}
                        </NeoButton>
                        <h4>Гистограмма</h4>
                    </NeoCol>
                    <NeoCol span={7} className={'chooseCol'}>
                        <NeoButton className={'chooseButton'} size={'medium'}
                        onClick={()=>{this.setState({diagramType:"Bar"})}}>
                            {/*<NXIcon icon={barChart} fill='#424D78' />*/}
                        </NeoButton>
                        <h4>Линейчатая</h4>
                    </NeoCol>
                    <NeoCol span={5} className={'chooseCol'}>
                        <NeoButton className={'chooseButton'} size={'medium'}
                        onClick={()=>{this.setState({diagramType:"Pie"})}}>
                            {/*<NXIcon icon={diagramCircle} fill='#424D78' />*/}
                        </NeoButton>
                        <h4>Круговая</h4>
                    </NeoCol>
                    <NeoCol span={5} className={'chooseCol'}>
                        <NeoButton className={'chooseButton'} size={'medium'}
                        onClick={()=>{this.setState({diagramType:"Line"})}}>
                            {/*<NXIcon icon={diagram} fill='#424D78' />*/}
                        </NeoButton>
                        <h4>График</h4>
                    </NeoCol>
                </NeoRow>
            </div>
            <div style={{border: 'solid 1px #F2F2F2', maxHeight:'298px', padding:'12px 40px'}}>
            <NeoRow className={'nameOfDiagram'}>
                <NeoInput placeholder='Название диаграммы' />
            </NeoRow>
                {(this.state.diagramType==="Line")?
            <NeoRow className={'Selects'}>
                    <NeoInput placeholder='Легенда'/>
            </NeoRow>
                    :""}
            <NeoRow gutter={16} className={'Selects'}>
                <NeoCol span={12}>
                    {this.getColumnSelectOptions("axisXColumnName", "Ось X")}
                </NeoCol>
                <NeoCol span={12}>
                    {this.getColumnSelectOptions("axisYColumnName", "Ось Y")}
                </NeoCol>
            </NeoRow>
                    {
                        (this.state.diagramType!=="Pie")?
            <NeoRow gutter={16} className={'Selects'}>
                <NeoCol span={12}>
                    {this.getInput("axisXLabel", "Подпись оси X")}
                </NeoCol>
            </NeoRow>
                        :""}
                    {
                        (this.state.diagramType!=="Pie")?
            <NeoRow gutter={16} className={'Selects'}>
                <NeoCol span={12}>
                    {this.getInput("axisYLabel", "Подпись оси Y")}
                </NeoCol>
            </NeoRow>
                        :""
                    }
            <NeoRow className={'nameOfDiagram'}>
            </NeoRow>
            </div>
            <div style={{minHeight:'34%'}}>

            </div>
            <div style={{backgroundColor: '#F2F2F2', padding:'16px 40px', height:'64px'}}>
            <NeoRow className={"bottomButtons"}>
                    <NeoCol span={5}><NeoButton size={'large'} className={'Buttons'}>Добавить</NeoButton></NeoCol>
                <NeoCol span={5}><NeoButton size={'large'} type={'secondary'} className={'Buttons'}>Очистить</NeoButton></NeoCol>
            </NeoRow>
            </div>
        </Form>
    )
}
}
`}


                    </SyntaxHighlighter>
                </div>
                </section>
            </Fragment>
            )
    
}
}



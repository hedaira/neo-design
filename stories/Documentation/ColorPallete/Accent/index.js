import React, { Component, Fragment } from 'react';
import {NeoCol, NeoRow} from "../../../../components";

export default class AccentColorPageDoc extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <h1 className="title">Цвет</h1>
                <h2 className="title">Акцентные цвета</h2>
                <section className="example">

                    <p className="text">
                        Желтый - основной акцентный цвет.
                    </p>

                    <NeoRow>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>yellow-7</h4>
                            <div
                                style={{backgroundColor:'#B38136', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#B38136</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>yellow-6</h4>
                            <div
                                style={{backgroundColor:'#D9A54C', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <h4>Hover</h4>
                            </div>
                            <h5>#D9A54C</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>yellow-5</h4>
                            <div
                                style={{backgroundColor:'#FFCC66', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <h4>Default</h4>
                            </div>
                            <h5>#FFCC66</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>yellow-4</h4>
                            <div
                                style={{backgroundColor:'#FFDD8F', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#FFDD8F</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>yellow-3</h4>
                            <div
                                style={{backgroundColor:'#FFECB8', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#FFECB8</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>yellow-2</h4>
                            <div
                                style={{backgroundColor:'#FFF8E0', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#FFF8E0</h5>
                        </NeoCol>
                    </NeoRow>

                </section>
                <section className="example">

                    <p className="text">
                        Розовый - дополнительный акцентный цвет.
                    </p>

                    <NeoRow>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>magenta-8</h4>
                            <div
                                style={{backgroundColor:'#610231', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#610231</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>magenta-7</h4>
                            <div
                                style={{backgroundColor:'#870944', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#870944</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>magenta-6</h4>
                            <div
                                style={{backgroundColor:'#AD1457', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#AD1457</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>magenta-5</h4>
                            <div
                                style={{backgroundColor:'#BA346A', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#BA346A</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>magenta-4</h4>
                            <div
                                style={{backgroundColor:'#C75880', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#C75880</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>magenta-3</h4>
                            <div
                                style={{backgroundColor:'#D47F9B', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#D47F9B</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>magenta-2</h4>
                            <div
                                style={{backgroundColor:'#E0ABBB', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#E0ABBB</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>magenta-1</h4>
                            <div
                                style={{backgroundColor:'#EDDADF', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#EDDADF</h5>
                        </NeoCol>
                    </NeoRow>

                </section>
                <section className="example">

                    <p className="text">
                        Голубой и зеленый - дополнительные акцентные цвета, используются при необходимости.
                    </p>

                    <NeoRow>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>blue-8</h4>
                            <div
                                style={{backgroundColor:'#0E5A7D', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#0E5A7D</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>blue-7</h4>
                            <div
                                style={{backgroundColor:'#1A7CA3', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#1A7CA3</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>blue-6</h4>
                            <div
                                style={{backgroundColor:'#2AA2C9', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#2AA2C9</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>blue-5</h4>
                            <div
                                style={{backgroundColor:'#4FB9D6', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#4FB9D6</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>blue-4</h4>
                            <div
                                style={{backgroundColor:'#78CFE3', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#78CFE3</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>blue-3</h4>
                            <div
                                style={{backgroundColor:'#A5E5F0', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#A5E5F0</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>blue-2</h4>
                            <div
                                style={{backgroundColor:'#D7F8FC', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#D7F8FC</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>blue-1</h4>
                            <div
                                style={{backgroundColor:'#F0FEFF', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#F0FEFF</h5>
                        </NeoCol>
                    </NeoRow>
                    <br/>
                    <NeoRow>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>green-8</h4>
                            <div
                                style={{backgroundColor:'#0A2430', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#0A2430</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>green-7</h4>
                            <div
                                style={{backgroundColor:'#174557', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#174557</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>green-6</h4>
                            <div
                                style={{backgroundColor:'#27677C', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#27677C</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>green-5</h4>
                            <div
                                style={{backgroundColor:'#417A8A', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#417A8A</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>green-4</h4>
                            <div
                                style={{backgroundColor:'#5F8C96', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#5F8C96</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>green-3</h4>
                            <div
                                style={{backgroundColor:'#819EA3', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#819EA3</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>green-2</h4>
                            <div
                                style={{backgroundColor:'#A5AFB0', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#A5AFB0</h5>
                        </NeoCol>
                        <NeoCol span={2} style={{flexDirection:'column'}}>
                            <h4>green-1</h4>
                            <div
                                style={{backgroundColor:'#E7EEEF', width:'100%', height:'96px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            </div>
                            <h5>#E7EEEF</h5>
                        </NeoCol>
                    </NeoRow>
                </section>
            </Fragment>
        );
    }
}


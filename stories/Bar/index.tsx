import React, { Component, Fragment } from 'react';

import { NeoBar } from '../../components'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import showCode from "../../components/_utils/tools";

export default class BarsPage extends Component {
    render() {

        return (
            <Fragment>
                <h1 className="title">Bars</h1>

                <h2 className="title">Examples:</h2>

{/*                <section className="example">*/}
{/*                    <h3 className="ex-title">Calendar</h3>*/}
{/*                    <div>*/}
{/*                        <NeoBar type={'calendar'} />*/}
{/*                    </div>*/}

{/*                    <div className='showCode'>*/}
{/*                        <button id='calendar' onClick={showCode}>Show Code</button>*/}
{/*                        <SyntaxHighlighter id='calendar' language='jsx' style={okaidia} >*/}
{/*                            {`import React,{Component} from "react";*/}
{/*import {NXIcon, legend, print, arrowLeft, plus, calendar, table, NXButton, NXInputSearch, NXOption, NXSelect} from "neo-design";*/}
{/*import './index.css';*/}

{/*export default class NXCalendarBar extends Component {*/}
{/*  constructor(props) {*/}
{/*    super(props);*/}

{/*    this.state = {*/}
{/*      currentMonth: new Date(),*/}
{/*      fullScreenOn: false,*/}
{/*      years: [],*/}
{/*      calendarVisible: true,*/}
{/*      selectedValueInGrid: 'Системные заметки',*/}
{/*      searchValue: undefined,*/}
{/*    }*/}
{/*  }*/}

{/*  getYears() {*/}
{/*    const currentYear = new Date().getFullYear();*/}
{/*    let years = [];*/}
{/*    for (let i = -10; i <= 10; i++) {*/}
{/*      years.push(currentYear + i)*/}
{/*    }*/}
{/*    this.setState({years});*/}
{/*  };*/}

{/*  componentDidMount() {*/}
{/*    this.getYears();*/}
{/*  }*/}

{/*  handleCalendarVisible = () => {*/}
{/*    if (this.state.calendarVisible) {*/}
{/*      this.setState({calendarVisible: false});*/}
{/*    } else {*/}
{/*      this.setState({calendarVisible: true});*/}
{/*    }*/}
{/*  }*/}

{/*  render() {*/}
{/*    return (*/}
{/*        <div className='calendar__header'>*/}
{/*      <div id="selectInFullScreen" className="header row flex-middle">*/}
{/*        {*/}
{/*          this.state.calendarVisible &&*/}
{/*          <div className='calendarVisible' style={{display: "contents"}}>*/}
{/*            <div className="date">*/}
{/*              <NXButton>Сегодня</NXButton>*/}
{/*              <NXSelect className='selectYear'*/}
{/*                      width='100px'*/}
{/*                      getPopupContainer={() => document.getElementById ('selectInFullScreen')}*/}
{/*                      value={this.state.currentMonth.getFullYear()}>*/}
{/*                {*/}
{/*                        this.state.years.map((y) =>*/}
{/*                      <NXOption key={y} value={y}>{y}</NXOption>*/}
{/*                  )*/}
{/*                }*/}
{/*              </NXSelect>*/}
{/*              <NXSelect*/}
{/*                width='120px'*/}
{/*                className='selectMonth'*/}
{/*                getPopupContainer={() => document.getElementById ('selectInFullScreen')}*/}
{/*                onChange={(e) => {this.handleChange(e, 'month')}}>*/}
{/*                Месяц*/}
{/*              </NXSelect>*/}
{/*            </div>*/}

{/*            <div className="col col-start">*/}
{/*                  <NXIcon margin='8px auto' icon={arrowLeft} />*/}
{/*            </div>*/}
{/*            <div className="col-col-center">*/}
{/*                    <span className="col-text">Месяц</span>*/}
{/*            </div>*/}
{/*            <div className="col col-end" >*/}
{/*                  <NXIcon margin='8px auto' rotate={100} icon={arrowLeft} />*/}
{/*            </div>*/}
{/*                <NXIcon big margin='auto' icon={legend} />*/}
{/*          </div>*/}
{/*        }*/}
{/*        {*/}
{/*          !this.state.calendarVisible &&*/}
{/*          <div className='tableVisible' style={{display: "contents"}}>*/}
{/*              <div style={{flexGrow: 1}}>*/}
{/*                <NXInputSearch width='185px'/>*/}
{/*              </div>*/}
{/*              <NXSelect*/}
{/*                width='180px'*/}
{/*                getPopupContainer={() => document.getElementById('selectInFullScreen')}*/}
{/*                value={this.state.selectedValueInGrid}>*/}
{/*                <NXOption key={'Системные заметки'} value={'Системные заметки'}>Системные заметки</NXOption>*/}
{/*              </NXSelect>*/}
{/*          </div>*/}
{/*        }*/}
{/*      <div className="verticalLine" />*/}
{/*      <NXIcon big icon={plus} fill='#5E6785' />*/}
{/*      <div className="verticalLine" />*/}
{/*        <NXIcon icon={calendar} fill='#5E6785' className='handleCalendarVisible' onClick={this.handleCalendarVisible}*/}
{/*        style={{*/}
{/*          border: this.state.calendarVisible ? '1px solid #FFCC66' : '1px solid #424D78',*/}
{/*          background: this.state.calendarVisible ? '#FFF8E0' : '#FFFFFF',*/}
{/*          pointerEvents: this.state.calendarVisible ? 'none' : 'auto',*/}
{/*          marginRight: '8px'*/}
{/*        }}*/}
{/*        />*/}
{/*      <NXIcon icon={table} fill='#5E6785' className='handleCalendarVisible' onClick={this.handleCalendarVisible}*/}
{/*      style={{*/}
{/*        border: this.state.calendarVisible ? '1px solid #424D78' : '1px solid #FFCC66',*/}
{/*        background: this.state.calendarVisible ? '#FFFFFF' : '#FFF8E0',*/}
{/*        pointerEvents: !this.state.calendarVisible ? 'none' : 'auto'*/}
{/*      }}*/}
{/*      />*/}
{/*      <div className="verticalLine" />*/}
{/*      <NXIcon icon={print} big fill='#5E6785' />*/}
{/*      </div>*/}
{/*        </div>*/}
{/*    );*/}
{/*  }*/}
{/*}*/}

{/*`}*/}
{/*                        </SyntaxHighlighter>*/}
{/*                    </div>*/}

{/*                </section>*/}
                <section className="example">
                    <h3 className="ex-title">FunctionalBar</h3>
                    <div>
                        <NeoBar type={'functional'} />
                    </div>

                    <div className='showCode'>
                        <button id='functionalBar' onClick={showCode}>Show Code</button>
                        <SyntaxHighlighter id='functionalBar' language='jsx' style={okaidia} >
                            {`import React, {Component} from 'react';
import {NeoIcon, NeoInput, NeoSelect} from "neo-design/lib";

export default class NeoBar extends Component {

    render() {
        return (
            <div className='functionalBar__header'>

                <div className='block'>
                    <NeoInput width='192px' type={'search'} />
                    <div className='verticalLine' />
                    <NeoIcon icon={'plus'} />
                    <div className='verticalLine' />
                    <NeoIcon icon={'filter'} />
                    <NeoIcon icon={'sort'} />
                    <div className='verticalLine' />
                    <NeoIcon icon={'calculator'} />
                    <NeoIcon icon={'plusBlock'} />
                    <NeoIcon icon={'barChart'} />
                    <NeoIcon icon={'add'} />
                    <div className='verticalLine' />
                    <NeoIcon icon={'mark'} />
                    <div className='verticalLine' />
                </div>

                <div className='block'>
                    <span className='caption'>Версия</span>
                    <NeoSelect width='185px' defaultValue='default'>
                        <option value='default'>
                            По умолчанию
                        </option>
                    </NeoSelect>
                    <div className='verticalLine' />
                    <NeoIcon icon={'download'} />
                    <NeoIcon icon={'print'} />
                    <NeoIcon icon={'fullScreen'} />
                </div>

            </div>
        );
    }
}

`}
                        </SyntaxHighlighter>
                    </div>

                </section>
                <section className="example">
                    <h3 className="ex-title">DiagramBar</h3>
                    <div>
                        <NeoBar type={'diagram'} />
                    </div>

                    <div className='showCode'>
                        <button id='diagramBar' onClick={showCode}>Show Code</button>
                        <SyntaxHighlighter id='diagramBar' language='jsx' style={okaidia} >
                            {`import React, {Component} from 'react';
import {NeoIcon, NeoSelect} from 'neo-design/lib';

export default class NeoBar extends Component {

    render() {
        return (
            <div className='functionalBar__header'>
                <div className='block'>
                    <a>
                        <NeoIcon icon={'arrowLong'} />
                        <span>Вернуться к таблице</span>
                    </a>
                    <div className='verticalLine' />
                    <NeoIcon icon={'plus'} />
                    <NeoIcon icon={'edit'} />
                    <div className='verticalLine' />
                    <NeoIcon icon={'mark'} />
                    <NeoIcon icon={'rubbish'} />
                    <div className='verticalLine' />
                </div>

                <div className='block'>
                    <span className='caption'>Версия</span>
                    <NeoSelect width='185px' defaultValue='default'>
                        <option value='default'>
                            По умолчанию
                        </option>
                    </NeoSelect>
                    <div className='verticalLine' />
                    <NeoIcon icon={'download'} />
                    <NeoIcon icon={'print'} />
                    <NeoIcon icon={'fullScreen'} />
                </div>
            </div>
        );
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


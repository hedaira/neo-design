import React, { Component, Fragment } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoHint, NeoSwitch, NeoDrawer, NeoButton} from '../../components/'

export default class ComponentsPage extends Component {
    state = {
        visible: false,
    }

    showDrawer = () => {
        this.setState({visible: true})
    };

    onClose = () => {
        this.setState({visible: false})
    };
    onSubmit = () => {
        this.setState({visible: false})
    }

    render() {
        return (
            <Fragment>
                <h1 className="title">Components</h1>

                <section className="example">
                    <div className='flex-column'>
                        <h3 className="ex-title">Hint</h3><br/>
                        <NeoHint title='Hint example'>Hover me</NeoHint>
                        <SyntaxHighlighter language='jsx' style={okaidia} >
                            {`import { NeoHint } from "neo-design/lib";

<NeoHint title='Hint example'>Hover me</NeoHint>
`}
                        </SyntaxHighlighter>
                    </div>
                </section>


                <section className="example">
                    <div className='flex-column'>
                        <h3 className="ex-title">Switcher</h3><br/>
                        <NeoSwitch/>
                        <SyntaxHighlighter language='jsx' style={okaidia} >
                            {`import { NeoSwitch } from "neo-design/lib";

 <NeoSwitch/>
`}
                        </SyntaxHighlighter>
                    </div>
                </section>

                <section className="example">
                    <div className='flex-column'>
                        <h3 className="ex-title">Drawer</h3><br/>
                            <NeoButton onClick={this.showDrawer} style={{width: '150px'}}>
                                Open Drawer
                            </NeoButton>
                            <NeoDrawer
                                title={'This is drawer title'}
                                visible={this.state.visible}
                                onClose={this.onClose}
                                width={720}>
                                <h1>Content</h1>
                                <div style={{
                                    position: 'absolute',
                                    right: 0,
                                    bottom: '80px',
                                    width: '100%',
                                    borderTop: '1px solid #e9e9e9',
                                    padding: '16px 40px',
                                    background: '#F2F2F2',
                                    textAlign: 'left',
                                }}>
                                    <NeoButton onClick={this.onSubmit} style={{marginRight:'16px'}}>
                                        Применить
                                    </NeoButton>
                                    <NeoButton type={'secondary'} onClick={this.onClose}>
                                        Отменить
                                    </NeoButton>
                                </div>
                            </NeoDrawer>
                        <SyntaxHighlighter language='jsx' style={okaidia} >
                            {`import { NeoDrawer, NeoButton } from "neo-design/lib";

state = {
    visible: false,
}

showDrawer = () => {
    this.setState({visible: true})
};

onClose = () => {
    this.setState({visible: false})
};

onSubmit = () => {
    this.setState({visible: false})
} 

return (
    <NeoButton onClick={this.showDrawer} style={{width: '150px'}}>
        Open Drawer
    </NeoButton>
    <NeoDrawer
        title={'This is drawer title'} 
        visible={this.state.visible} 
        onClose={this.onClose} 
        width={720}>
        <h1>Content</h1>
        <div style={{
            position: 'absolute',
            right: 0,
            bottom: '80px',
            width: '100%',
            borderTop: '1px solid #e9e9e9',
            padding: '16px 40px',
            background: '#F2F2F2',
            textAlign: 'left',
        }}>
            <NeoButton onClick={this.onSubmit} style={{marginRight:'16px'}}>
                Применить
            </NeoButton>
            <NeoButton type={'secondary'} onClick={this.onClose}>
                Отменить
            </NeoButton>   
        </div>
    </NeoDrawer>
)
`}
                        </SyntaxHighlighter>
                    </div>
                </section>

            </Fragment>
        );
    }
}


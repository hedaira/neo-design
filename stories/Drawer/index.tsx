import React, { Fragment } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoButton, NeoDrawer} from "../../components";
import showCode from "../../components/_utils/tools";
import {PropsTab} from "../../components/_utils/PropsTab";

export default class DrawerPage extends React.Component {
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
        const data = [{name:'type', default:'-', description:"Тип", value: "'success' | 'info' | 'error'"},
            {name:'title', default:'-', description:'Заголовок', value: 'String'},
            {name:'visible', default:'false', description:'visible', value: 'true / false'},
            {name:'width', default:'-', description:'Ширина', value: 'String'},
            {name:'footer', default:'-', description:"Содержание footer'a", value: 'ReactNode'}];

        return (
            <Fragment>
                <h1 className="title">Drawer</h1>

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
                            footer={<>
                                <NeoButton onClick={this.onSubmit} style={{marginRight:'16px'}}>
                                    Применить
                                </NeoButton>
                                <NeoButton type={'secondary'} onClick={this.onClose}>
                                    Отменить
                                </NeoButton>
                            </>}
                            width={720}>
                            <h1>Content</h1>
                        </NeoDrawer>
                        <div className='showCode'>
                            <NeoButton style={{width: '170px'}} id='Drawer' onClick={showCode}>Show Code</NeoButton>
                        <SyntaxHighlighter id='Drawer' language='jsx' style={okaidia} >
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
                    </div>
                </section>
                <PropsTab dataSource={data} size="middle" pagination={false}/>

            </Fragment>
        );
    }
}


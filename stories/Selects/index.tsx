import React, {Fragment} from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoButton, NeoOption, NeoSelect} from "../../components";
import showCode from "../../components/_utils/tools";
import {PropsTab} from "../../components/_utils/PropsTab";

export default class SelectsPage extends React.Component {
    state = {}


    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    onFinish = values => {
        console.log('Success:', values);
    };

    render() {
        const data = [{name:'width', default:'185px', description:'Ширина', value: 'String'},
            {name:'title', default:'false', description:'Заголовок', value: 'String'},
            {name:'titleOrientation', default:'false', description:'Ориентация заголовка', value: '"Top" | "Right" | "Bottom" | "Left"'},
            {name:'allowClear', default:'false', description:'Очистить поле', value: 'true / false'},
            {name:'showSearch', default:'false', description:'Добавить иконку поиска', value: 'true / false'},
            {name:'maxTagCount', default:'-', description:'Максимальное количество отображаемых тегов', value: 'Number'},
            {name:'maxTagPlaceholder', default:'-', description:'Заполнитель, чтобы не отображать все теги', value: 'ReactNode'},
            {name:'maxTagTextLength', default:'-', description:'Максимальная длина текста тега для отображения', value: 'Number'},
            {name:'getPopupContainer', default: '-', description:"Контейнер в котором будет отображаться дроп даун select'а", value: 'function(e)'},
            {name:'required', default:'false', description:'Обязательное поле(добавляет звездочку)', value: 'true / false'}
            ];

        return (
            <Fragment>

              {/* <section>
                   <Form

                       name="basic"
                       initialValues={{ remember: true }}
                       onFinish={this.onFinish}
                       onFinishFailed={this.onFinishFailed}
                   >
                       <Form.Item
                           label="Username"
                           name="username"
                           rules={[{ required: true, message: 'Please input your username!' }]}
                       >
                           <Input />
                       </Form.Item>

                       <Form.Item
                           label="Password"
                           name="password"
                           rules={[{ required: true, message: 'Please input your password!' }]}
                       >
                           <Input.Password />
                       </Form.Item>

                       <Form.Item  name="remember" valuePropName="checked">
                           <Checkbox>Remember me</Checkbox>
                       </Form.Item>

                       <Form.Item >
                           <Button type="primary" htmlType="submit">
                               Submit
                           </Button>
                       </Form.Item>
                   </Form>




               </section>*/}



                <h1 className="title">Selects</h1>

                <section className="example">

                    <h4>Default with text</h4>
                    <div>
                        <NeoSelect placeholder={'lucy'}>
                            <NeoOption value="lucy">Lucy</NeoOption>
                            <NeoOption value="jack">Jack</NeoOption>
                            <NeoOption value="john">John</NeoOption>
                        </NeoSelect>
                    </div>
                    <div className='showCode'>
                        <NeoButton style={{width: '170px'}} id='Selects' onClick={showCode}>Show Code</NeoButton>
                    <SyntaxHighlighter id='Selects' language='jsx' style={okaidia} >
                        {`import { NeoSelect, NeoOption } from "neo-design/lib";

<NeoSelect defaultValue="lucy">
    <option value="lucy">Lucy</option>
    <option value="jack">Jack</option>
    <option value="john">John</option>
</NeoSelect>`}
                    </SyntaxHighlighter>
                    </div>

                <br/>

                    <br/>
                    <h4>Select with title</h4>
                    <div>
                        <NeoSelect required title="Person" titleOrientation={"Top"} placeholder={'lucy'}>
                            <NeoOption value="lucy">Lucy</NeoOption>
                            <NeoOption value="jack">Jack</NeoOption>
                            <NeoOption value="john">John</NeoOption>
                        </NeoSelect>
                        <br/>
                        <br/>
                        <br/>
                        <NeoSelect required title="Person" titleOrientation={"Left"} placeholder={'lucy'}>
                            <NeoOption value="lucy">Lucy</NeoOption>
                            <NeoOption value="jack">Jack</NeoOption>
                            <NeoOption value="john">John</NeoOption>
                        </NeoSelect>
                    </div>
                    <div className='showCode'>
                        <NeoButton style={{width: '170px'}} id='SelectsTitle' onClick={showCode}>Show Code</NeoButton>
                        <SyntaxHighlighter id='SelectsTitle' language='jsx' style={okaidia} >
                            {`import { NeoSelect, NeoOption } from "neo-design/lib";

<NeoSelect required title="Person" titleOrientation={"Top"} placeholder={'lucy'}>
    <NeoOption value="lucy">Lucy</NeoOption>
    <NeoOption value="jack">Jack</NeoOption>
    <NeoOption value="john">John</NeoOption>
</NeoSelect>
<NeoSelect required title="Person" titleOrientation={"Left"} placeholder={'lucy'}>
    <NeoOption value="lucy">Lucy</NeoOption>
    <NeoOption value="jack">Jack</NeoOption>
    <NeoOption value="john">John</NeoOption>
</NeoSelect>`}
                        </SyntaxHighlighter>
                    </div>

                    <h4>Select with tags</h4>
                    <div>
                        <NeoSelect
                            allowClear={true}
                            mode={"tags"}
                            width={'670px'}
                            placeholder={"Выберите из списка"}
                        >
                            <NeoOption value="lucy">Lucy</NeoOption>
                            <NeoOption value="jack">Jack</NeoOption>
                            <NeoOption value="john">John</NeoOption>
                        </NeoSelect>
                    </div>
                    <div className='showCode'>
                        <NeoButton style={{width: '170px'}} id='Selects' onClick={showCode}>Show Code</NeoButton>
                        <SyntaxHighlighter id='Selects' language='jsx' style={okaidia} >
                            {`import { NeoSelect, NeoOption } from "neo-design/lib";

<NeoSelect defaultValue="lucy">
    <NeoOption value="lucy">Lucy</NeoOption>
    <NeoOption value="jack">Jack</NeoOption>
    <NeoOption value="john">John</NeoOption>
</NeoSelect>`}
                        </SyntaxHighlighter>
                    </div>
                </section>
                <PropsTab dataSource={data} size="middle" pagination={false}/>
            </Fragment>
        );
    }
}


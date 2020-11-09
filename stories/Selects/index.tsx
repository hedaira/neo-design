import React, {Fragment} from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoButton, NeoSelect} from "../../components";
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
        const data = [{name:'width', default:'185px', description:'Ширина'},
            {name:'allowClear', default:'false', description:'Очистить поле'},
            {name:'showSearch', default:'false', description:'Добавить иконку поиска'}];

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
                            <option value="lucy">Lucy</option>
                            <option value="jack">Jack</option>
                            <option value="john">John</option>
                        </NeoSelect>
                    </div>
                    <div className='showCode'>
                        <NeoButton style={{width: '170px'}} id='Selects' onClick={showCode}>Show Code</NeoButton>
                    <SyntaxHighlighter id='Selects' language='jsx' style={okaidia} >
                        {`import { NeoSelect } from "neo-design/lib";

<NeoSelect defaultValue="lucy">
    <option value="lucy">Lucy</option>
    <option value="jack">Jack</option>
    <option value="john">John</option>
</NeoSelect>`}
                    </SyntaxHighlighter>
                    </div>
                </section>
                <PropsTab dataSource={data} size="middle" pagination={false}/>

            </Fragment>
        );
    }
}


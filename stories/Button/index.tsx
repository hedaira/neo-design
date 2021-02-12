import * as React from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {NeoButton, NeoColor, NeoTable} from '../../components/index'
import {NeoIcon} from "neo-icon/lib";
import showCode from "../../components/_utils/tools";
import {PropsTab} from "../../components/_utils/PropsTab";

export default class ButtonPage extends React.Component {
  render() {

      const data = [{name:'type', default:"'primary'", description:"Тип кнопки", value: "'primary' | 'disabled' | 'secondary' | 'link' | 'ghost' | 'circle' | 'square'"},
          {name:'size', default:'-', description:"Размер текста внутри кнопки", value: "'medium' | 'large'"},
          {name:'color', default:'-', description:"Цвет текста внутри кнопки", value: "'blue' | 'white' | hex/rgb/rgba"},
          {name:'disabled', default:'false', description:'Кнопка, запрещающая выполнение действия', value: 'true / false'},
          {name:'hidden', default:'false', description:'Отображать ли кнопку', value: 'true / false'},
          {name:'suffixIcon', default:'-', description:'Применяется, если кнопка содержит в себе иконку', value: '<NeoIcon icon="..." />'}];

    return (
      <React.Fragment>
        <h1 className="title">Кнопки</h1>
        <h2 className="title">Когда использовать</h2>
        <p className="text">
            Кнопка - это элемент интерфейса для совершения действия. С помощью кнопки пользователь взаимодействует и интерфейсом.
        </p>

          <h2 className="title">Отличие кнопки от ссылки</h2>

          <p className="text">
              Есть несколько способов показать, что надпись является ссылкой. Это может быть цвет, подчеркивание, положение ссылки, или просто сам текст (например, «Читать дальше»).
              Кнопка третичного вида визуально почти не отличается от ссылки, но основное отличие в том, что ссылка, как правило - это переход на сторонний сайт, ресурс, документ. Кнопка третичного вида не перебрасывает пользователя никуда и не прерывает сценарий взаимодействия с интерфейсом.
          </p>

          <h2 className="title">Название</h2>

          <p className="text">
              Назвать кнопки стоит по тому действию, которое произойдет при нажатии.<br/>
              Названия кнопок с большой буквы.<br/>
              Название не должно быть в две строчки.<br/>
              Если мы называем первичную кнопку «Сохранить», то вторичную кнопку мы должны назвать, например, «Отменить» ( не «Отмена»)<br/>
              <br/>
              Нельзя сокращать название кнопки.<br/>
              <br/>
              При необходимости можно дополнять кнопку иконкой, если она не противоречит смысловой нагрузки, которую несет кнопка и не мешает пользователю.
          </p>

          <h2 className="title">Как использовать</h2>
          <SyntaxHighlighter language='jsx' style={okaidia} >
              {`import NeoButton from 'neo-design/lib';`}
          </SyntaxHighlighter>

        <h2 className="title">Примеры:</h2>
        <section className="example">
          <div>
            <NeoButton className='ml20'>
              Primary
            </NeoButton>

              <NeoButton type={'secondary'} className="ml20">
                  Default
              </NeoButton>

            <NeoButton type={'disabled'} className="ml20">
              Disabled
            </NeoButton>

              <NeoButton type={'link'} className="ml20" style={{color: NeoColor.blue_7}}>
                  Link
              </NeoButton>

              <NeoButton type={'ghost'} className="ml20" style={{color: NeoColor.blue_7}}>
                  Ghost
              </NeoButton>

              <NeoButton className={'ml20'} type={'circle'}>
                  <NeoIcon icon={"gear"} color={'white'}/>
              </NeoButton>

              <NeoButton className={'ml20'} type={'square'}>
                  <NeoIcon icon={"plus"} size={'m'} color={'white'}/>
              </NeoButton>

              <NeoButton className={'ml20'} type={'ghost-icon'}>
                  <NeoIcon icon={"plus"} size={'m'} color={'#2A356C'}/>
              </NeoButton>

          </div>
            <div className='showCode'>
                <NeoButton  id='ButtonTypes' style={{width: '170px'}} onClick={showCode}>Show code</NeoButton>
                <SyntaxHighlighter id='ButtonTypes' language='jsx' style={okaidia} >
                    {`import {NeoButton} from 'neo-design/lib';

<NeoButton> Primary </NeoButton>

<NeoButton type={'secondary'}> Default </NeoButton>

<NeoButton type={'disabled'}> Disabled </NeoButton>

<NeoButton type={'link'}> Link </NeoButton>

<NeoButton type={'ghost'}> Ghost </NeoButton>

<NeoButton type={'circle'}>
  <NeoIcon icon={"gear"} color={'white'} />
</NeoButton>

<NeoButton className={'ml20'} type={'square'}>
  <NeoIcon icon={"plus"} size={'m'} color={'white'}/>
</NeoButton>

<NeoButton className={'ml20'} type={'ghost-icon'}>
  <NeoIcon icon={"plus"} size={'m'} color={'#2A356C'}/>
</NeoButton>`}
                </SyntaxHighlighter>
            </div>
        </section>

          <section className="example">
              <div>
                  <NeoButton className='ml20'
                             suffixIcon={<NeoIcon icon={"arrowLong"} color={NeoColor.grey_1}/>}
                  >
                      Primary
                  </NeoButton>

                  <NeoButton type={'secondary'} className="ml20"
                             suffixIcon={<NeoIcon icon={"arrowLong"} color={NeoColor.violete_6}/>}
                  >
                      Default
                  </NeoButton>

                  <NeoButton type={'disabled'} className="ml20"
                             suffixIcon={<NeoIcon icon={"arrowLong"} color={NeoColor.grey_1}/>}
                  >
                      Disabled
                  </NeoButton>

                  <NeoButton type={'link'} className="ml20" style={{color: NeoColor.blue_7}}
                             suffixIcon={<NeoIcon icon={"arrowLong"} color={NeoColor.blue_7}/>}
                  >
                      Link
                  </NeoButton>

                  <NeoButton type={'ghost'} className="ml20" style={{color: NeoColor.blue_7}}
                             suffixIcon={<NeoIcon icon={"arrowLong"} color={NeoColor.blue_7}/>}
                  >
                      Ghost
                  </NeoButton>
              </div>
              <div className='showCode'>
                  <NeoButton  id='ButtonIcon' style={{width: '170px'}} onClick={showCode}>Show code</NeoButton>
                  <SyntaxHighlighter id='ButtonIcon' language='jsx' style={okaidia} >
                      {`import {NeoButton, NeoColor} from 'neo-design/lib'
import {NeoIcon} from "neo-icon/lib";

<NeoButton suffixIcon={<NeoIcon icon={"arrowLong"} color={NeoColor.grey_1}/>} > Primary </NeoButton>

<NeoButton type={'secondary'} suffixIcon={<NeoIcon icon={"arrowLong"} color={NeoColor.violete_6}/>} > Default </NeoButton>

<NeoButton type={'disabled'} suffixIcon={<NeoIcon icon={"arrowLong"} color={NeoColor.grey_1}/>} > Disabled </NeoButton>

<NeoButton type={'link'} suffixIcon={<NeoIcon icon={"arrowLong"} color={NeoColor.blue_7}/>} > Link </NeoButton>

<NeoButton type={'ghost'} suffixIcon={<NeoIcon icon={"arrowLong"} color={NeoColor.blue_7}/>} > Ghost </NeoButton>`}
                  </SyntaxHighlighter>
              </div>
          </section>
          <PropsTab dataSource={data} size="middle" pagination={false}/>

      </React.Fragment>
    );
  }
}


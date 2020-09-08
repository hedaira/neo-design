import React, { Component, Fragment } from 'react';
import {NeoCol, NeoRow, NeoTypography} from "../../../components";
import {okaidia} from "react-syntax-highlighter/dist/esm/styles/prism";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";

const marginBottom = '20px';
export default class TypographyPageDoc extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <NeoTypography type={'h1-regular'} className="title">Типографика и текст в интерфейсах</NeoTypography>

                <h2 className="title">Как использовать</h2>
                <SyntaxHighlighter language='jsx' style={okaidia} >
                    {`import NeoTypography from 'neo-design/lib';`}
                </SyntaxHighlighter>

                <section className="example">
                    <p className="text">
                        <NeoTypography type={'h3-medium'}>Шрифт -  Roboto</NeoTypography>
                    </p>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'h1-regular'}>56px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h1-regular'}>H1</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h1-regular'}>Text</NeoTypography>
                        </NeoCol>

                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'h2-medium'}>32px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h2-medium'}>H2/medium</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h2-medium'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'h2-regular'}>32px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h2-regular'}>H2/regular</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h2-regular'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'h3-medium'}>20px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h3-medium'}>H3/medium</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h3-medium'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'h3-regular'}>20px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h3-regular'}>H3/regular</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h3-regular'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4-medium'}>16px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4-medium'}>H4/medium</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4-medium'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4-regular'}>16px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4-regular'}>H4/regular</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4-regular'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4-light'}>16px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4-light'}>H4/light</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'h4-light'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'body-medium'}>14px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body-medium'}>body/medium</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body-medium'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'body-regular'}>14px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body-regular'}>body/regular</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body-regular'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'body-light'}>14px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body-light'}>body/light</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body-light'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'body-link'}>14px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body-link'}>body/link</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body-link'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'body-bold'}>14px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body-bold'}>body/bold</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'body-bold'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture-regular'}>12px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture-regular'}>capture/regular</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture-regular'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture-medium'}>12px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture-medium'}>capture/medium</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture-medium'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture-link'}>12px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture-link'}>capture/link</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture-link'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <NeoRow style={{marginBottom: marginBottom}}>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture-light'}>12px</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture-light'}>capture/light</NeoTypography>
                        </NeoCol>
                        <NeoCol span={8}>
                            <NeoTypography type={'capture-light'}>Text</NeoTypography>
                        </NeoCol>
                    </NeoRow>
                    <SyntaxHighlighter language='jsx' style={okaidia} >
                        {`import {NeoCol, NeoRow, NeoTypography} from "neo-design/lib";
const marginBottom = '20px';

<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'h1-regular'}>56px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h1-regular'}>H1</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h1-regular'}>Text</NeoTypography>
    </NeoCol>

</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'h2-medium'}>32px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h2-medium'}>H2/medium</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h2-medium'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'h2-regular'}>32px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h2-regular'}>H2/regular</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h2-regular'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'h3-medium'}>20px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h3-medium'}>H3/medium</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h3-medium'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'h3-regular'}>20px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h3-regular'}>H3/regular</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h3-regular'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'h4-medium'}>16px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h4-medium'}>H4/medium</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h4-medium'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'h4-regular'}>16px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h4-regular'}>H4/regular</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h4-regular'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'h4-light'}>16px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h4-light'}>H4/light</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'h4-light'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'body-medium'}>14px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body-medium'}>body/medium</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body-medium'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'body-regular'}>14px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body-regular'}>body/regular</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body-regular'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'body-light'}>14px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body-light'}>body/light</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body-light'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'body-link'}>14px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body-link'}>body/link</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body-link'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'body-bold'}>14px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body-bold'}>body/bold</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'body-bold'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'capture-regular'}>12px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'capture-regular'}>capture/regular</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'capture-regular'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'capture-medium'}>12px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'capture-medium'}>capture/medium</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'capture-medium'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'capture-link'}>12px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'capture-link'}>capture/link</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'capture-link'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>
<NeoRow style={{marginBottom: marginBottom}}>
    <NeoCol span={8}>
        <NeoTypography type={'capture-light'}>12px</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'capture-light'}>capture/light</NeoTypography>
    </NeoCol>
    <NeoCol span={8}>
        <NeoTypography type={'capture-light'}>Text</NeoTypography>
    </NeoCol>
</NeoRow>`}
                    </SyntaxHighlighter>
                </section>
            </Fragment>
        );
    }
}


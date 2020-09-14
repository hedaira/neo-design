import * as React from 'react';
import {storiesOf} from '@storybook/react';
import 'antd/dist/antd.css';
import '../stories/index.css';
import '../components/style/neoStories.less';

import DescriptionPageDoc from "./Documentation/Description";
import GridPageDoc from "../stories/Documentation/Grid";
import TypographyPageDoc from "../stories/Documentation/Typography";
import ColorPageDoc from "../stories/Documentation/Color";
import ButtonPage from "../stories/Button";
import IconPage from "../stories/Icon";
import InputPage from "../stories/Input";
import BarsPage from "../stories/Bar";
import TablesPage from "./Table";
import TabsPage from "./Tabs";
import ComponentsPage from "./Other";
// import AlertPage from "./Feedback/Alert";
import AlertPage from "./Alert";
import ModalPage from "./Modal";
import DiagramsPage from "./Diagrams";
// import ModalPage from "./Feedback/Modal";

/*Documentation*/
storiesOf('Documentation|Description', module)
    .add('Description', () => <DescriptionPageDoc />)

storiesOf('Documentation|Grid', module)
    .add('Grid', () => <GridPageDoc />)

storiesOf('Documentation|Typography', module)
    .add('Typography', () => <TypographyPageDoc />)

storiesOf('Documentation|Color', module)
    .add('Colors', () => <ColorPageDoc />)

/*General*/
storiesOf('General|Buttons', module)
    .add('Buttons', () => <ButtonPage />)

storiesOf('General|Icons', module)
    .add('Icons', () => <IconPage />)

storiesOf('General|Inputs', module)
    .add('Inputs', () => <InputPage />)

storiesOf('General|Bars', module)
    .add('FunctionalBars', () => <BarsPage />)

storiesOf('General|Diagrams', module)
    .add('Diagrams', () => <DiagramsPage />)

storiesOf('General|Tables', module)
    .add('Tables', () => <TablesPage />)

storiesOf('General|Tabs', module)
    .add('Tabs', () => <TabsPage />)

// /*Feedback*/
 storiesOf('Feedback|Alerts', module)
     .add('Alerts', () => <AlertPage />)

 storiesOf('Feedback|Modal', module)
     .add('Modal', () => <ModalPage />)
//
/*Others*/
storiesOf('Others|Components', module)
    .add('Components', () => <ComponentsPage />)

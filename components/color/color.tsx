import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'

export interface ColorProps {
}

const presetPrimaryColors: { [key: string]: string } = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1890FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666',
};

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<ColorProps & React.RefAttributes<HTMLElement>> {}

const InternalColor: React.ForwardRefRenderFunction<unknown, ColorProps> = (props) => {
    const {} = props;
    return (
        <button>

        </button>
    )

};

const Color = React.forwardRef<unknown, ColorProps>(InternalColor) as CompoundedComponent;

Color.displayName = 'NeoColor';

Color.defaultProps = {
};

export default Color



import * as React from 'react';
import classNames from 'classnames';
import {tuple} from '../_utils/tools'
import {NeoInput, NeoSelect, NeoButton} from "../index";
import {NeoIcon} from "neo-icon/lib";

const BarTypes = tuple('functional', 'diagram', 'calendar');
export type BarType = typeof BarTypes[number];

export interface BarProps {
    type?: BarType;
    title?: string;
    className?: string;
    children?: React.ReactNode;
    style?;
    disabled?;
    color?;
}

const prefix = 'bar';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<BarProps & React.RefAttributes<HTMLElement>> {}

const InternalButton: React.ForwardRefRenderFunction<unknown, BarProps> = (props) => {
    const {
        type,
        className,
        children
    } = props;

    const classes = classNames(
        prefix,
        {
            [`${prefix}-${type}`]: type,
        },
        className
    );

    if (props.type === 'functional') {
        return (
            <div className='functionalBar__header'>

                <div className='block'>
                    <NeoInput type={'search'} width='192px' />
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

    if (props.type === 'diagram') {
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

};

const NeoBar = React.forwardRef<unknown, BarProps>(InternalButton) as CompoundedComponent;

NeoBar.displayName = 'NeoBar';

NeoBar.defaultProps = {
};

export default NeoBar

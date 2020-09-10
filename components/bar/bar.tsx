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
                   {/* <div className='verticalLine' />
                    <NeoIcon icon={'plus'} />*/}
                    <div className='verticalLine' />
                    <NeoIcon icon={'filter'} size={"m"} style={{marginTop: "4px"}} color={'#5E6785'}/>
                    <NeoIcon icon={'sort'} size={"m"} style={{marginLeft: "4px", marginTop: "4px"}} color={'#5E6785'}/>
                    <div className='verticalLine' />
                    <NeoIcon icon={'calculator'} size={"m"} style={{marginTop: "4px"}} color={'#5E6785'}/>
                    <NeoIcon icon={'plusBlock'} size={"m"} style={{marginLeft: "4px", marginTop: "4px"}} color={'#5E6785'} />
                    <NeoIcon icon={'barChart'} size={"m"} style={{marginLeft: "4px", marginTop: "4px"}} color={'#5E6785'}/>
                    <NeoIcon icon={'add'} size={"m"} style={{marginLeft: "4px", marginTop: "4px"}} color={'#5E6785'} />
                    <div className='verticalLine' />
                    <NeoIcon icon={'mark'} size={"m"} style={{marginTop: "4px"}} color={'#5E6785'}/>
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
                    <NeoIcon icon={'download'} size={"m"} style={{marginTop: "4px"}} color={'#5E6785'} />
                    <NeoIcon icon={'print'} size={"m"} style={{marginLeft: "4px", marginTop: "4px"}} color={'#5E6785'} />
                    <NeoIcon icon={'fullScreen'} size={"m"} style={{marginLeft: "4px", marginTop: "4px"}} color={'#5E6785'} />
                </div>

            </div>
        );
    }

    if (props.type === 'diagram') {
        return (
            <div className='functionalBar__header'>
                <div className='block'>
                    <a>
                        <NeoIcon icon={'arrowLong'} style={{marginTop: "4px"}} color={'#5E6785'} />
                        <span style={{marginLeft: "9.33px"}}>Вернуться к таблице</span>
                    </a>
                    <div className='verticalLine' />
                    <NeoIcon icon={'plus'} size={'m'} style={{marginTop: "4px"}} color={'#5E6785'}/>
                    <NeoIcon icon={'edit'} size={'m'} style={{marginLeft: "4px", marginTop: "4px"}} color={'#5E6785'}/>
                    <div className='verticalLine'/>
                    <NeoIcon icon={'mark'} size={'m'} style={{marginTop: "4px"}} color={'#5E6785'}/>
                    <NeoIcon icon={'rubbish'} size={'m'} style={{marginLeft: "4px", marginTop: "4px"}} color={'#5E6785'}/>
                    <div className='verticalLine'/>
                </div>

                <div className='block'>
                    <span className='caption'>Версия</span>
                    <NeoSelect width='185px' defaultValue='default'>
                        <option value='default'>
                            По умолчанию
                        </option>
                    </NeoSelect>
                    <div className='verticalLine' />
                    <NeoIcon icon={'download'} size={'m'} style={{marginTop: "4px"}} color={'#5E6785'} />
                    <NeoIcon icon={'print'}  size={'m'} style={{marginTop: "4px", marginLeft: "4px"}} color={'#5E6785'}/>
                    <NeoIcon icon={'fullScreen'}  size={'m'} style={{marginTop: "4px", marginLeft: "4px"}} color={'#5E6785'}/>
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

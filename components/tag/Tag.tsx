import * as React from 'react';
import classNames from 'classnames';
import {Tag} from 'antd';



export interface TagProps {
  width?: string;
  className?: string;
  children?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  style?: React.CSSProperties;
  onClick?: (event:React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const prefix = 'tag';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLElement>> {}

const InternalTag: React.ForwardRefRenderFunction<unknown, TagProps> = (props) => {
  const {
    className,
    children,
    onClick
  } = props;


  const classes = classNames(
      prefix,
      className,
  );


    return <Tag
        {...props}
        onClick={onClick}
        className={classes}
        /*style={{width: `${props.width ? props.width : "auto"}`}}*/
    >
      <span style={{fontStyle: "normal", fontWeight: "normal", fontSize: "14px", lineHeight: "30px", color: "#424D78"}}>
        {children}
      </span>

    </Tag>

}

const NeoTag = React.forwardRef<unknown, TagProps>(InternalTag) as CompoundedComponent;

NeoTag.displayName = 'NeoTag';

NeoTag.defaultProps = {
};

export default NeoTag



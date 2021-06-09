import * as React from 'react';
import classNames from 'classnames';
import {Tag} from 'antd';
import {MouseEventHandler} from "react";
import {NeoIcon} from "neo-icon/lib";



export interface TagProps {
  width?: string;
  className?: string;
  children?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  style?: React.CSSProperties;
  onClick?: (event:React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  onMouseUp?: MouseEventHandler<any>,
  onMouseDown?: MouseEventHandler<any>
}

const prefix = 'tag';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLElement>> {}

const InternalTag: React.ForwardRefRenderFunction<unknown, TagProps> = (props) => {
  const {
    className,
    children,
    onClick,
    onMouseUp,
    onMouseDown
  } = props;


  const classes = classNames(
      prefix,
      className,
  );

  const closeIcon = <NeoIcon icon={"close"} size={"s"}/>

  return <Tag
      {...props}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onClick={onClick}
      className={classes}
      closeIcon={closeIcon}
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



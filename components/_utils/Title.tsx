import * as React from "react";
import {NeoCol, NeoRow, NeoTypography} from "../index";
import {useRef} from "react";

const inputElementStandardWidth = 200;

interface Props {
    width: string,
    title: string,
    titleOrientation: string,
    children;
    hidden?: boolean;
    required?: boolean;
}

export function Title(props:Props) {
    const width = props.width ? parseInt(props.width, 10) : inputElementStandardWidth;
    const typographyWidth = 150;
    const contentContainer = useRef(null);

    const divContainer = <div ref={contentContainer}>
        {props.children}
    </div>;

    const contentWidth = contentContainer.current?.offsetWidth;

    if (props.titleOrientation === "Left" || props.titleOrientation === "Right") {
        return <NeoRow hidden={props.hidden} className={"neo-title-container"} style={{minWidth: typographyWidth + 80 + "px", maxWidth: width + 150, display: "flex", alignItems: "flexStart"}}>
            <NeoCol span={props.titleOrientation === "Left" ? 6 : 18}>
                {props.titleOrientation === "Left" ? <NeoTypography style={{padding: "8px 12px 4px 0", wordBreak: "break-word", textAlign: "right"}}>{props.title}{props.required&&<span style={{color:'#ad1457'}}> *</span>}</NeoTypography> : divContainer}
            </NeoCol>
            <NeoCol span={props.titleOrientation === "Right" ? 6 : 18}>
                {props.titleOrientation === "Right" ? <NeoTypography style={{padding: "4px 0 4px 12px", wordBreak: "break-word"}}>{props.title}{props.required&&<span style={{color:'#ad1457'}}> *</span>}</NeoTypography> : divContainer}
            </NeoCol>
        </NeoRow>
    }

    if (props.titleOrientation === "Top" || props.titleOrientation === "Bottom") {
        return <NeoRow hidden={props.hidden}>
            <NeoCol style={{width: "fit-content"}}>
                {props.titleOrientation === "Top" ? <NeoTypography style={{width: width ? width : contentWidth, wordBreak: "break-word", paddingBottom: "4px", textAlign: "center"}}>{props.title}{props.required&&<span style={{color:'#ad1457'}}> *</span>}</NeoTypography> : divContainer}
                {props.titleOrientation === "Top" ? divContainer : <NeoTypography style={{width: width ? width : contentWidth, wordBreak: "break-word", paddingBottom: "4px", textAlign: "center"}}>{props.title}{props.required&&<span style={{color:'#ad1457'}}> *</span>}</NeoTypography>}
            </NeoCol>
        </NeoRow>
    }

    return null
}
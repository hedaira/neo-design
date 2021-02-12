import * as React from "react";
import {NeoCol, NeoRow, NeoTypography} from "../index";
import {getTextWidth} from "./fontSizeUtils";

const inputElementStandardWidth = 200;

interface Props {
    width: string,
    title: any,
    titleOrientation: string,
    children;
    required?;
}

export function Title(props:Props) {
    const width = props.width ? parseInt(props.width, 10) : inputElementStandardWidth;
    const textWidth = getTextWidth(props.title, "bold 12pt Roboto");
    const typographyWidth = 150;
    if (props.titleOrientation === "Left" || props.titleOrientation === "Right") {
        return <NeoRow className={"neo-title-container"} style={{minWidth: typographyWidth + 80 + "px",maxWidth: width + 150, display: "flex", alignItems: textWidth > typographyWidth ? "center" : "baseline"}}>
            <NeoCol span={props.titleOrientation === "Left" ? 6 : 18}>
                {props.titleOrientation === "Left" ? <NeoTypography style={{padding: "4px 12px 4px 0", wordBreak: "break-word", textAlign: "right"}}>{props.title}{props.required&&<span style={{color:'#ad1457'}}> *</span>}</NeoTypography> : props.children}
            </NeoCol>
            <NeoCol span={props.titleOrientation === "Right" ? 6 : 18}>
                {props.titleOrientation === "Right" ? <NeoTypography style={{padding: "4px 0 4px 12px", wordBreak: "break-word"}}>{props.title}{props.required&&<span style={{color:'#ad1457'}}> *</span>}</NeoTypography> : props.children}
            </NeoCol>
        </NeoRow>
    }

    if (props.titleOrientation === "Top" || props.titleOrientation === "Bottom") {
        return <NeoCol>
            <NeoRow>{props.titleOrientation === "Top" ? <NeoTypography style={{width: width, wordBreak: "break-word", paddingBottom: "4px", textAlign: "center"}}>{props.title}{props.required&&<span style={{color:'#ad1457'}}> *</span>}</NeoTypography> : props.children}</NeoRow>
            <NeoRow>{props.titleOrientation === "Bottom" ? <NeoTypography style={{width: width,wordBreak: "break-word", paddingTop: "4px", textAlign: "center"}}>{props.title}{props.required&&<span style={{color:'#ad1457'}}> *</span>}</NeoTypography> : props.children}</NeoRow>
        </NeoCol>
    }

    return null
}
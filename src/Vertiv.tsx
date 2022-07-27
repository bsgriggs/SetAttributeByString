import { createElement } from "react";
import {ValueStatus} from "mendix";

import { VertivContainerProps } from "../typings/VertivProps";

import "./ui/Vertiv.css";

const Vertiv = (props: VertivContainerProps):JSX.Element => {

    if (props.attributeToSet.status === ValueStatus.Available && props.stringToSet.status === ValueStatus.Available){
        props.attributeToSet.setValue(props.stringToSet.value);
    }


    return(
        <div style={{display: "none"}}>
        </div>
    )
}


export default Vertiv; 

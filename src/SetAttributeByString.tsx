import { createElement } from "react";
import {ValueStatus} from "mendix";

import { SetAttributeByStringContainerProps } from "../typings/SetAttributeByStringProps";

const SetAttributeByString = (props: SetAttributeByStringContainerProps):JSX.Element => {

    if (props.attributeToSet.status === ValueStatus.Available && props.stringToSet.status === ValueStatus.Available){
        props.attributeToSet.setValue(props.stringToSet.value);
    }

    return(
        <div style={{display: "none"}}>
        </div>
    )
}


export default SetAttributeByString; 

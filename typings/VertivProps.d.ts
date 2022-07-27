/**
 * This file was generated from Vertiv.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue } from "mendix";

export interface VertivContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    stringToSet: DynamicValue<string>;
    attributeToSet: EditableValue<string>;
}

export interface VertivPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    stringToSet: string;
    attributeToSet: string;
    onChange: {} | null;
}

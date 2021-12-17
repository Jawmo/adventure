import React from "react";
import styles from "./index.module.scss";
import { getBorderRadius } from "src/core-ui/properties/border-radius";
import { Color } from "src/core-ui/properties/color";
import { getMargin, MarginValues } from "src/core-ui/properties/margin";
import { getPadding, PaddingValues } from "src/core-ui/properties/padding";

export type Props = Pick<
  React.CSSProperties,
  | "width"
  | "height"
  | "backgroundColor"
  | "color"
  | "boxSizing"
  | "border"
  | "boxShadow"
> &
  Pick<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    | "onChange"
    | "onSubmit"
    | "name"
    | "value"
    | "readOnly"
    | "defaultValue"
    | "id"
    | "rows"
  > & {
    className?: string;
    margin?: MarginValues;
    padding?: PaddingValues;
  };

export const Textarea: React.FC<Props> = (props) => {
  return (
    <textarea
      className={`${styles["textarea-component"]} ${props.className}`}
      value={props.value}
      onChange={props.onChange}
      onSubmit={props.onSubmit}
      name={props.name}
      defaultValue={props.defaultValue}
      readOnly={props.readOnly}
      rows={props.rows}
      id={props.id}
      style={{
        height: props.height || "4rem",
        border: props.border || "none",
        boxShadow: props.boxShadow || `inset 0 0 0.6rem ${Color.Shadow}`,
        color: props.color || Color.InputText,
        width: props.width,
        backgroundColor: props.backgroundColor,
        textDecoration: "none",
        boxSizing: props.boxSizing,
        ...getBorderRadius(0.5),
        ...getMargin(props.margin),
        ...getPadding(props.padding),
      }}
    />
  );
};

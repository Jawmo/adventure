import React from "react";
import { forwardRef } from "react";
import styles from "./index.module.css";
import { getBorderRadius } from "../../properties/border-radius";
import { Color } from "../../properties/color";
import { getMargin, MarginValues } from "../../properties/margin";
import { getPadding, PaddingValues } from "../../properties/padding";

export type Props = Pick<
  React.CSSProperties,
  | "width"
  | "height"
  | "backgroundColor"
  | "color"
  | "boxSizing"
  | "border"
  | "boxShadow"
  | "maxWidth"
> &
  Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    | "onChange"
    | "onFocus"
    | "type"
    | "value"
    | "readOnly"
    | "onSubmit"
    | "name"
    | "defaultValue"
    | "disabled"
    | "list"
    | "multiple"
    | "onKeyPress"
    | "aria-autocomplete"
    | "accept"
    | "hidden"
    | "required"
    | "checked"
    | "max"
    | "min"
    | "step"
    | "id"
  > & {
    className?: string;
    margin?: MarginValues;
    padding?: PaddingValues;
    refDelegate?: (ref: HTMLInputElement) => void;
  };

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { margin, padding } = props;

  return (
    <input
      className={`${styles["input-component"]} ${props.className}`}
      ref={props.refDelegate ?? ref}
      type={props.type}
      value={props.value}
      defaultValue={props.defaultValue}
      onFocus={props.onFocus}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
      onSubmit={props.onSubmit}
      name={props.name}
      disabled={props.disabled}
      list={props.list}
      multiple={props.multiple}
      readOnly={props.readOnly}
      required={props.required}
      hidden={props.hidden}
      accept={props.accept}
      checked={props.checked}
      max={props.max}
      min={props.min}
      step={props.step}
      aria-autocomplete={props["aria-autocomplete"]}
      id={props.id}
      style={{
        height: props.height || "4rem",
        border: props.border || "none",
        boxShadow: props.boxShadow || `inset 0 0 0.6rem ${Color.Shadow}`,
        color: Color.InputText,
        width: props.width,
        textDecoration: "none",
        boxSizing: props.boxSizing,
        maxWidth: props.maxWidth,
        ...getBorderRadius(0.5),
        ...getMargin(margin === undefined ? { top: 0.5, bottom: 2 } : margin),
        ...getPadding(padding === undefined ? { left: 1, right: 1 } : padding),
      }}
    />
  );
});

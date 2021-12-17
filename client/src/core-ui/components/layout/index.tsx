import React from "react";
import { ForwardedRef } from "react";
import {
  BorderRadiusValues,
  getBorderRadius,
} from "../../properties/border-radius";
import { Color } from "src/core-ui/properties/color";
import { getMargin, MarginValues } from "../../properties/margin";
import { getPadding, PaddingValues } from "../../properties/padding";

export type Props = Pick<
  React.CSSProperties,
  | "alignItems"
  | "alignSelf"
  | "border"
  | "boxShadow"
  | "display"
  | "flex"
  | "flexDirection"
  | "flexWrap"
  | "gap"
  | "gridTemplateColumns"
  | "height"
  | "justifyContent"
  | "maxHeight"
  | "maxWidth"
  | "minWidth"
  | "minHeight"
  | "overflowX"
  | "overflowY"
  | "pointerEvents"
  | "position"
  | "width"
  | "top"
  | "zIndex"
  | "left"
  | "right"
> &
  Pick<
    React.DOMAttributes<HTMLDivElement>,
    | "onClick"
    | "onScroll"
    | "onBlur"
    | "onFocus"
    | "onMouseEnter"
    | "onMouseLeave"
  > &
  Pick<
    React.SelectHTMLAttributes<HTMLDivElement>,
    "hidden" | "className" | "id" | "tabIndex"
  > & {
    backgroundColor?: Color;
    borderRadius?: BorderRadiusValues;
    children?: React.ReactNode;
    margin?: MarginValues;
    padding?: PaddingValues;
    refDelegate?: (ref: HTMLDivElement) => void;
    ref?: ForwardedRef<HTMLDivElement>;
    style?: React.CSSProperties;
  };

export const Layout: React.FC<Props> = (props) => {
  return (
    <div
      id={props.id}
      className={props.className}
      onClick={props.onClick}
      onScroll={props.onScroll}
      onFocus={props.onFocus}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onBlur={props.onBlur}
      tabIndex={props.tabIndex}
      ref={props.refDelegate || props.ref}
      hidden={props.hidden}
      style={{
        alignItems: props.alignItems,
        alignSelf: props.alignSelf,
        backgroundColor: props.backgroundColor,
        border: props.border,
        boxShadow: props.boxShadow,
        display: props.display,
        flex: props.flex,
        flexDirection: props.flexDirection,
        flexWrap: props.flexWrap,
        gap: props.gap,
        gridTemplateColumns: props.gridTemplateColumns,
        height: props.height,
        justifyContent: props.justifyContent,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth,
        minWidth: props.minWidth,
        minHeight: props.minHeight,
        overflowX: props.overflowX,
        overflowY: props.overflowY,
        pointerEvents: props.pointerEvents,
        position: props.position,
        width: props.width,
        top: props.top,
        left: props.left,
        right: props.right,
        zIndex: props.zIndex,
        ...getBorderRadius(props.borderRadius),
        ...getMargin(props.margin),
        ...getPadding(props.padding),
        ...getBorderRadius(props.borderRadius),
        ...(props.style || {}),
      }}
    >
      {props.children}
    </div>
  );
};

import React from "react";

export default function PrimaryButton({
  width,
  height,
  backgroundColor,
  color,
  border,
  borderColor,
  borderRadius,
  fontSize,
  buttonText,
  position,padding,margin,
  image,
  onClick,
  onSubmit,
  className,
  handleClick,
}) {
  return (
    <button
      style={{
        width,
        height,
        backgroundColor,
        color,
        border,
        borderColor,
        borderRadius,
        fontSize,
        buttonText,
        position,
        padding,
        margin,
        image,
      }}
    >
      {handleClick}
      {onClick}
      {onSubmit}
      {className}
      {buttonText}
    </button>
  );
}

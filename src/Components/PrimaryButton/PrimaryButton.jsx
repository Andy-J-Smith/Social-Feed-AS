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
  className,
  onClick,
  onSubmit,
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
        className,
        onClick,
        onSubmit,
      }}
    >
      {buttonText}
    </button>
  );
}

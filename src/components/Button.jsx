import React from "react";

export default function Button({ children, variant, className = "", ...props }) {
  const baseStyles = "px-4 py-2 rounded-md font-medium focus:outline-none transition";
  const styles = {
    default: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-red-500 text-red-500 hover:bg-red-50",
  };

  return (
    <button className={`${baseStyles} ${styles[variant] || styles.default} ${className}`} {...props}>
      {children}
    </button>
  );
}

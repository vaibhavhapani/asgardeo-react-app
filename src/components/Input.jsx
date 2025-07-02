import React from "react";

export default function Input({ className = "", ...props }) {
  return (
    <input
      className={`px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-400 focus:outline-none ${className}`}
      {...props}
    />
  );
}

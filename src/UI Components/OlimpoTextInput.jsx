import React from "react";

function OlimpoTextInput({...rest}) {
  return (
    <input
      className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-green-500 focus:ring-green-500 rounded-lg p-2.5 text-sm"
      {...rest}
    />
  );
}

export default OlimpoTextInput;

import {Label} from "flowbite-react";
import React from "react";

function OlimpoTextInput({label, ...rest}) {
  return (
    <>
      <Label className="text-zinc-500 text-sm">{label}</Label>
      <div className="flex">
        <input
          className="block w-full rounded border-1 border-gray-300 text-gray-900 focus:border-green-500 focus:ring-green-500 p-2 text-sm"
          {...rest}
        />
      </div>
    </>
  );
}

export function OlimpoTextInputType({label, tipo, ...rest}) {
  return (
    <>
      <Label className="text-zinc-500 text-sm">{label}</Label>
      <div className="flex">
        <input
          className="block w-full border rounded-s border-gray-300 text-gray-900 focus:border-green-500 focus:ring-green-500 p-2 text-sm"
          {...rest}
        />
        <input className="text-sm text-gray-600 text-center border-l-0 border rounded-e" value={tipo} disabled />
      </div>
    </>
  );
}

export default OlimpoTextInput;

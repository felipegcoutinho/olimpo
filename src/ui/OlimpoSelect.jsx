import {Label} from "flowbite-react";
import React from "react";

function OlimpoSelect({label, ...rest}) {
  return (
    <>
      <Label className="text-zinc-500 text-sm">{label}</Label>
      <select
        className="block w-full border-2 border-gray-300 text-gray-900 focus:border-green-500 focus:ring-green-500 p-2 text-sm"
        {...rest}
      />
    </>
  );
}

export default OlimpoSelect;

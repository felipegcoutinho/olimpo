import {Label} from "flowbite-react";
import React from "react";

function OlimpoSelect({label, ...rest}) {
  return (
    <>
      <Label className="text-zinc-500 text-sm">{label}</Label>
      <select
        className="block w-full border rounded border-gray-300 dark:border-slate-700 text-gray-900 dark:bg-itbs-modern-100 dark:text-white focus:border-green-500 focus:ring-green-500 p-2 text-sm"
        {...rest}
      />
    </>
  );
}

export default OlimpoSelect;

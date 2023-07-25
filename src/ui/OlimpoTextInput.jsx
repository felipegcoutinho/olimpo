import {Label} from "flowbite-react";
import React from "react";
import {HiArrowSmRight} from "react-icons/hi";
import {HiArrowTopRightOnSquare} from "react-icons/hi2";

function OlimpoTextInput({label, ...rest}) {
  return (
    <>
      <Label className="text-zinc-500 text-sm">{label}</Label>
      <div className="flex">
        <input
          className="block w-full rounded border-1 border-gray-300 dark:border-slate-700 dark:bg-itbs-modern-100 dark:text-white text-gray-900 focus:border-green-500 focus:ring-green-500 p-2 text-sm"
          {...rest}
        />
      </div>
    </>
  );
}

export function OlimpoPageBtn() {
  return (
    <div className="flex justify-center">
      <button className="bg-itbs-default hover:bg-itbs-hover text-white justify-center w-max px-2 py-1 rounded-full">
        <span className="flex items-center gap-1">
          <HiArrowTopRightOnSquare /> Saiba mais
        </span>
      </button>
    </div>
  );
}
// Certifique-se de importar o ícone corretamente.

export function OlimpoBtnCateg({setor}) {
  return (
    <button className="text-xs flex items-center font-bold justify-center p-2 w-full border border-itbs-default text-itbs-default hover:text-white hover:bg-itbs-default rounded-full">
      {setor} <HiArrowSmRight className="ml-1" />
    </button>
  );
}

export default OlimpoTextInput;

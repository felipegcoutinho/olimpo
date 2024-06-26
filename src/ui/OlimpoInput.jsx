import { Label } from "flowbite-react";
import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

function OlimpoTextInput({ label, ...rest }) {
  return (
    <>
      <Label className="text-zinc-500 text-sm">{label}</Label>
      <div className="flex">
        <input
          className="block w-full rounded border-1 border-gray-300 dark:border-slate-700 dark:bg-itbs-modern-100 dark:text-white text-gray-900 focus:border-itbs-default focus:ring-itbs-default p-2 text-sm"
          {...rest}
        />
      </div>
    </>
  );
}

export function OlimpoSelect({ label, ...rest }) {
  return (
    <>
      <Label className="text-zinc-500 text-sm">{label}</Label>
      <select
        className="block w-full border rounded border-gray-300 dark:border-slate-700 text-gray-900 dark:bg-itbs-modern-100 dark:text-white focus:border-itbs-default focus:ring-itbs-default p-2 text-sm"
        {...rest}
      />
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

export default OlimpoTextInput;

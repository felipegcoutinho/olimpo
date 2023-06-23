import {Button} from "flowbite-react";
import * as React from "react";
import {HiChevronDown, HiChevronUp} from "react-icons/hi2";

export default function OlimpoTable({tbody, thead, admin, openModal, newButton, query, handleSearchChange, handleHide, Hide}) {
  return (
    <section class="px-1 mx-auto lg:px-">
      <div class="relative overflow-hidden bg-white sm:rounded-lg">
        <div class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
          <button onClick={handleHide}>
            <div className="flex items-center gap-2">{Hide ? <HiChevronUp /> : <HiChevronDown />}</div>
          </button>
          <div class="flex items-center flex-1 space-x-4 text-3xl">Access Points</div>
          <div class="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
            {admin && (
              <Button className="mr-auto bg-green-500 hover:bg-green-700" onClick={openModal}>
                {newButton}
              </Button>
            )}

            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500 "
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                value={query}
                onChange={handleSearchChange}
                class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
                placeholder="Buscar Equipamentos"
              />
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500">
            {thead}

            {tbody}
          </table>
        </div>
      </div>
    </section>
  );
}

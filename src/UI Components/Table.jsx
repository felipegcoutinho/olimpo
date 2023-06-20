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
            {/* <tbody>
                <tr class="border-b hover:bg-gray-100">
                  <td class="w-4 px-4 py-3">
                    <div class="inline-block w-4 h-4 mr-2 bg-green-700 rounded-full"></div>
                  </td>
                  <th scope="row" class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img
                      src="https://backend.intelbras.com/sites/default/files/styles/medium/public/integration/ap_1210_front.png"
                      alt="iMac Front Image"
                      class="w-auto h-8 mr-3"
                    />
                    AP 1210
                  </th>
                  <td class="px-4 py-2">
                    <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      Desktop PC
                    </span>
                  </td>
                  <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="flex items-center">
                      <div class="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
                      95
                    </div>
                  </td>
                  <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">1.47</td>
                  <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">0.47</td>
                  <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="flex items-center">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="ml-1 text-gray-500 dark:text-gray-400">5.0</span>
                    </div>
                  </td>
                  <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewbox="0 0 24 24"
                        fill="currentColor"
                        class="w-5 h-5 mr-2 text-gray-400"
                        aria-hidden="true">
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                      </svg>
                      1.6M
                    </div>
                  </td>
                  <td class="px-4 py-2">$3.2M</td>
                  <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Just now</td>
                </tr>}
              </tbody> */}
          </table>
        </div>
      </div>
    </section>
  );
}

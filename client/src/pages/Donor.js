import React, { Component } from "react";

export default class Donor extends Component {
  render() {
    return (
      <div className="mt-40 px-40">
        <table className="min-w-full divide-y divide-gray-200 h-96 ">
          <thead className="bg-gray-50 ">
            <tr>
              <th
                scope="col"
                className="  bg-red-900 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="  px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="  px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Age
              </th>
              <th
                scope="col"
                className="  px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Blood Type
              </th>
              <th
                scope="col"
                className="  px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Rh
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {/* {allplaces.map((place, index) => ( */}
            <tr>
              <td className="  px-6 py-4 whitespace-nowrap h-32">
                <div className="flex items-center">
                  <div className="text-sm text-center font-medium text-gray-900">
                    id
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 flex items-center">
                  df
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">area</div>
                {/* <div className="text-sm text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                pricing
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Occupied
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap h-32">
                <div className="flex items-center">
                  <div className="text-sm text-center font-medium text-gray-900">
                    id
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 flex items-center">
                  df
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">area</div>
                {/* <div className="text-sm text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                pricing
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Occupied
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap h-32">
                <div className="flex items-center">
                  <div className="text-sm text-center font-medium text-gray-900">
                    id
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 flex items-center">
                  df
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">area</div>
                {/* <div className="text-sm text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                pricing
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Occupied
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap h-32">
                <div className="flex items-center">
                  <div className="text-sm text-center font-medium text-gray-900">
                    id
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 flex items-center">
                  df
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">area</div>
                {/* <div className="text-sm text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                pricing
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Occupied
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap h-32">
                <div className="flex items-center">
                  <div className="text-sm text-center font-medium text-gray-900">
                    id
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 flex items-center">
                  df
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">area</div>
                {/* <div className="text-sm text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                pricing
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Occupied
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap h-32">
                <div className="flex items-center">
                  <div className="text-sm text-center font-medium text-gray-900">
                    id
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 flex items-center">
                  df
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">area</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                pricing
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Occupied
              </td>
            </tr>

            {/* ))} */}
          </tbody>
        </table>
      </div>
    );
  }
}

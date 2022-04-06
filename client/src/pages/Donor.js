import React, { Component } from "react";

export default class Donor extends Component {
  render() {
    return (
      <div className="mt-40 px-auto lg:px-40">
        <table className="min-w-full divide-y divide-gray-200 h-96 ">
          <thead className="bg-gray-50 ">
            <tr>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Age
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Blood Type
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Rh
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Gender
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Rh
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Blood
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {/* {allplaces.map((place, index) => ( */}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center font-medium text-gray-900">
                  id
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  dfdsgfdg
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  area
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                pricing
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                Occupied
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  area
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                pricing
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
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

import React, { useEffect, useState } from "react";

const DataTable = ({ showTable }) => {
  const [users, setUsers] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    if (showTable) {
      const data = JSON.parse(localStorage.getItem("users")) || [];
      setUsers(data);
    }
  }, [showTable]);

  if (!showTable || users.length === 0) return null;

  // Toggle single row
  const handleCheckboxChange = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  // Select All
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(users.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Desktop & Tablet */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-sm font-semibold text-gray-600 border-b">
                <th className="px-6 py-4">
                  {/* <input
                    type="checkbox"
                    checked={selectedRows.length === users.length}
                    onChange={handleSelectAll}
                  /> */}
                </th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Gender</th>
                <th className="px-6 py-4 text-left">Language</th>
                <th className="px-6 py-4 text-left">Email</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className={`text-sm border-b last:border-none transition
                    ${selectedRows.includes(index) ? "bg-gray-100" : "hover:bg-gray-50"}`}
                >
                  <td className="px-6 py-5">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  <td className="px-6 py-5 font-medium">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="px-6 py-5">{user.gender}</td>
                  <td className="px-6 py-5">
                    {user.language?.join(", ")}
                  </td>
                  <td className="px-6 py-5 text-gray-600">
                    {user.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden divide-y">
          {users.map((user, index) => (
            <div
              key={index}
              className={`p-4 space-y-2 ${
                selectedRows.includes(index) ? "bg-gray-50" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Select</span>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Name</span>
                <span className="font-medium">
                  {user.firstName} {user.lastName}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Gender</span>
                <span>{user.gender}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Language</span>
                <span>{user.language?.join(", ")}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Email</span>
                <span className="text-right break-all text-sm">
                  {user.email}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DataTable;


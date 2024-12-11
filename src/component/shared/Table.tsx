import React, { useState } from "react";

interface TableProps {
  data: Array<{ id: number; name: string; email: string }>;
  rowsPerPage: number;
}
const Table: React.FC<TableProps> = ({ data, rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-4">
      <table className="table-auto w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row) => (
            <tr key={row.id}>
              <td className="px-4 py-2 border">{row.id}</td>
              <td className="px-4 py-2 border">{row.name}</td>
              <td className="px-4 py-2 border">{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
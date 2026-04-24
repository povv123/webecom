// src/components/admin/DataTable.jsx
export const DataTable = ({ columns, data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="px-6 py-3 text-left">{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col.key} className="px-6 py-4">{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../components/DataTable";
import { UserRow } from "../helpers/TableData";
import AddModal from "../components/AddModal";
import { useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 40 },
  {
    field: "img",
    headerName: "Avatar",
    width: 60,
    renderCell: (params) => (
      <img
        className="h-8 w-8 rounded-full object-cover"
        src={params.row.img || "/noavatar.png"}
      />
    ),
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 100,
    editable: true,
    type: "string",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 110,
    editable: true,
    type: "string",
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 100,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    sortable: false,
    width: 160,
    type: "string",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "number",
    width: 100,
    editable: true,
  },
  {
    field: "verified",
    headerName: "Verified",
    type: "boolean",
  },
];

const UsersPage = () => {
  const [onClose, setOnClose] = useState(false);
  return (
    <div className="w-full">
      <div className="flex items-center space-x-6 m-2 pt-4 sm:pt-0">
        <h3 className="text-3xl text-white font-bold">Users</h3>
        <button
          onClick={() => setOnClose(true)}
          className="px-4 py-2 text-xs font-semibold uppercase text-gray-700 bg-gray-100 rounded-lg"
        >
          Add new user
        </button>
      </div>
      {/* data grid */}
      <DataTable columns={columns} rows={UserRow} slug="user" />
      {/* modal */}
      {onClose && (
        <AddModal columns={columns} slug="user" setOnClose={setOnClose} />
      )}
    </div>
  );
};

export default UsersPage;

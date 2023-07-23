import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../components/DataTable";
import { ProductRow } from "../helpers/TableData";
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
    field: "title",
    headerName: "Title",
    width: 200,
    editable: true,
    type: "string",
  },
  {
    field: "color",
    headerName: "Color",
    width: 80,
    editable: true,
    type: "string",
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 100,
    editable: true,
  },
  {
    field: "producer",
    headerName: "Brand",
    sortable: false,
    width: 100,
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
    field: "inStock",
    headerName: "In Stock",
    type: "boolean",
  },
];

const ProductsPage = () => {
  const [onClose, setOnClose] = useState(false);
  return (
    <div className="w-full">
      <div className="flex items-center space-x-6 m-2 pt-4 sm:pt-0">
        <h3 className="text-3xl text-white font-bold">Products</h3>
        <button
          onClick={() => setOnClose(true)}
          className="px-4 py-2 text-xs font-semibold uppercase text-gray-700 bg-gray-100 rounded-lg"
        >
          Add new product
        </button>
      </div>
      {/* data grid */}
      <DataTable columns={columns} rows={ProductRow} slug="product" />
      {/* modal */}
      {onClose && (
        <AddModal columns={columns} slug="product" setOnClose={setOnClose} />
      )}
    </div>
  );
};

export default ProductsPage;

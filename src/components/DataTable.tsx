import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  const handleDelete = (id: number) => {
    // do delete operation using API calls
    console.log(id , ' Has been deleted!')
  };

  // extra column that is common for all table
  const actions: GridColDef = {
    field: "action",
    headerName: "Action",
    renderCell: (params) => (
      <div className="flex flex-row items-center space-x-1">
        <Link to={`/${props.slug}/${params.row.id}`}>
          <img src="/view.svg" />
        </Link>
        <img
          src="/delete.svg"
          className="cursor-pointer"
          onClick={() => handleDelete(params.row.id)}
        />
      </div>
    ),
  };

  return (
    <Box sx={{ height: '76vh', width: "100%" }}>
      <DataGrid
        className="bg-gray-100 pr-14 pl-4 py-4 md:p-5"
        rows={props.rows}
        columns={[...props.columns, actions]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </Box>
  );
};

export default DataTable;

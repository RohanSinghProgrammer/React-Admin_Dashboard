import { GridColDef } from "@mui/x-data-grid";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOnClose: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddModal = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen w-screen absolute top-0 left-0 bg-[rgba(0,0,0,0.734)] grid place-items-center">
      <form onSubmit={handleSubmit} className="p-8 bg-dark-color rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-soft-color text-2xl font-semibold capitalize">
            Add New {props.slug}
          </h2>
          <button
            onClick={() => props.setOnClose(false)}
            className="text-gray-100 font-bold cursor-pointer text-lg"
          >
            X
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          {props.columns
            .filter((col) => col.field != "id" && col.field != "img")
            .map((item, index) => (
              <div className="flex flex-col">
                <label
                  htmlFor={props.slug + index}
                  className="text-soft-color text-sm mb-1 font-semibold"
                >
                  {item.headerName}
                </label>
                <input
                  type={item.type}
                  placeholder={item.headerName}
                  className="bg-transparent border border-soft-color px-1.5 py-0.5 text-soft-color rounded-md outline-none"
                />
              </div>
            ))}
        </div>
        <button className="capitalize bg-soft-color w-full mt-4 p-3 rounded-lg font-bold text-main-bg">Add  {props.slug}</button>
      </form>
    </div>
  );
};

export default AddModal;

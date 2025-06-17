import { BrandModel } from "./BrandModel";

const ManageBrands = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold ">Manage Brands</h1>
        <BrandModel />
      </div>
    </div>
  );
};

export default ManageBrands;

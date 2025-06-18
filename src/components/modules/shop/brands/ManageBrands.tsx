import { getAllBrands } from "@/services/shop/brand";
import AllBrands from "./ALlbrands";
import { BrandModel } from "./BrandModel";
export interface IBrand {
  _id: string;
  name: string;
  logo: string;
  isActive: boolean;
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  createdBy: string; // likely a user ID
}

const ManageBrands = async () => {
  const { data } = await getAllBrands();
  console.log(data);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold ">Manage Brands</h1>
        <BrandModel />
      </div>
      <AllBrands brands={data} />
    </div>
  );
};

export default ManageBrands;

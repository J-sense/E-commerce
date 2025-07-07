import { getAllProducts } from "@/services/shop/product";
import Pr from "./Pr";
import Sidebar from "./Sidebar";

const AllProducts = async () => {
  const { data } = await getAllProducts();
  console.log(data);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 border">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <Pr product={data} />
        </div>
      </div>
      ;
    </div>
  );
};

export default AllProducts;

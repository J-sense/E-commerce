import { Button } from "@/components/ui/button";
import Link from "next/link";

const ManageProducts = () => {
  return (
    <div className="flex justify-between">
      <div className="">Manage Products</div>
      <Link href={`/user/shop/all-products/addProducts`}>
        <Button>Add Products</Button>
      </Link>
    </div>
  );
};

export default ManageProducts;

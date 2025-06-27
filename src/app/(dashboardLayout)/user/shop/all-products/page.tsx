import ManageProducts from "@/components/modules/shop/products/ManageProducts";
import { getAllProducts } from "@/services/shop/product";
import React from "react";

const page = async () => {
  const { data } = await getAllProducts();

  return (
    <div>
      <ManageProducts product={data} />
    </div>
  );
};

export default page;

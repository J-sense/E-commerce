import ManageProducts from "@/components/modules/shop/products/ManageProducts";
import { getAllProducts } from "@/services/shop/product";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;
  const { data, meta } = await getAllProducts(page);
  return (
    <div>
      <ManageProducts product={data} meta={meta} />
    </div>
  );
};

export default page;

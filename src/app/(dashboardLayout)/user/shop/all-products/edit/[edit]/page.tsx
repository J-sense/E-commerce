import UpdateProduct from "@/components/modules/shop/products/UpdateProduct";
import { getSingleProduct } from "@/services/shop/product";

type PageProps = {
  params: {
    edit: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const { data } = await getSingleProduct(params.edit);
  console.log(data);
  return (
    <div>
      <UpdateProduct product={data} />
    </div>
  );
};

export default Page;

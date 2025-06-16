import ManageCategories from "@/components/modules/shop/categories/ManageCategories";

import { getAllCategories } from "@/services/shop";

const Cate = async () => {
  const { data } = await getAllCategories();

  return (
    <div>
      <ManageCategories categories={data}></ManageCategories>
    </div>
  );
};

export default Cate;

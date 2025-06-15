import ManageCategories from "@/components/modules/shop/categories/ManageCategories";
import { getAllCategories } from "@/services/shop";

const Cate = async () => {
  const getAllCategorie = await getAllCategories();
  console.log(getAllCategorie);
  return (
    <div>
      <ManageCategories></ManageCategories>
    </div>
  );
};

export default Cate;

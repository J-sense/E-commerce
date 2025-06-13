import { CategoryModel } from "./createCategoryModel";

const ManageCategories = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="m-2 font-bold">Manage Categories</h1>
        <div className="m-2">
          <CategoryModel />
        </div>
      </div>
    </div>
  );
};

export default ManageCategories;

import CategoryCard from "./CategoryCard";

const categories = [
  {
    _id: "6851037b87cdcf4ea9ac39ff",
    name: "testing",
    description: "not available",
    icon: "https://res.cloudinary.com/dxmsdzpq3/image/upload/v1750139770/ndlvu85x8f-1750139755120-icon-picofme.png",
    isActive: true,
    slug: "testing",
  },
  // add more categories as needed
];
const Category = ({ cate }) => {
  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
        <h3 className="text-xl md:text-2xl font-light tracking-wide text-gray-800">
          Categories
        </h3>
        {/* Add a View All link or button here if you want */}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {cate.map((cat) => (
          <CategoryCard key={cat._id} category={cat} />
        ))}
      </div>
    </section>
  );
};

export default Category;

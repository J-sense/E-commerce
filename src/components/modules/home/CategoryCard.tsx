import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }) => {
  const { name, description, icon, isActive, slug } = category;

  return (
    <Link
      href={`/category/${slug}`}
      className={`flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white ${
        isActive
          ? "ring-2 ring-amber-400"
          : "opacity-50 cursor-not-allowed pointer-events-none"
      }`}
      aria-disabled={!isActive}
      tabIndex={isActive ? 0 : -1}
    >
      <div className="relative w-20 h-20 mb-4">
        <Image
          src={icon}
          alt={`${name} icon`}
          fill
          style={{ objectFit: "contain" }}
          loading="lazy"
          priority={false}
        />
      </div>

      <h4 className="text-lg font-semibold text-gray-800 mb-1">{name}</h4>

      <p className="text-sm text-gray-600 text-center">{description}</p>
    </Link>
  );
};

export default CategoryCard;

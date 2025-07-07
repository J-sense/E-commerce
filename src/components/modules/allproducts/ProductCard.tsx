import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/types/product";

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  const {
    name,
    price,
    offerPrice,
    imageUrls,
    slug,
    shop,
    brand,
    stock,
    ratingCount,
    averageRating,
    category,
  } = product;

  return (
    <Link
      href={`/products/${slug}`}
      className="group block relative bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={imageUrls[0]}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {name}
        </h3>
        <div className="text-sm text-gray-500">
          {brand?.name} • {category?.name}
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <span className="text-xl font-bold text-amber-600">
            ৳ {offerPrice || price}
          </span>
          {offerPrice && (
            <span className="text-sm line-through text-gray-400">
              ৳ {price}
            </span>
          )}
        </div>

        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>{stock > 0 ? `${stock} in stock` : "Out of stock"}</span>
          <span>{shop?.shopName}</span>
        </div>

        <div className="flex items-center space-x-1 text-xs text-yellow-500 mt-1">
          {averageRating > 0 ? (
            <>
              <span>⭐ {averageRating.toFixed(1)}</span>
              <span className="text-gray-400">({ratingCount})</span>
            </>
          ) : (
            <span className="text-gray-400">No ratings yet</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

import { IProduct } from "@/types/product";
import ProductCard from "./ProductCard";

const Pr = ({ product }: { product: IProduct[] }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {product.map((item: IProduct, idx: number) => (
        <ProductCard key={idx} product={item} />
      ))}
    </div>
  );
};

export default Pr;

export type IProduct = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  imageUrls: string[];
  availableColors: string[];
  keyFeatures: string[];
  specification: Record<string, string>;
  price: number;
  offerPrice: number | null;
  weight: number;
  stock: number;
  averageRating: number;
  ratingCount: number;
  isActive: boolean;
  brand: {
    _id: string;
    name: string;
  };
  category: {
    _id: string;
    name: string;
  };
  shop: {
    _id: string;
    shopName: string;
  };
  createdAt: string;
  updatedAt: string;
};

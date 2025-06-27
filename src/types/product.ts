export type IProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  weight: number;
  category: {
    _id: string;
    name: string;
  }; // category ID
  brand: {
    _id: string;
    name: string;
  }; // brand ID
  availableColors: string[];
  specification: {
    [key: string]: string; // dynamic specification fields
  };
  keyFeatures: string[];
};

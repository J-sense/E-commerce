export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  isActive: boolean;
  parent: string | null;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

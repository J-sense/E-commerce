"use client";
import { CategoryModel } from "./createCategoryModel";
import { NMTable } from "@/components/ui/NMTable";
import { ColumnDef } from "@tanstack/react-table";
import { ICategory } from "@/types/category";
import { Badge } from "@/components/ui/badge";
import { Delete } from "lucide-react";
export type TCategory = ICategory[];

const ManageCategories = ({ categories }: { categories: TCategory }) => {
  const columns: ColumnDef<ICategory>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "isActive",
      header: "Active",
      cell: ({ row }) => (
        <div>
          <Badge>{row.original.isActive ? "Active" : "Inactive"}</Badge>
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: () => (
        <div>
          <Delete />
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="m-2 font-bold">Manage Categories</h1>
        <div className="m-2">
          <CategoryModel />
        </div>
      </div>
      <NMTable data={categories} columns={columns} />
    </div>
  );
};

export default ManageCategories;

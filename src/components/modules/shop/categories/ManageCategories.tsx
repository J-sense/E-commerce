"use client";
import { CategoryModel } from "./createCategoryModel";
import { NMTable } from "@/components/ui/NMTable";
import { ColumnDef } from "@tanstack/react-table";
import { ICategory } from "@/types/category";
import { Badge } from "@/components/ui/badge";
import { Trash } from "lucide-react";
import { useState } from "react";
import DeleteModal from "./DeleteCategoryModel";

export type TCategory = ICategory[];

const ManageCategories = ({ categories }: { categories: TCategory }) => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null
  );
  const handleDelete = (deleteInfo: ICategory) => {
    setSelectedCategory(deleteInfo);
    setOpen(true);
  };
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
      cell: ({ row }) => (
        <div>
          <Trash
            className="text-red-600"
            onClick={() => handleDelete(row.original)}
          />
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
      <DeleteModal setOpen={setOpen} open={open} cateGory={selectedCategory} />
    </div>
  );
};

export default ManageCategories;

"use client";
import { IBrand } from "./ManageBrands";
import { NMTable } from "@/components/ui/NMTable";
import { Badge, Trash } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import DeleteBrandModal from "./DeleteBrand";
type TBrand = IBrand[];
const AllBrands = ({ brands }: { brands: TBrand }) => {
  const [open, setOpen] = useState(false);
  const [selectCategory, setSelectCategory] = useState<string | null>(null);
  const handleDelete = (id: string) => {
    setSelectCategory(id);
    setOpen(true);
  };
  const columns: ColumnDef<IBrand>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "isActive",
      header: "Active",
      cell: ({ row }) => (
        <div>
          <Badge>{row?.original?.isActive ? "Active" : "Inactive"}</Badge>
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
            onClick={() => handleDelete(row?.original._id)}
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <NMTable columns={columns} data={brands} />
      <DeleteBrandModal
        open={open}
        setOpen={setOpen}
        cateGory={selectCategory}
      />
    </div>
  );
};

export default AllBrands;

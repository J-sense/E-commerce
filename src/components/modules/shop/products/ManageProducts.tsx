"use client";
import { Button } from "@/components/ui/button";
import { NMTable } from "@/components/ui/NMTable";
import { IProduct } from "@/types/product";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Eye, Pencil, PlusCircle, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import NMTablePagination from "@/components/ui/NMTable/NMTablePagination";

const ManageProducts = ({ product, meta }: { product: IProduct[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const columns: ColumnDef<IProduct>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="font-medium text-gray-900">{row.getValue("name")}</div>
      ),
    },

    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => (
        <div className="font-semibold text-gray-900">
          ৳{row.original?.price}
        </div>
      ),
    },
    {
      accessorKey: "availableColors",
      header: "Colors",
      cell: ({ row }) => (
        <div className="flex flex-wrap gap-1">
          {(row.original.availableColors || []).map((color, i) => (
            <span
              key={i}
              className="inline-block w-4 h-4 rounded-full border border-gray-200"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      ),
    },

    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => (
        <div className="text-sm bg-gray-50 px-3 py-1 rounded-full text-gray-700">
          {row.original.category?.name}
        </div>
      ),
    },
    {
      accessorKey: "brand",
      header: "Brand",
      cell: ({ row }) => <Badge>{row.original?.brand.name}</Badge>,

      //   (
      //   <div className="font-medium text-gray-800">{row.original?.brand}</div>
      // ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex space-x-2">
          {/* View Button */}
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:text-gray-900"
            title="View"
            onClick={() => console.log("View:", row.original)}
          >
            <Eye className="h-4 w-4" />
          </Button>

          {/* Edit Button */}
          <Link href={`/user/shop/all-products/edit/${row.original._id}`}>
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-900"
              title="Edit"
            >
              <Pencil className="h-4 w-4" />
            </Button>
          </Link>

          {/* Delete Button */}
          <Button
            variant="ghost"
            size="sm"
            className="text-red-600 hover:text-red-900"
            title="Delete"
            onClick={() => console.log("Delete:", row.original)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Products</h1>
          <p className="text-sm text-gray-500">
            View and manage your product inventory
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xs"
          />
          <Link href={`/user/shop/all-products/addProducts`}>
            <Button className="w-full sm:w-auto">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </Link>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
        <NMTable data={product} columns={columns} />
        <NMTablePagination totalPage={meta.totalPage} />
      </div>
    </div>
  );
};

export default ManageProducts;

"use client";

import Add from "@/components/add/Add";
import DataTable from "@/components/dataTable/DataTable";
import { products } from "@/data/product";
import { GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { useState } from "react";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    {
        field: "img",
        headerName: "Image",
        width: 70,
        renderCell: (params) => {
            return (
                <Image
                    src={params.row.img || "/noavatar.png"}
                    width={30}
                    height={30}
                    alt=""
                />
            );
        },
    },
    {
        field: "title",
        type: "string",
        headerName: "Title",
        width: 250,
    },
    {
        field: "color",
        type: "string",
        headerName: "Color",
        width: 150,
    },
    {
        field: "price",
        type: "string",
        headerName: "Price",
        width: 200,
    },
    {
        field: "producer",
        headerName: "Producer",
        type: "string",
        width: 200,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 100,
        type: "string",
    },
    {
        field: "inStock",
        headerName: "In Stock",
        width: 150,
        type: "boolean",
    },
];

const Products = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="px-[0.313rem] py-5">
            <div className="flex items-center gap-5 mb-5">
                <h1 className="text-2xl font-bold">Products</h1>
                <button
                    onClick={() => setOpen(true)}
                    className="bg-gray-50 text-black p-1  cursor-pointer"
                >
                    Add New Products
                </button>
            </div>
            <DataTable slug="products" columns={columns} rows={products} />
            {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
        </div>
    );
};

export default Products;

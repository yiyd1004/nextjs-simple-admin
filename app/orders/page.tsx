"use client";

import DataTable from "@/components/dataTable/DataTable";
import { orders } from "@/data/orders";
import { GridColDef } from "@mui/x-data-grid";
import Image from "next/image";

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
        field: "status",
        headerName: "Status",
        width: 150,
        type: "boolean",
        renderCell: (params) => {
            let colorCode = "black";
            switch (params.row.status) {
                case "Backordered":
                case "Delayed":
                    colorCode = "tomato";
                    break;
                case "Delivered":
                    colorCode = "limegreen";
                    break;
            }
            return (
                <span style={{ color: colorCode }}>{params.row.status}</span>
            );
        },
    },
];

const Orders = () => {
    return (
        <div className="px-[0.313rem] py-5">
            <div className="flex items-center gap-5 mb-5">
                <h1 className="text-2xl font-bold">Products</h1>
            </div>
            <DataTable slug="orders" columns={columns} rows={orders} />
        </div>
    );
};

export default Orders;

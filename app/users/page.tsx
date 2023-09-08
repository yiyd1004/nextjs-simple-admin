"use client";

import Add from "@/components/add/Add";
import DataTable from "@/components/dataTable/DataTable";
import { userRows } from "@/data/users";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import Image from "next/image";
import { useState } from "react";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    {
        field: "img",
        headerName: "Avatar",
        width: 70,
        renderCell: (params) => {
            return (
                <Image
                    src={params.row.img || "/assets/noavatar.png"}
                    width={30}
                    height={30}
                    alt=""
                    style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                    }}
                />
            );
        },
    },
    {
        field: "firstName",
        type: "string",
        headerName: "First name",
        width: 150,
    },
    {
        field: "lastName",
        type: "string",
        headerName: "Last name",
        width: 150,
    },
    {
        field: "email",
        type: "string",
        headerName: "Email",
        width: 250,
    },
    {
        field: "phone",
        type: "string",
        headerName: "Phone",
        width: 200,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 150,
        type: "string",
    },
    {
        field: "verified",
        headerName: "Verified",
        width: 150,
        type: "boolean",
    },
];

const Users = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="px-[0.313rem] py-5">
            <div className="flex items-center gap-5 mb-5">
                <h1 className="text-2xl font-bold">Users</h1>
                <button
                    onClick={() => setOpen(true)}
                    className="bg-gray-50 text-black p-1 cursor-pointer"
                >
                    Add New User
                </button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows} />
            {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
        </div>
    );
};

export default Users;

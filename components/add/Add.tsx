"use client";

import { GridColDef } from "@mui/x-data-grid";
import { useEffect } from "react";

type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //add new item
        // mutation.mutate();
        document.body.style.overflow = "auto";
        props.setOpen(false);
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    return (
        <div
            className="w-full h-full min-h-full absolute bg-[rgba(0,0,0,0.724)] flex flex-1 items-center justify-center"
            style={{ top: `${window.scrollY}px`, left: `${window.scrollX}px` }}
        >
            <div className="p-12 rounded-xl bg-[#2a3447] relative">
                <span
                    className="absolute top-3 right-3 cursor-pointer"
                    onClick={() => {
                        props.setOpen(false);
                        document.body.style.overflow = "auto";
                    }}
                >
                    X
                </span>
                <h1 className="mb-10 text-2xl text-[#ddd]">
                    Add new {props.slug}
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-wrap max-w-lg justify-between"
                >
                    {props.columns
                        .filter(
                            (item) =>
                                item.field !== "id" && item.field !== "img"
                        )
                        .map((column) => (
                            <div
                                key={column.field}
                                className="w-[40%] flex flex-col gap-3 mb-5"
                            >
                                <label className="text-sm">
                                    {column.headerName}
                                </label>
                                <input
                                    type={column.type}
                                    placeholder={column.field}
                                    className="p-3 bg-transparent text-white outline-none border-solid border border-[#ddd] rounded"
                                />
                            </div>
                        ))}
                    <button className="bg-gray-50 text-black w-full p-3 cursor-pointer">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Add;

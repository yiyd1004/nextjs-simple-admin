"use client";

import Single from "@/components/single/Single";
import { singleUser } from "@/data/users";

function User({ params }: { params: { id: string } }) {
    return (
        <div className="w-full">
            <Single {...singleUser} />
        </div>
    );
}

export const dynamicParams = false;
export async function generateStaticParams() {
    const params = [];

    for (let i = 1; i <= 15; i++) {
        params.push({ id: i.toString() });
    }

    return params;
}

export default User;

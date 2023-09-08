"use client";

import Single from "@/components/single/Single";
import { singleProduct } from "@/data/product";

const Product = ({ params }: { params: { id: string } }) => {
    return (
        <div className="w-full">
            <Single {...singleProduct} />
        </div>
    );
};

export const dynamicParams = false;
export async function generateStaticParams() {
    const params = [];

    for (let i = 1; i <= 10; i++) {
        params.push({ id: i.toString() });
    }

    return params;
}

export default Product;

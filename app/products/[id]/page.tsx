import Single from "@/components/single/Single";
import { singleProduct } from "@/data/product";

const Product = ({ params }: { params: { id: string } }) => {
    return (
        <div className="w-full">
            <Single {...singleProduct} />
        </div>
    );
};

export default Product;

import Single from "@/components/single/Single";
import { singleUser } from "@/data/users";

function User({ params }: { params: { id: string } }) {
    return (
        <div className="w-full">
            <Single {...singleUser} />
        </div>
    );
}

export default User;

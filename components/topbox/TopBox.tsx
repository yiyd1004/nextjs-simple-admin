import { topDealUsers } from "@/data/topDealUsers";
import Image from "next/image";

const TopBox = () => {
    return (
        <div>
            <h1 className="mb-5 text-2xl font-bold">Top Deals</h1>
            <div className="w-full">
                {topDealUsers.map((user) => (
                    <div
                        key={user.id}
                        className="flex items-center justify-between mb-[1.875rem]"
                    >
                        <div className="flex gap-5">
                            <Image
                                src={user.img}
                                alt="user img"
                                width={40}
                                height={40}
                                className="rounded-full object-cover h-10 w-10"
                            />
                            <div className="flex flex-col gap-[0.313rem]">
                                <span className="text-sm font-medium">
                                    {user.username}
                                </span>
                                <span className="text-xs">{user.email}</span>
                            </div>
                        </div>
                        <div className="font-medium">${user.amount}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopBox;

import { menu } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
    const menuStyle = "flex flex-col gap-2.5 mb-5";
    const titleStyle = "text-xs font-extralight text-[#ddd] hidden md:block";
    const listItemStyle =
        "flex items-center gap-2.5 p-2.5 rounded-md hover:bg-[#384256]";
    return (
        <div
            id="menu"
            className="min-w-[3.188rem] md:w-[10.188rem] md:min-w-[10.188rem] px-[0.313rem] py-5 border-r-[0.125rem] border-solid border-[#384256]"
        >
            {menu.map((data) => (
                <div key={data.id} className={`${menuStyle}`}>
                    <span className={`${titleStyle}`}>
                        {data.title.toUpperCase()}
                    </span>
                    {data.listItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.url}
                            className={`${listItemStyle}`}
                        >
                            <Image
                                src={`/nextjs-simple-admin/assets/${item.icon}`}
                                width={20}
                                height={20}
                                alt="home icon"
                            />
                            <span className="hidden md:block">
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Menu;

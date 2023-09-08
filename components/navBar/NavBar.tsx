import Image from "next/image";

const NavBar = () => {
    return (
        <nav id="nav" className="w-full flex p-5 items-center justify-between">
            <div className="flex items-center font-bold gap-2.5">
                <Image
                    src="/nextjs-simple-admin/assets/logo.svg"
                    width={30}
                    height={30}
                    alt="logo"
                />
                <span>Admin</span>
            </div>
            <div className="flex items-center gap-5">
                <Image
                    src="/nextjs-simple-admin/assets/search.svg"
                    width={20}
                    height={20}
                    alt="search icon"
                />
                <Image
                    src="/nextjs-simple-admin/assets/app.svg"
                    width={20}
                    height={20}
                    alt="app icon"
                />
                <Image
                    src="/nextjs-simple-admin/assets/expand.svg"
                    width={20}
                    height={20}
                    alt="expand icon"
                />
                <div className="relative flex items-center">
                    <Image
                        src="/nextjs-simple-admin/assets/notifications.svg"
                        width={20}
                        height={20}
                        alt="noti icon"
                    />
                    <span className="flex items-center justify-center bg-red-600 text-xs text-white w-4 h-4 rounded-full absolute -top-[0.65rem] -right-[0.65rem]">
                        1
                    </span>
                </div>
                <div className="flex items-center gap-2.5">
                    <Image
                        src="/nextjs-simple-admin/assets/nav-user.svg"
                        width={26}
                        height={26}
                        alt="user icon"
                    />
                    <span>Dave</span>
                </div>
                <Image
                    src="/nextjs-simple-admin/assets/settings.svg"
                    width={20}
                    height={20}
                    alt="settings icon"
                />
            </div>
        </nav>
    );
};

export default NavBar;

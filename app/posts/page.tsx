import Image from "next/image";

const Posts = () => {
    return (
        <div className="flex flex-col flex-1 items-center justify-center">
            <Image
                src="/assets/under_construction.png"
                width={180}
                height={180}
                alt="under construction"
            />
            <span className="text-3xl">Under Construction</span>
        </div>
    );
};

export default Posts;

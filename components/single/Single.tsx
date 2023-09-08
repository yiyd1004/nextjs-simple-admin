"use client";

import Image from "next/image";
import {
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

type Props = {
    id: number;
    img?: string;
    title: string;
    info: object;
    chart?: {
        dataKeys: { name: string; color: string }[];
        data: object[];
    };
    activities?: { time: string; text: string }[];
};

const Single = (props: Props) => {
    return (
        <div className="flex mx-5">
            <div className="flex-1">
                <div>
                    <div className="flex items-center gap-5">
                        {props.img && (
                            <Image
                                src={props.img}
                                width={100}
                                height={100}
                                alt=""
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "20px",
                                    objectFit: "cover",
                                }}
                            />
                        )}
                        <h1 className="font-medium text-2xl">{props.title}</h1>
                        <button className="bg-red-500 p-2 rounded">
                            Update
                        </button>
                    </div>
                    <div className="text-lg">
                        {Object.entries(props.info).map((item) => (
                            <div className="my-8 mx-0" key={item[0]}>
                                <span className="font-semibold mr-3 capitalize">
                                    {item[0]}:
                                </span>
                                <span className="itemValue">{item[1]}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="w-[90%] h-0 border-[0.5px] border-solid border-gray-400 my-5" />
                {props.chart && (
                    <div className="mt-13 w-[80%] h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={props.chart.data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                {props.chart.dataKeys.map((dataKey) => (
                                    <Line
                                        key={dataKey.name}
                                        type="monotone"
                                        dataKey={dataKey.name}
                                        stroke={dataKey.color}
                                    />
                                ))}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
            <div className="flex-1">
                <h2 className="mb-5">Latest Activities</h2>
                {props.activities && (
                    <ul>
                        {props.activities.map((activity) => (
                            <li
                                key={activity.text}
                                className="list-none relative w-[1px] pt-12 bg-[#45b69] after:absolute after:left-[50%] after:bottom-0
                                after:w-[10px] after:h-[10px] after:rounded-full after:bg-[#f45b69] after:-translate-x-[50%]"
                            >
                                <div className="min-w-[480px] p-4 bg-[#f45b6810]">
                                    <p className="mb-1">{activity.text}</p>
                                    <time className="text-xs">
                                        {activity.time}
                                    </time>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Single;

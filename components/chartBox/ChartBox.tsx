"use client";

import Image from "next/image";
import Link from "next/link";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[];
};

function ChartBox(props: Props) {
    return (
        <div className="flex h-full">
            <div className="flex flex-[3_1_0%] flex-col justify-between">
                <div className="flex items-center gap-2.5 text-sm">
                    <Image
                        src={`/nextjs-simple-admin/assets/${props.icon}`}
                        width={20}
                        height={20}
                        alt="data icon"
                    />
                    <span>{props.title}</span>
                </div>
                <h1 className="text-2xl font-bold">{props.number}</h1>
                <Link href="/" style={{ color: `${props.color}` }}>
                    View all
                </Link>
            </div>
            <div className="flex flex-[2_1_0%] flex-col justify-between">
                <div className="w-full h-full">
                    <ResponsiveContainer width="99%" height="70%">
                        <LineChart data={props.chartData}>
                            <Tooltip
                                contentStyle={{
                                    background: "transparent",
                                    border: "none",
                                }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 55 }}
                            />
                            <Line
                                type="monotone"
                                dataKey={props.dataKey}
                                stroke={props.color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex flex-col text-right">
                    <span
                        className="font-bold text-xl"
                        style={{
                            color:
                                props.percentage > 0 ? "limegreen" : "tomato",
                        }}
                    >
                        {props.percentage}%
                    </span>
                    <span className="text-sm">this month</span>
                </div>
            </div>
        </div>
    );
}

export default ChartBox;

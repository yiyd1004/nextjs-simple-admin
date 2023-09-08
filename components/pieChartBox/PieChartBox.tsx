"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

type Data = {
    name: string;
    value: number;
    color: string;
};

type Prop = {
    chartData: Data[];
};

function PieChartBox(prop: Prop) {
    return (
        <div className="h-full flex flex-col justify-between">
            <h1 className="text-2xl">Leads by Source</h1>
            <div className="flex items-center justify-center w-full h-full">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{
                                background: "white",
                                borderRadius: "5px",
                            }}
                        />
                        <Pie
                            data={prop.chartData}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {prop.chartData.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 items-center justify-center w-full h-full flex-wrap">
                {prop.chartData.map((item) => (
                    <div
                        className="flex flex-col items-center gap-2.5 mr-4"
                        key={item.name}
                    >
                        <div className="flex items-center gap-2.5">
                            <div
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PieChartBox;

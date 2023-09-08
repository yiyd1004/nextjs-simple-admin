import BarChartBox from "@/components/barChartBox/BarChartBox";
import BigChartBox from "@/components/bigChartBox/BigChartBox";
import ChartBox from "@/components/chartBox/ChartBox";
import PieChartBox from "@/components/pieChartBox/PieChartBox";
import TopBox from "@/components/topbox/TopBox";
import {
    barChartBoxRevenue,
    barChartBoxVisit,
    bigChartData,
    chartBoxConversion,
    chartBoxProduct,
    chartBoxRevenue,
    chartBoxUser,
    pieChartData,
} from "@/data/chartData";

export default function Home() {
    const gridBoxStyle =
        "p-5 rounded-[0.625rem] border border-solid border-[#384256]";

    return (
        <div className="md:grid gap-5  md:grid-cols-2 md:grid-rows-[180px_min-content] xl:grid-cols-4 xl:grid-rows-[180px_180px_180px_min-content] grid-flow-dense w-full px-[0.313rem] py-5">
            <div className={`${gridBoxStyle} col-span-1 row-span-3`}>
                <TopBox />
            </div>
            <div className={`${gridBoxStyle}`}>
                <ChartBox {...chartBoxUser} />
            </div>
            <div className={`${gridBoxStyle}`}>
                <ChartBox {...chartBoxProduct} />
            </div>
            <div className={`${gridBoxStyle} col-span-1 row-span-3`}>
                <PieChartBox {...pieChartData} />
            </div>
            <div className={`${gridBoxStyle}`}>
                <ChartBox {...chartBoxConversion} />
            </div>
            <div className={`${gridBoxStyle}`}>
                <ChartBox {...chartBoxRevenue} />
            </div>
            <div className={`${gridBoxStyle} col-span-2 row-span-2`}>
                <BigChartBox {...bigChartData} />
            </div>
            <div className={`${gridBoxStyle}`}>
                <BarChartBox {...barChartBoxVisit} />
            </div>
            <div className={`${gridBoxStyle}`}>
                <BarChartBox {...barChartBoxRevenue} />
            </div>
        </div>
    );
}

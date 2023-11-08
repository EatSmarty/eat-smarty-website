import clsx from "clsx";
import GaugeChart from "react-gauge-chart";

export default function ToxicLevel() {
    return (
        <div className={clsx(
            "desc",
            "my-5",
            "text-left",
        )}>
            <span className={clsx(
                "text-gray-500 ",
                "mr-2",
            )}>Toxic Level</span>
            <div className={clsx(
                "w-full",
                "flex justify-center items-center",
                "my-5",
            )}>
                <div className={clsx(
                    "desc",
                    "text-xl",
                    "w-1/2",
                    "flex justify-center items-center",
                )}>
                    <GaugeChart id="gauge-chart1"
                        nrOfLevels={20}
                        percent={0.1}
                        arcWidth={0.2}
                        cornerRadius={1}></GaugeChart>
                </div>
            </div>
        </div>
    );
}
import clsx from "clsx";
import GaugeChart from "react-gauge-chart";

export default function Gauge({ danger }) {

    return (
        <div className={clsx(
            "w-20",
            "mt-4",
        )}>
            <GaugeChart id="gauge-chart1"
                nrOfLevels={5}
                percent={danger / 5}
                arcWidth={0.3}
                cornerRadius={1}
                animate={false}
            />
        </div>
    );
}
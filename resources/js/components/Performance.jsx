import { performance1, performance2 } from "../data.js";
import PerformanceCard from "./PerformanceCard.jsx";

const Performance = () => {
    return (
        <>
            <div className="flex gap-5 lg:gap-0 text-white py-5 lg:py-0 lg:h-36">
                <div className="flex flex-col lg:flex-row lg:gap-28 gap-2 items-start justify-center w-[50%]">
                    {performance1.map((performance, index) => (
                        <PerformanceCard
                            key={index}
                            icon={performance.icon}
                            number={performance.number}
                            title={performance.title}
                        />
                    ))}
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-28 gap-2 items-end lg:items-start justify-center w-[50%]">
                    {performance2.map((performance, index) => (
                        <PerformanceCard
                            key={index}
                            icon={performance.icon}
                            number={performance.number}
                            title={performance.title}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Performance;

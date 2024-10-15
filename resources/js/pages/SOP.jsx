import LinkNews from "../components/LinkNews";
import Search from "../components/Search";
import SOPCard from "../components/SOPCard";

const SOP = ({ data, latestNews, newsDisplayForAYear }) => {
    return (
        <div>
            <div className="w-full pt-9 px-8 pb-40 lg:px-48 lg:pt-20">
                <h1 className="text-color-2 font-bold text-3xl lg:text-4xl">
                    SOP Fakultas Ekonomi Unisda
                </h1>
                <div className="w-full h-[1px] md:h-[2px] bg-color-1 mb-3 md:mb-6 mt-3"></div>
                <div className="flex flex-col gap-12">
                    {data.map((item, index) => (
                        <SOPCard data={item} key={index} />
                    ))}
                </div>
            </div>
            <Search />
            <LinkNews
                latestNews={latestNews}
                newsDisplayForAYear={newsDisplayForAYear}
            />
        </div>
    );
};

export default SOP;

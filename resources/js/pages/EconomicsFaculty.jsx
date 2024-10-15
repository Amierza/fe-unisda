import LinkNews from "../components/LinkNews.jsx";
import SasaranProdi from "../components/SasaranProdi.jsx";
import Search from "../components/Search.jsx";

const EconomicsFaculty = ({ data, latestNews, newsDisplayForAYear }) => {
    console.log(data);
    return (
        <div>
            <div className="w-full pt-9 px-8 pb-40 lg:px-48 lg:pt-20">
                <h1 className="text-color-2 font-bold text-3xl lg:text-4xl">
                    {data.title}
                </h1>
                <div className="w-full h-[1px] md:h-[2px] bg-color-1 mb-3 md:mb-6 mt-3"></div>
                {!data.content.some((item) => item.type === "images") && (
                    <img
                        src={`/storage/${data.image}`}
                        alt="Image from outside content"
                        className="mt-6"
                    />
                )}
                {data.content.map((item, itemIndex) => {
                    if (item.type === "text") {
                        return (
                            <div key={itemIndex} className="pt-6">
                                <h1 className="text-color-1 text-lg font-semibold mb-3 lg:text-2xl">
                                    {item.title}
                                </h1>
                                <p className="font-light text-lg">
                                    {item.value}
                                </p>
                            </div>
                        );
                    }
                    if (item.type === "list") {
                        return (
                            <div key={itemIndex} className="pt-6">
                                <h1 className="text-color-1 text-lg font-semibold mb-3 lg:text-2xl">
                                    {item.title}
                                </h1>
                                <div className="ml-6">
                                    <ol
                                        type="1"
                                        className="list-decimal font-light flex flex-col gap-3 lg:text-lg"
                                    >
                                        {item.value.map((part, partIndex) => (
                                            <li key={partIndex}>
                                                {part.items}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        );
                    }
                    if (item.type === "listArray") {
                        return (
                            <div className="pt-6">
                                <h1 className="text-color-1 text-lg font-semibold mb-3 lg:text-2xl">
                                    {item.title}
                                </h1>
                                <div className="ml-6">
                                    <SasaranProdi data={item.value} />
                                </div>
                            </div>
                        );
                    }
                    if (item.type === "images") {
                        const imageContent = item.value;
                        if (imageContent && imageContent.length > 0) {
                            return imageContent.map((image, index) => (
                                <img
                                    key={index}
                                    src={`/storage/${image.item}`}
                                    alt={`Image ${index + 1}`}
                                    className="mt-6"
                                />
                            ));
                        }
                    }
                    return null;
                })}
            </div>
            <Search />
            <LinkNews
                latestNews={latestNews}
                newsDisplayForAYear={newsDisplayForAYear}
            />
        </div>
    );
};

export default EconomicsFaculty;

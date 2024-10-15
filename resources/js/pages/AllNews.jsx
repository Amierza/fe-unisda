import LinkNews from "../components/LinkNews.jsx";
import Search from "../components/Search.jsx";

const AllNews = ({ data, latestNews, newsDisplayForAYear }) => {
    return (
        <div>
            <div className="w-full pt-9 px-8 pb-40 lg:px-48 lg:pt-20">
                <h2 className="text-2xl font-bold text-center text-color-2">
                    Semua Berita
                </h2>
                <div className="w-full h-[1px] md:h-[2px] bg-color-1 lg:mb-12 md:mb-6 mt-3 mb-6"></div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {data.map((newsItem, index) => (
                        <a
                            key={index}
                            href={`/news/${newsItem.link}`}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 cursor-pointer"
                        >
                            <img
                                src={`/storage/${newsItem.image}`}
                                alt={newsItem.title}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-3 text-color-1">
                                    {newsItem.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {newsItem.date}
                                </p>
                                <p className="text-gray-800 text-sm">
                                    {newsItem.content
                                        .find((item) => item.type === "text")
                                        ?.value.slice(0, 100) ||
                                        newsItem.content
                                            .find(
                                                (item) =>
                                                    item.type === "textTitle"
                                            )
                                            ?.value.slice(0, 100) ||
                                        (Array.isArray(newsItem.textBox) &&
                                        newsItem.textBox.length > 0
                                            ? newsItem.textBox[0].slice(0, 100)
                                            : "")}
                                    ...
                                </p>
                            </div>
                        </a>
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

export default AllNews;

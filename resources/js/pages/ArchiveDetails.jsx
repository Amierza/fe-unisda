import Search from "../components/Search.jsx";
import LinkNews from "../components/LinkNews.jsx";

const ArchiveDetails = ({
    yearParam,
    monthParam,
    archives,
    latestNews,
    newsDisplayForAYear,
}) => {
    if (!archives) {
        return (
            <div>
                <div className="w-full pt-9 px-8 pb-40 lg:px-48 lg:pt-20">
                    <h1>
                        Tidak ada berita di bulan {monthParam} {yearParam}
                    </h1>
                </div>
                <Search />
                <LinkNews
                    latestNews={latestNews}
                    newsDisplayForAYear={newsDisplayForAYear}
                />
            </div>
        );
    }
    return (
        <div>
            <div className="w-full pt-9 px-8 pb-40 lg:px-48 lg:pt-20">
                <h2 className="text-2xl font-bold mb-8">
                    Berita untuk{" "}
                    {
                        newsDisplayForAYear.find(
                            (item) => String(item.month) === String(monthParam)
                        )?.monthName
                    }{" "}
                    {yearParam}
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {archives.map((newsItem, index) => (
                        <a
                            key={index}
                            href={`/news/${newsItem.link}`}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 cursor-pointer"
                        >
                            <img
                                src={`/storage/${newsItem.image}`}
                                alt={newsItem.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-3 text-color-2">
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

export default ArchiveDetails;

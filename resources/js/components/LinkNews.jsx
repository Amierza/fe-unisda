const LinkNews = ({ latestNews, newsDisplayForAYear }) => {
    return (
        <div className="pt-28 px-8 w-full flex flex-col gap-10 lg:flex-row lg:justify-center lg:gap-96 lg:pt-44 bg-color-1 pb-20">
            <div>
                <h1 className="text-color-3 font-bold text-3xl">
                    Pos - Pos Terbaru
                </h1>
                <div className="w-full h-[2px] md:h-[2px] bg-white mb-3 md:mb-6 mt-3"></div>
                <div className="ml-7 mt-6">
                    <ul className="list-disc text-white">
                        {latestNews.slice(0, 6).map((post, index) => (
                            <li
                                key={index}
                                className="mb-2 hover:text-gray-400"
                            >
                                <a href={`/news/${post.link}`}>{post.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <h1 className="text-color-3 font-bold text-3xl">Arsip</h1>
                <div className="w-full h-[2px] md:h-[2px] bg-white mb-3 md:mb-6 mt-3"></div>
                <div className="ml-7 mt-6">
                    <ul className="list-disc text-white">
                        {newsDisplayForAYear
                            .sort((a, b) => b.month - a.month)
                            .map((newsDisplay, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="mb-2 hover:text-gray-400"
                                    >
                                        <a
                                            href={`/archive/${newsDisplay.year}/${newsDisplay.month}`}
                                        >
                                            {`${newsDisplay.monthName} ${newsDisplay.year}`}
                                        </a>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LinkNews;

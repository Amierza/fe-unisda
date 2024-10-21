import LinkNews from "../components/LinkNews";
import Search from "../components/Search";

const NewsDetailPages = ({ slug, data, latestNews, newsDisplayForAYear }) => {
    const newsItem = data.find((news) => news.link === slug);
    if (!newsItem) {
        return (
            <div className="w-full pt-9 px-8 pb-40 lg:px-48 lg:pt-20">
                <h1>Tidak ada berita</h1>
            </div>
        );
    }
    const limitWords = (text, limit) => {
        const words = text.split(" ");
        return words.length > limit
            ? words.slice(0, limit).join(" ") + "..."
            : text;
    };

    const currentIndex = data.findIndex((news) => news.link === slug);

    const previousNews = currentIndex > 0 ? data[currentIndex - 1] : null;
    const nextNews =
        currentIndex < data.length - 1 ? data[currentIndex + 1] : null;
    return (
        <div>
            <div className="w-full pt-9 px-8 pb-40 lg:px-48 lg:pt-20">
                <h1 className="text-color-2 font-bold text-3xl lg:text-4xl">
                    {newsItem.title}
                </h1>
                <div className="w-full h-[1px] md:h-[2px] bg-color-1 mb-3 md:mb-6 mt-3"></div>
                {newsItem.image && (
                    <img
                        src={`/storage/${newsItem.image}`}
                        alt="Akuntansi"
                        className="mt-6 lg:w-[40%]"
                    />
                )}
                <p className="text-color-2 font-medium mt-5 lg:text-lg">
                    Posted{" "}
                    <span className="text-black font-light">
                        {newsItem.date}
                    </span>
                </p>
                <div className="mt-5 lg:text-xl">
                    {newsItem.content.map((item, index) => {
                        if (item.type === "text") {
                            return (
                                <p key={index} className="mb-4 font-light mt-7">
                                    {item.value}
                                </p>
                            );
                        }
                        if (item.type === "textTitle") {
                            return (
                                <p
                                    key={index}
                                    className="mb-4 font-semibold text-xl mt-7"
                                >
                                    {item.value}
                                </p>
                            );
                        }
                        if (item.type === "textBox") {
                            return (
                                <div
                                    key={index}
                                    className="mt-7 mb-7 font-light"
                                >
                                    {item.value.map((text, textIndex) => (
                                        <p key={textIndex}>{text.value}</p>
                                    ))}
                                </div>
                            );
                        }
                        if (item.type === "images") {
                            return (
                                <div key={index} className="lg:flex lg:gap-5">
                                    {item.value.map((image, imageIndex) => (
                                        <img
                                            key={imageIndex}
                                            className="mt-6 lg:w-[40%] lg:h-[20%]"
                                            src={`/storage/${image.item}`}
                                        />
                                    ))}
                                </div>
                            );
                        }
                        if (item.type === "image") {
                            return (
                                <img
                                    key={index}
                                    className="mt-6 lg:w-[60%]"
                                    src={`/storage/${item.value}`}
                                />
                            );
                        }
                        if (item.type === "listt") {
                            return (
                                <div
                                    key={index}
                                    className="mb-7 mt-7 flex flex-col gap-7"
                                >
                                    {item.value.map((listGroup, listIndex) => (
                                        <div
                                            key={listIndex}
                                            className="lg:mb-4"
                                        >
                                            {listGroup.title && (
                                                <h3 className="font-semibold">
                                                    {listGroup.title}
                                                </h3>
                                            )}
                                            {Array.isArray(listGroup.items) &&
                                                listGroup.items.length > 0 && (
                                                    <ul className="list-disc ml-5 flex flex-col lg:gap-3 gap-2 lg:mt-3 mt-1">
                                                        {listGroup.items.map(
                                                            (
                                                                listItem,
                                                                itemIndex
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        itemIndex
                                                                    }
                                                                    className="font-light"
                                                                >
                                                                    <span className="text-color-2">
                                                                        {
                                                                            listItem.subtitle
                                                                        }
                                                                    </span>
                                                                    :{" "}
                                                                    {
                                                                        listItem.description
                                                                    }
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                        </div>
                                    ))}
                                </div>
                            );
                        }
                        if (item.type === "list") {
                            return (
                                <div
                                    key={index}
                                    className="mb-7 mt-7 flex flex-col gap-7"
                                >
                                    {item.value.map((listGroup, listIndex) => (
                                        <div
                                            key={listIndex}
                                            className="lg:mb-4"
                                        >
                                            {listGroup.title && (
                                                <h3 className="font-semibold">
                                                    {listGroup.title}
                                                </h3>
                                            )}
                                            {Array.isArray(listGroup.items) &&
                                                listGroup.items.length > 0 && (
                                                    <ul className="list-disc ml-5 text-color-2 flex flex-col lg:gap-3 gap-2 lg:mt-3 mt-1">
                                                        {listGroup.items.map(
                                                            (
                                                                listItem,
                                                                itemIndex
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        itemIndex
                                                                    }
                                                                >
                                                                    <a
                                                                        href={
                                                                            listItem.linkItems
                                                                        }
                                                                        className="hover:text-color-1"
                                                                    >
                                                                        {
                                                                            listItem.items
                                                                        }
                                                                    </a>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                        </div>
                                    ))}
                                </div>
                            );
                        }
                        if (item.type === "lisst") {
                            return (
                                <ol
                                    key={index}
                                    type="1"
                                    className="list-decimal ml-5 mb-4 flex flex-col gap-4 mt-7"
                                >
                                    {item.value.map((list, listIndex) => (
                                        <li
                                            key={listIndex}
                                            className="font-light"
                                        >
                                            <span className="font-medium">
                                                {list.title}
                                            </span>
                                            : {list.items}
                                        </li>
                                    ))}
                                </ol>
                            );
                        }
                        if (item.type === "lisstt") {
                            return (
                                <ul
                                    key={index}
                                    className="list-disc ml-5 mb-4 flex flex-col gap-2 mt-7"
                                >
                                    {item.value.map((list, listIndex) => (
                                        <li
                                            key={listIndex}
                                            className="font-light"
                                        >
                                            {list.item}
                                        </li>
                                    ))}
                                </ul>
                            );
                        }
                        return null;
                    })}
                </div>
                <div
                    className={`flex lg:flex-row flex-col items-center gap-10 md:text-base ${
                        previousNews ? "justify-between" : "justify-end"
                    } mt-[5rem] lg:text-lg text-sm text-color-2`}
                >
                    {previousNews && (
                        <a
                            href={`/news/${previousNews.link}`}
                            className="hover:scale-105 hover:text-color-1 flex items-center gap-1"
                        >
                            <ion-icon
                                name="chevron-back-circle-outline"
                                class="next-button"
                            ></ion-icon>
                            {previousNews.title.length > 10
                                ? limitWords(previousNews.title, 5)
                                : previousNews.title}
                        </a>
                    )}
                    {nextNews && (
                        <a
                            href={`/news/${nextNews.link}`}
                            className="hover:scale-105 hover:text-color-1 flex items-center gap-1"
                        >
                            {nextNews.title.length > 10
                                ? limitWords(nextNews.title, 5)
                                : nextNews.title}
                            <ion-icon
                                name="chevron-forward-circle-outline"
                                class="previous-button"
                            ></ion-icon>
                        </a>
                    )}
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

export default NewsDetailPages;

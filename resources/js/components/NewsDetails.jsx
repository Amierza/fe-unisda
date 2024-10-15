import Card from "./Card.jsx";

const NewsDetails = ({ newss }) => {
    return (
        <>
            <div
                id="informasi"
                className="lg:h-[1685px] lg:px-[73px] px-14 lg:pt-10 flex flex-col items-center py-16"
            >
                <p className="text-color-1 font-bold text-[30px] text-center lg:mt-14 mb-[17px]">
                    Rilis Berita
                </p>
                <div className="w-full flex justify-center">
                    <div className="h-[3px] w-[160px] bg-color-3"></div>
                </div>
                <div className="w-full mb-8">
                    <div className="h-[1px] bg-[#D8D8D8]"></div>
                </div>
                <div className="flex flex-col justify-start items-center mb-[52px] gap-10 h-full">
                    <div className="flex lg:flex-row flex-col gap-8 items-center justify-center lg:gap-10">
                        {newss
                            .slice()
                            .reverse()
                            .slice(0, 4)
                            .map((news, index) => {
                                const firstTextContent =
                                    news.content.find(
                                        (part) => part.type === "text"
                                    )?.value || "";
                                return (
                                    <Card
                                        key={index}
                                        image={news.image}
                                        date={news.date}
                                        title={news.title}
                                        description={firstTextContent}
                                        link={news.link}
                                    />
                                );
                            })}
                    </div>
                    <div className="hidden lg:flex lg:flex-row flex-col gap-8 items-center justify-center lg:gap-10">
                        {newss
                            .slice()
                            .reverse()
                            .slice(4, 8)
                            .map((news, index) => {
                                const firstTextContent =
                                    news.content.find(
                                        (part) => part.type === "text"
                                    )?.value || "";
                                return (
                                    <Card
                                        key={index}
                                        image={news.image}
                                        date={news.date}
                                        title={news.title}
                                        description={firstTextContent}
                                        link={news.link}
                                    />
                                );
                            })}
                    </div>
                </div>
                <a
                    href="/all-news"
                    className="py-2 px-5 bg-color-3 rounded-full hover:bg-[#CCC000]"
                >
                    Berita Lainnya ...
                </a>
            </div>
        </>
    );
};

export default NewsDetails;

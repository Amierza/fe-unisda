import { useState, useEffect, useRef } from "react";
import CardNews from "../components/CardNews.jsx";

const News = ({ newss }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const slideWidth = containerWidth * 0.8;
                const scrollLeft = containerRef.current.scrollLeft;

                const index = Math.floor(scrollLeft / slideWidth);
                setActiveIndex(index);
            }
        };

        if (containerRef.current) {
            containerRef.current.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener(
                    "scroll",
                    handleScroll
                );
            }
        };
    }, []);

    return (
        <div className="py-[30px] px-[40px] md:py-12 md:px-16">
            <h1 className="text-center text-4xl font-bold mb-3">
                Berita Terbaru
            </h1>
            <div className="w-full h-[1px] md:h-[2px] bg-color-1 mb-3 md:mb-6"></div>
            <div
                ref={containerRef}
                className="overflow-x-auto flex snap-x gap-6 scroll-container mb-5"
            >
                {newss
                    .slice()
                    .reverse()
                    .slice(0, 4)
                    .map((news, index) => {
                        let firstTextContent = news.content.find(
                            (part) =>
                                part.type === "text" && part.value.length > 10
                        )?.value;

                        if (!firstTextContent) {
                            firstTextContent = news.content.find(
                                (part) => part.type === "text"
                            )?.value;
                        }

                        if (!firstTextContent) {
                            firstTextContent =
                                news.textBox?.[0]?.substring(0, 5) || "";
                        }

                        let firstImageContent = news.content.find(
                            (part) => part.type === "image"
                        )?.value;

                        if (!firstImageContent) {
                            const fallbackImages = news.content.find(
                                (part) => part.type === "images"
                            )?.value;

                            if (fallbackImages && fallbackImages.length > 0) {
                                firstImageContent =
                                    fallbackImages[0]?.item || "";
                            }
                        }

                        if (!firstImageContent) {
                            firstImageContent = news.image;
                        }
                        return (
                            <CardNews
                                key={index}
                                image={`/storage/${firstImageContent}`}
                                date={news.date}
                                title={news.title}
                                description={firstTextContent}
                                link={news.link}
                            />
                        );
                    })}
            </div>
            <div className="w-full h-10 flex gap-2 justify-center items-center">
                {[...Array(newss.slice(0, 4).length)].map((_, index) => (
                    <div
                        key={index}
                        className={`h-[10px] ${
                            index === activeIndex ? "w-[40px]" : "w-[10px]"
                        } ${
                            index === activeIndex
                                ? "bg-color-1"
                                : "bg-[#D3D3D3]"
                        } rounded-full`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default News;

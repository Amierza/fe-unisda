import PropTypes from "prop-types";

const CardNews = ({ image, date, title, description, link }) => {
    const limitWords = (text, limit) => {
        const words = text.split(" ");
        return words.length > limit
            ? words.slice(0, limit).join(" ") + "..."
            : text;
    };
    return (
        <div className="flex-shrink-0 w-full snap-start mb-5">
            <div className="lg:h-[420px] lg:flex lg:gap-72">
                <div className="lg:h-full lg:w-[581px] w-full">
                    <p className="lg:text-5xl text-xl md:text-2xl font-semibold lg:mb-4 mb-1 md:mb-2">
                        {limitWords(title, 10)}
                    </p>
                    <div className="flex items-center gap-2 lg:mb-5 mb-1">
                        <ion-icon
                            name="time-outline"
                            class="time-outline-ion"
                        ></ion-icon>
                        <p className="text-[#949494] font-light text-[13px] lg:text-[1rem]">
                            {date}
                        </p>
                    </div>
                    <img
                        src={image}
                        alt=""
                        className="lg:hidden rounded-2xl mb-2 mt-2 md:w-[80%]"
                    />
                    <p className="lg:text-[17px] lg:mt-0 mb-10 mt-10">
                        {limitWords(description, 30)}
                    </p>
                    <a
                        href={`/news/${link}`}
                        className="rounded-xl bg-color-1 text-white text-[16px] font-medium px-5 py-3 hover:bg-[#003900]"
                    >
                        Baca Selengkapnya
                    </a>
                </div>
                <div className=" hidden lg:flex w-[50%] h-full justify-end">
                    <img
                        src={image}
                        alt={title}
                        className="object-cover rounded-l-[50px]"
                    />
                </div>
            </div>
        </div>
    );
};

CardNews.propTypes = {
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default CardNews;

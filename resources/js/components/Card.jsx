import PropTypes from "prop-types";
import UnisdaIcon from "../../../public/storage/assets/unisda-icon.png";

const Card = ({ image, date, title, description, link }) => {
    const limitWords = (text, limit) => {
        const words = text.split(" ");
        return words.length > limit
            ? words.slice(0, limit).join(" ") + "..."
            : text;
    };
    return (
        <div className="w-[333px] h-[655px] rounded-3xl shadow-md">
            <img
                src={`storage/${image}`}
                alt={title}
                className="rounded-t-3xl object-cover w-full"
            />
            <div className="px-[17px] py-5 w-full h-[325px]">
                <div className="flex items-center">
                    <img
                        src={UnisdaIcon}
                        className="w-[34px] mr-2"
                        alt="university_logo"
                    />
                    <p className="font-semibold text-sm text-color-2 mr-1">
                        FE
                    </p>
                    <p className="font-semibold text-sm mr-[30px]">UNISDA</p>
                    <ion-icon
                        name="time-outline"
                        class="time-outline-ion"
                    ></ion-icon>
                    <p className="text-[#949494] text-[0.7rem] lg:text-[0.7rem] ml-1 font-light">
                        {date}
                    </p>
                </div>
                <div className="h-[250px] py-2 flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold text-xl">
                            {limitWords(title, 5)}
                        </p>
                        <p className="text-sm">{limitWords(description, 20)}</p>
                    </div>
                    <a
                        href={`/news/${link}`}
                        className="bg-color-1 w-full py-2 rounded-xl text-white hover:bg-[#003F00] flex items-center justify-center"
                    >
                        Lihat Detail
                    </a>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Card;

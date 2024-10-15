import PropTypes from "prop-types";

const ProdiCard = ({ imageProdi, title, description, link }) => {
    return (
        <a
            href={link}
            className="lg:w-[319px] mx-24 max-w-80 px-5 py-8 lg:h-[506px] rounded-3xl shadow-md bg-white hover:scale-105 hover:cursor-pointer"
        >
            <img
                src={`/storage/${imageProdi}`}
                alt="akuntasni_image"
                className="mb-5"
            />
            <p className="font-semibold text-xl mb-4">{title}</p>
            <p className="font-light lg:text-[16px] text-[15px]">
                {description}
            </p>
        </a>
    );
};

ProdiCard.propTypes = {
    imageProdi: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default ProdiCard;

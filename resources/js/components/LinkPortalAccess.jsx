import PropTypes from "prop-types";

const LinkPortalAccess = ({ title, link }) => {
    return (
        <a
            href={link}
            className="flex items-center text-sm justify-center text-center rounded-full px-2 bg-white lg:h-[90px] h-[40px] lg:w-[443px] w-[180px] lg:text-2xl font-semibold hover:bg-gray-300 cursor-pointer"
        >
            {title}
        </a>
    );
};

LinkPortalAccess.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default LinkPortalAccess;

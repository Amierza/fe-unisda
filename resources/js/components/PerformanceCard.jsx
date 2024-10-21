import PropTypes from "prop-types";

const PerformanceCard = ({ icon, number, title }) => {
    return (
        <div
            className={
                title == "Lingkungan Asri" || title == "Lulusan"
                    ? "lg:w-[300px] w-[180px] lg:h-[80px] h-[47px] bg-blue-900 lg:rounded-b-3xl lg:rounded-none rounded-r-3xl lg:px-3 lg:py-6 px-3 py-3 flex items-center justify-center lg:gap-4 gap-2"
                    : "lg:w-[300px] w-[180px] lg:h-[80px] h-[47px] bg-blue-900 lg:rounded-b-3xl lg:rounded-none rounded-l-3xl lg:px-3 lg:py-6 flex items-center justify-center lg:gap-4 gap-2"
            }
        >
            <img src={icon} className="lg:h-[36px] h-6" alt="lingkungan-icon" />
            <p className="lg:text-2xl text-lg">{number}</p>
            <p className="lg:text-xl text-[13px]">{title}</p>
        </div>
    );
};

PerformanceCard.propTypes = {
    icon: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default PerformanceCard;

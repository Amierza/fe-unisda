import PropTypes from "prop-types";

const StructurCard = ({ role, image, name, description, NIDN, address }) => {
    return (
        <div className="h-[610px] w-[360px] flex items-center flex-col lg:mb-[50px] mb-5">
            <p className="lg:text-[50px] text-[40px] text-color-1 font-semibold lg:mb-[4px]">
                {role}
            </p>
            <div className="lg:w-[125px] w-[100px] lg:h-[4px] h-[3px] bg-color-3 mb-5"></div>
            <img
                src={`storage/${image}`}
                className="rounded-full mb-3 w-[65%] lg:w-[85%]"
                alt="dekan"
            />
            <div className="w-[358px] h-[219px] flex flex-col items-center px-10">
                <p className="font-semibold text-[20px] text-center mb-[15px]">
                    {name}
                </p>
                <p className="text-[18px] mb-5 text-center">{description}</p>
                <p className="text-[14px]">NIDN: {NIDN}</p>
                <p className="text-[14px] text-center">{address}</p>
            </div>
        </div>
    );
};

StructurCard.propTypes = {
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    NIDN: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
};

export default StructurCard;

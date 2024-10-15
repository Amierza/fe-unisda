const KataMerekaCard = ({ data }) => {
    return (
        <div className="pt-6">
            <p className="font-light">{data.comment}</p>
            <h1 className="font-semibold text-lg text-color-2 mt-3">
                {`${data.commentatorName} - ${data.commentatorCompany}`}
            </h1>
            <div className="w-full h-[2px] md:h-[2px] bg-color-1 mb-3 md:mb-6 mt-3"></div>
        </div>
    );
};

export default KataMerekaCard;

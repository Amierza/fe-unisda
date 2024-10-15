const SOPCard = ({ data }) => {
    return (
        <div className="pt-6">
            <h1 className="text-color-1 text-lg font-semibold mb-3 lg:text-2xl">
                {data.title}
            </h1>
            <div className="ml-6">
                <ol
                    type="1"
                    className="list-decimal font-light flex flex-col gap-3 lg:text-lg"
                >
                    {data.content.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-color-2"
                            >
                                {item.SOPTitle}
                            </a>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default SOPCard;

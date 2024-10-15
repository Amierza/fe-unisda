const SasaranProdi = ({ data }) => {
    return (
        <ul className="list-disc font-light flex flex-col gap-4 lg:text-lg">
            {data.map((section, index) => (
                <li key={index}>
                    {section.title}
                    <ul className="list-disc font-light flex flex-col gap-2 lg:text-lg ml-3 mt-2">
                        {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item.item}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
};

export default SasaranProdi;

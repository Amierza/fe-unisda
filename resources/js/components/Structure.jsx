import StructurCard from "./StructurCard.jsx";
const Structure = ({ structures }) => {
    return (
        <>
            <div
                id="structure"
                className="lg:h-[2189px] lg:px-[300px] lg:py-[100px] p-11 flex flex-col items-center"
            >
                <p className="font-semibold lg:text-[40px] lg:mb-3 text-2xl">
                    Pimpinan
                </p>
                <p className="font-light lg:text-[20px] text-[17px] mb-11">
                    Pejabat Struktural Fakultas Ekonomi
                </p>
                {structures && structures.length > 0 && (
                    <>
                        <StructurCard
                            role={structures[0].role}
                            image={structures[0].image}
                            name={structures[0].name}
                            description={structures[0].description}
                            NIDN={structures[0].NIDN}
                            address={structures[0].address}
                        />

                        <div className="flex lg:flex-row flex-col lg:gap-[140px] gap-24 lg:mb-[50px] mb-28">
                            {structures.slice(1, 3).map((person, index) => (
                                <StructurCard
                                    key={index}
                                    role={person.role}
                                    image={person.image}
                                    name={person.name}
                                    description={person.description}
                                    NIDN={person.NIDN}
                                    address={person.address}
                                />
                            ))}
                        </div>

                        <div className="flex lg:flex-row flex-col gap-[140px] mb-[50px]">
                            {structures.slice(3, 5).map((person, index) => (
                                <StructurCard
                                    key={index}
                                    role={person.role}
                                    image={person.image}
                                    name={person.name}
                                    description={person.description}
                                    NIDN={person.NIDN}
                                    address={person.address}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Structure;

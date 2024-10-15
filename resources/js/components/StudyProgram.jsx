import Dekor from "../../../public/storage/assets/dekor.png";
import ProdiCard from "./ProdiCard.jsx";
import React from "react";

const StudyProgram = ({ prodis }) => {
    console.log(prodis);
    return (
        <>
            <div className="lg:h-[700px] py-10 relative overflow-hidden">
                <p className="text-center font-bold text-color-1 lg:text-[40px] text-3xl lg:mb-12 mb-4">
                    Program Studi
                </p>
                <div className="flex items-center justify-center lg:flex-row flex-col lg:gap-[80px] gap-8 md:gap-10">
                    {prodis.map((prodi, index) => {
                        const textContent = prodi.content.find(
                            (item) => item.type === "text"
                        );
                        return (
                            <ProdiCard
                                key={index}
                                imageProdi={prodi.image}
                                title={prodi.title}
                                description={
                                    textContent
                                        ? textContent.value
                                        : "No description available"
                                }
                                link={prodi.link}
                            />
                        );
                    })}
                </div>
                <img
                    src={Dekor}
                    alt="dekor"
                    className="h-[400px] w-[400px] absolute -top-44 -left-44 -z-50"
                />
                <img
                    src={Dekor}
                    alt="dekor"
                    className="h-[400px] w-[400px] absolute -bottom-44 -right-44 -z-50"
                />
            </div>
        </>
    );
};

export default StudyProgram;

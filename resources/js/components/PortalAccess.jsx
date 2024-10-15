import BgAksesPortal from "../../../public/storage/assets/bg-akses-portal.png";
import LinkPortalAccess from "./LinkPortalAccess.jsx";
import { linkPortalAccess1, linkPortalAccess2 } from "../data.js";

const PortalAccess = () => {
    return (
        <>
            <div
                className="py-8 px-10 lg:py-14 lg:px-72 bg-center bg-cover text-black"
                style={{ backgroundImage: `url(${BgAksesPortal})` }}
            >
                <p className="text-white text-3xl lg:text-5xl font-semibold text-center lg:mb-16 md:12 mb-8">
                    Akses Portal
                </p>
                <div className="flex justify-center items-center lg:gap-24 gap-5 md:gap-10">
                    <div className="flex flex-col lg:gap-14 gap-7 items-center justify-center">
                        {linkPortalAccess1.map((link, index) => (
                            <LinkPortalAccess
                                key={index}
                                title={link.title}
                                link={link.link}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col lg:gap-14 gap-7 items-center justify-center">
                        {linkPortalAccess2.map((link, index) => (
                            <LinkPortalAccess
                                key={index}
                                title={link.title}
                                link={link.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortalAccess;

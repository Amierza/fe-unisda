import LogoUnisda from "../../../public/storage/assets/unisda-icon.png";
import LogoKampusMerdeka from "../../../public/storage/assets/kampus-merdeka-icon.png";
import { useState } from "react";

const Header2 = () => {
    const [nav, setNav] = useState(false);
    const [prodiIsOpen, setProdiIsOpen] = useState(false);
    const [infoIsOpen, setInfoIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    const handleNav = () => {
        setNav(!nav);
    };
    const handleProdiIsOpen = () => {
        setProdiIsOpen(!prodiIsOpen);
        setInfoIsOpen(false);
    };
    const handleInfoIsOpen = () => {
        setInfoIsOpen(!infoIsOpen);
        setProdiIsOpen(false);
    };
    const handleLinkClick = () => {
        setNav(false);
        setProdiIsOpen(false);
        setInfoIsOpen(false);
    };
    const handleLinkClickTwice = (link) => {
        event.preventDefault();
        if (window.location.pathname !== "/") {
            window.location.href = "/";
        }
        if (activeLink === link) {
            return;
        }
        setActiveLink(link);
        window.location.href = link;
    };

    return (
        <div className="text-white sticky z-50 top-0 lg:h-[89px] md:h-[80px] h-[67px] bg-color-2 px-5 md:px-10 lg:px-[70px] flex">
            <div className="w-full flex justify-between items-center lg:gap-28">
                <div className="flex items-center lg:justify-between lg:w-full md:gap-12 md:mx-auto lg:m-0">
                    <a href="/">
                        <div className="flex items-center gap-4">
                            <img
                                src={LogoUnisda}
                                className="md:w-20 w-16"
                                alt="Logo Unisda"
                            />
                            <p className="font-semibold hidden md:hidden md:text-sm lg:flex">
                                UNIVERSITAS ISLAM DARUL ULUM <br />
                                FAKULTAS EKONOMI
                            </p>
                        </div>
                    </a>
                    <ul className="hidden md:flex items-center md:gap-8 md:text-sm lg:text-base lg:gap-24 font-light">
                        <li>
                            <a
                                href={
                                    window.location.pathname === "/"
                                        ? "#home"
                                        : "/#home"
                                }
                                onClick={() => handleLinkClickTwice("#home")}
                                className="hover:text-gray-400 hover:scale-105 transition duration-200 ease-in-out"
                            >
                                Beranda
                            </a>
                        </li>
                        <div className="relative">
                            <li>
                                <div className="flex justify-between items-center group gap-2">
                                    <p
                                        className="prodi-item-link cursor-pointer"
                                        onClick={handleProdiIsOpen}
                                    >
                                        Akademik
                                    </p>
                                    <ion-icon
                                        name="chevron-down-outline"
                                        id="chevron-ion"
                                        onClick={handleProdiIsOpen}
                                    ></ion-icon>
                                </div>
                            </li>
                            <ul
                                className={
                                    prodiIsOpen
                                        ? "flex flex-col ml-5 gap-3 absolute -left-[52px] lg:-left-16 top-6 lg:top-8 bg-white rounded-lg p-4"
                                        : "hidden"
                                }
                            >
                                <li className="text-gray-400 hover:text-color-2 hover:font-bold lg:text-lg hover:cursor-pointer">
                                    <a
                                        href="/fakultas-ekonomi"
                                        onClick={handleLinkClick}
                                    >
                                        Fakultas Ekonomi
                                    </a>
                                </li>
                                <li className="text-gray-400 hover:text-color-2 hover:font-bold lg:text-lg">
                                    <a
                                        href="/akuntansi"
                                        onClick={handleLinkClick}
                                    >
                                        Akuntansi
                                    </a>
                                </li>
                                <li className="text-gray-400 hover:text-color-2 hover:font-bold lg:text-lg">
                                    <a
                                        href="/manajemen"
                                        onClick={handleLinkClick}
                                    >
                                        Manajemen
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <li>
                            <a
                                href={
                                    window.location.pathname === "/"
                                        ? "#profile"
                                        : "/#profile"
                                }
                                onClick={() => handleLinkClickTwice("#profile")}
                                className="hover:text-gray-400 hover:scale-105 transition duration-200 ease-in-out"
                            >
                                Profile
                            </a>
                        </li>
                        <li>
                            <a
                                href={
                                    window.location.pathname === "/"
                                        ? "#structure"
                                        : "/#structure"
                                }
                                onClick={() =>
                                    handleLinkClickTwice("#structure")
                                }
                                className="hover:text-gray-400 hover:scale-105 transition duration-200 ease-in-out"
                            >
                                Pimpinan
                            </a>
                        </li>
                        <div className="relative">
                            <li>
                                <div className="flex justify-between items-center group gap-2">
                                    <p
                                        className="prodi-item-link cursor-pointer"
                                        onClick={handleInfoIsOpen}
                                    >
                                        Info
                                    </p>
                                    <ion-icon
                                        name="chevron-down-outline"
                                        id="chevron-ion"
                                        onClick={handleInfoIsOpen}
                                    ></ion-icon>
                                </div>
                            </li>
                            <ul
                                className={
                                    infoIsOpen
                                        ? "flex flex-col ml-5 gap-3 absolute -left-[52px] lg:-left-16 top-6 lg:top-8 bg-white rounded-lg p-4 whitespace-nowrap"
                                        : "hidden"
                                }
                            >
                                <li className="text-gray-400 hover:font-bold hover:text-color-2 lg:text-lg">
                                    <a
                                        href="/kata-mereka"
                                        onClick={handleLinkClick}
                                    >
                                        Kata Mereka
                                    </a>
                                </li>
                                <li className="text-gray-400 hover:font-bold hover:text-color-2 lg:text-lg">
                                    <a href="/sop" onClick={handleLinkClick}>
                                        SOP
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <li>
                            <a
                                href={
                                    window.location.pathname === "/"
                                        ? "#contact"
                                        : "/#contact"
                                }
                                onClick={() => handleLinkClickTwice("#contact")}
                                className="hover:text-gray-400 hover:scale-105 transition duration-200 ease-in-out"
                            >
                                Kontak
                            </a>
                        </li>
                    </ul>
                    <img
                        src={LogoKampusMerdeka}
                        className="md:w-20 w-[70px] ml-3"
                        alt="Logo Kampus Merdeka"
                    />
                </div>
                <div className="md:hidden cursor-pointer" onClick={handleNav}>
                    {nav ? (
                        <ion-icon name="close-outline" size="large"></ion-icon>
                    ) : (
                        <ion-icon name="menu-outline" size="large"></ion-icon>
                    )}
                </div>
                <div
                    className={
                        nav
                            ? "fixed top-0 left-0 h-full w-[60%] bg-color-1 py-10 px-4"
                            : "fixed top-0 left-[-100%] h-full w-[60%] bg-color-1 py-10 px-4"
                    }
                >
                    <div className="flex justify-center mb-10">
                        <img
                            src={LogoUnisda}
                            className="w-32"
                            alt="Logo Unisda"
                        />
                    </div>
                    <ul className="flex flex-col gap-9">
                        <li className="border-b-[1px] border-white pb-2">
                            <a
                                href={
                                    window.location.pathname === "/"
                                        ? "#home"
                                        : "/#home"
                                }
                                onClick={() => handleLinkClickTwice("#home")}
                                className="hover:text-gray-400"
                            >
                                Beranda
                            </a>
                        </li>
                        <div className="flex flex-col gap-6">
                            <li className="border-b-[1px] border-white pb-2">
                                <div className="flex justify-between items-center group">
                                    <p
                                        className="prodi-item-link cursor-pointer"
                                        onClick={handleProdiIsOpen}
                                    >
                                        Akademik
                                    </p>
                                    <ion-icon
                                        name="chevron-down-outline"
                                        id="chevron-ion"
                                        onClick={handleProdiIsOpen}
                                    ></ion-icon>
                                </div>
                            </li>
                            <ul
                                className={
                                    prodiIsOpen
                                        ? "flex flex-col ml-5 gap-8"
                                        : "hidden"
                                }
                            >
                                <li className="border-white border-b-[1px] pb-2 hover:text-gray-400 hover:cursor-pointer">
                                    <a
                                        href="/fakultas-ekonomi"
                                        onClick={handleLinkClick}
                                    >
                                        Fakultas Ekonomi
                                    </a>
                                </li>
                                <li className="border-white border-b-[1px] pb-2 hover:text-gray-400">
                                    <a
                                        href="/akuntansi"
                                        onClick={handleLinkClick}
                                    >
                                        Akuntansi
                                    </a>
                                </li>
                                <li className="border-white border-b-[1px] pb-2 hover:text-gray-400">
                                    <a
                                        href="/manajemen"
                                        onClick={handleLinkClick}
                                    >
                                        Manajemen
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <li className="border-b-[1px] border-white pb-2">
                            <a
                                href={
                                    window.location.pathname === "/"
                                        ? "#profile"
                                        : "/#profile"
                                }
                                onClick={() => handleLinkClickTwice("#profile")}
                                className="hover:text-gray-400"
                            >
                                Profile
                            </a>
                        </li>
                        <li className="border-b-[1px] border-white pb-2">
                            <a
                                href={
                                    window.location.pathname === "/"
                                        ? "#structure"
                                        : "/#structure"
                                }
                                onClick={() =>
                                    handleLinkClickTwice("#structure")
                                }
                                className="hover:text-gray-400"
                            >
                                Pimpinan
                            </a>
                        </li>
                        <div className="flex flex-col gap-6">
                            <li className="border-b-[1px] border-white pb-2">
                                <div className="flex justify-between items-center group">
                                    <p
                                        className="prodi-item-link cursor-pointer"
                                        onClick={handleInfoIsOpen}
                                    >
                                        Info
                                    </p>
                                    <ion-icon
                                        name="chevron-down-outline"
                                        id="chevron-ion"
                                        onClick={handleInfoIsOpen}
                                    ></ion-icon>
                                </div>
                            </li>
                            <ul
                                className={
                                    infoIsOpen
                                        ? "flex flex-col ml-5 gap-8"
                                        : "hidden"
                                }
                            >
                                <li className="border-white border-b-[1px] pb-2 hover:text-gray-400">
                                    <a
                                        href="/kata-mereka"
                                        onClick={handleLinkClick}
                                    >
                                        Kata Mereka
                                    </a>
                                </li>
                                <li className="border-white border-b-[1px] pb-2 hover:text-gray-400">
                                    <a href="/sop" onClick={handleLinkClick}>
                                        SOP
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <li className="border-b-[1px] border-white pb-2">
                            <a
                                href={
                                    window.location.pathname === "/"
                                        ? "#contact"
                                        : "/#contact"
                                }
                                onClick={() => handleLinkClickTwice("#contact")}
                                className="hover:text-gray-400"
                            >
                                Profile
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header2;

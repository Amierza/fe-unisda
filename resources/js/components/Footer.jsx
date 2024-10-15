import UnisdaIcon from "../../../public/storage/assets/unisda-icon.png";
import FacebookIcon from "../../../public/storage/assets/facebook.png";
import InstagramIcon from "../../../public/storage/assets/instagram.png";
import TiktokIcon from "../../../public/storage/assets/tiktok.png";
import LinkedInIcon from "../../../public/storage/assets/linkedin.png";
import TwitterIcon from "../../../public/storage/assets/twitter.png";
import YoutubeIcon from "../../../public/storage/assets/youtube.png";
import React, { useState } from "react";

const Footer = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");
        formData.append("_token", csrfToken);

        const response = await fetch("/submit-form", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            setTimeout(() => {
                setResult("");
            }, 5000);
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <div
                id="contact"
                className="bg-[#454545] lg:h-[510px] lg:py-11 lg:px-[72px] px-10 py-8 flex lg:flex-row flex-col lg:gap-[87px] gap-9"
            >
                <form onSubmit={onSubmit} method="POST">
                    <div className="lg:w-[579px] h-[422px] flex flex-col gap-5">
                        <input
                            type="text"
                            className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-gray-400 placeholder-gray-400 focus:outline-none text-white focus:border-color-2 focus:ring-color-2 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Nama Anda"
                            name="Nama"
                        />
                        <input
                            type="email"
                            className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-gray-400 placeholder-gray-400 focus:outline-none text-white focus:border-color-2 focus:ring-color-2 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Email Anda"
                            name="Email"
                        />
                        <input
                            type="text"
                            className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-gray-400 placeholder-gray-400 focus:outline-none text-white focus:border-color-2 focus:ring-color-2 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Perihal"
                            name="Perihal"
                        />
                        <textarea
                            className="bg-transparent border border-gray-400 h-32 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-color-2 focus:border-transparent placeholder-gray-400"
                            placeholder="Pesan Anda"
                            name="Pesan"
                        ></textarea>
                        <button className="py-2 px-5 bg-white rounded-lg hover:bg-gray-400">
                            Kirim
                        </button>
                        <span className="text-white">{result}</span>
                    </div>
                </form>
                <div className="flex lg:flex-row flex-col lg:gap-40 gap-14">
                    <div className="flex flex-col gap-8">
                        <div>
                            <a
                                href={
                                    window.location.href === window.origin + "/"
                                        ? "#home"
                                        : "/"
                                }
                            >
                                <img
                                    src={UnisdaIcon}
                                    className="lg:w-24 w-28 mb-4"
                                    alt="unisda_icon"
                                />
                            </a>
                            <p className="text-white mb-[8px] text-sm">
                                UNIVERSITAS ISLAM DARUL ULUM
                            </p>
                            <p className="text-gray-400 text-sm">
                                © 2023 | Powered By UNISDA
                            </p>
                        </div>
                        <div>
                            <p className="text-white text-2xl font-semibold">
                                Navigasi
                            </p>
                            <ul className="text-white text-sm flex flex-col gap-4 mt-4">
                                <li>
                                    <a
                                        href={
                                            window.location.pathname === "/"
                                                ? "#home"
                                                : "/#home"
                                        }
                                        className="hover:text-color-2"
                                    >
                                        Beranda
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={
                                            window.location.pathname === "/"
                                                ? "#profile"
                                                : "/#profile"
                                        }
                                        className="hover:text-color-2"
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
                                        className="hover:text-color-2"
                                    >
                                        Pimpinan
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={
                                            window.location.pathname === "/"
                                                ? "#contact"
                                                : "/#contact"
                                        }
                                        className="hover:text-color-2"
                                    >
                                        Kontak
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-white text-2xl font-semibold mb-[12px]">
                                Kontak
                            </p>
                            <div className="flex flex-col gap-3">
                                <p className="text-white text-sm">
                                    Jln. Airlangga 03 Sukodadi Lamongan
                                </p>
                                <p className="text-white text-sm">
                                    fe@unisda.ac.id
                                </p>
                                <a
                                    href="https://wa.me/62895807518168?text=Halo%20saya%20ingin%20bertanya"
                                    target="_blank"
                                    className="text-white text-sm hover:text-color-2"
                                >
                                    +62895807518168
                                </a>
                            </div>
                        </div>
                        <div className="mt-14 mb-20 lg:mb-0">
                            <p className="text-2xl text-white font-semibold mb-3">
                                Hubungi Kami
                            </p>
                            <a
                                href="https://wa.me/62895807518168?text=Halo%20saya%20ingin%20bertanya"
                                target="_blank"
                                className="text-white text-sm font-light hover:text-color-2"
                            >
                                Contact Us
                            </a>
                            <div className="flex gap-4 mt-6">
                                {/* <img
                                    src={FacebookIcon}
                                    className="w-[18px] h-[18px]"
                                    alt="facebook_icon"
                                /> */}
                                <a href="https://www.instagram.com/fe.unisda/">
                                    <img
                                        src={InstagramIcon}
                                        className="w-[24px] h-[24px] hover:scale-110"
                                        alt="instagram_icon"
                                    />
                                </a>
                                <a href="https://www.tiktok.com/@fe.unisda">
                                    <img
                                        src={TiktokIcon}
                                        className="w-[24px] h-[24px] hover:scale-110"
                                        alt="tiktok_icon"
                                    />
                                </a>
                                {/* <img
                                    src={LinkedInIcon}
                                    className="w-[18px] h-[18px]"
                                    alt="linkedin_icon"
                                />
                                <img
                                    src={TwitterIcon}
                                    className="w-[18px] h-[18px]"
                                    alt="twitter_icon"
                                />
                                <img
                                    src={YoutubeIcon}
                                    className="w-[18px] h-[18px]"
                                    alt="youtube_icon"
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;

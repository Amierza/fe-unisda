import BgVisi from "../../../public/storage/assets/bg-visi.png";
import VisiMisi from "../../../public/storage/assets/visi-misi.jpg";
const VissionMission = () => {
    return (
        <>
            <div
                id="profile"
                className="bg-center bg-cover flex lg:py-[107px] lg:px-[74px] px-10 py-5 lg:flex-row flex-col lg:gap-[52px] text-white"
                style={{ backgroundImage: `url(${BgVisi})` }}
            >
                <div className="hidden lg:flex h-[713px] w-[500px]">
                    <img
                        src={VisiMisi}
                        alt=""
                        className="h-full w-full object-cover rounded-2xl"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="font-bold lg:text-5xl text-3xl lg:mb-[28px] mb-4">
                        VISI & MISI
                    </p>
                    <p className="text-color-3 lg:text-[24px] text-lg mb-4">
                        Visi
                    </p>
                    <div className="lg:w-[720px] w-full">
                        <ul className="list-disc lg:ml-6 lg:text-lg font-light">
                            <li>
                                Menjadi Pusat Studi Ekonomi yang Profesional
                                dengan semangat Entrepreneur, Berdaya Saing
                                Kuat, Mandiri, Berbudaya, Islami dan Bertaraf
                                Internasional pada Tahun 2031.
                            </li>
                        </ul>
                    </div>
                    <p className="text-color-3 lg:text-[24px] text-lg mb-4 mt-4">
                        Misi
                    </p>
                    <div className="lg:w-[720px]">
                        <ul className="list-disc lg:ml-6 lg:text-lg font-light">
                            <li className="mb-2">
                                Melaksanakan proses pendidikan tinggi yang
                                berkualitas yang menghasilkan lulusan yang
                                professional dengan semangat entrepreneur, dan
                                kompetitif di bidang keuangan, perpajakan,
                                forensik, sumberdaya manusia dan marketing.
                            </li>
                            <li className="mb-2">
                                Menyelenggarakan manajemen kelembagaan dengan
                                prinsip tata kelola fakultas yang baik,
                                meningkatkan kualitas Sumber Daya Manusia.
                                Menyediakan sarana prasarana pembelajaran yang
                                berkualitas dan tata kelola keuangan yang
                                akuntabel.
                            </li>
                            <li className="mb-2">
                                Melaksanakan peningkatan kualitas dan kuantitas
                                penelitian guna mendukung studi keislaman dan
                                kemajuan ilmu pengetahuan, teknologi, seni dan
                                pengayaan budaya yang bermanfaat bagi
                                kesejahteraan masyarakat.
                            </li>
                            <li className="mb-2">
                                Melaksanakan peningkatan kualitas dan kuantitas
                                pengabdian kepada masyarakat sebagai upaya
                                penerapan ilmu pengetahuan, teknologi, seni dan
                                budaya sesuai dengan kepentingan masyarakat dan
                                bangsa.
                            </li>
                            <li className="mb-2">
                                Melaksanakan kerja sama dengan berbagai pihak
                                baik Tingkat Nasional Maupun Internasional, guna
                                memperkaya pelaksanaan Tridharma Perguruan
                                Tinggi
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default VissionMission;

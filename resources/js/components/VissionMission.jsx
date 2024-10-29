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
                                Menjadi Fakultas Ekonomi yang Profesional dengan semangat Entrepreneur, 
                                Berdaya Saing Kuat, Mandiri, Berbudaya, Islami dan Bertaraf Internasional pada Tahun 2031
                            </li>
                        </ul>
                    </div>
                    <p className="text-color-3 lg:text-[24px] text-lg mb-4 mt-4">
                        Misi
                    </p>
                    <div className="lg:w-[720px]">
                        <ul className="list-disc lg:ml-6 lg:text-lg font-light">
                            <li className="mb-2">
                                Meningkatkan kualitas daya saing mahasiswa ekonomi dengan semangat entrepreneur, 
                                berdaya saing kuat, mandiri, berbudaya islami yang bereputasi internasional
                            </li>
                            <li className="mb-2">
                                Meningkatkan kualitas penelitian di bidang ekonomi yang 
                                bereputasi internasional serta berkonstribusi dalam pengembangan IPTEKS.
                            </li>
                            <li className="mb-2">
                                Meningkatkan kualitas pengabdian kepada masyarakat di bidang ekonomi, 
                                dengan prinsip tata kelola fakultas yang baik, yang bereputasi internasional.
                            </li>
                            <li className="mb-2">
                                Meningkatkan kualitas Good Faculty Governance dalam 
                                pengelolaan organisasi dan jaringan kerjasama dengan stakeholder luar negeri.
                            </li>
                            <li className="mb-2">
                                Meningkatkan kualitas penyelenggaraan program sarjana menghasilkan lulusan yang profesional
                                berdasarkan sumberdaya dan lingkungan 
                                yang kompetitif di bidang ekonomi akuntansi dan ekonomi manajemen, yang bereputasi internasional.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default VissionMission;

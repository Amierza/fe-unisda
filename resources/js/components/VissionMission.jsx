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
                                "Menjadi Fakultas Ekonomi yang Profesional dengan semangat entrepreneur, Berdaya Saing Kuat, 
                                Mandiri, Berbudaya, Islami dan Bertaraf Internasional pada tahun 2031."
                            </li>
                        </ul>
                    </div>
                    <p className="text-color-3 lg:text-[24px] text-lg mb-4 mt-4">
                        Misi
                    </p>
                    <div className="lg:w-[720px]">
                        <ul className="list-disc lg:ml-6 lg:text-lg font-light">
                            <li className="mb-2">
                                Melaksanakan penerapan tata kelola berbasis Good Faculty Governance dengan sistem manajemen ISO dengan meningkatkan kualitas SDM dan 
                                penyediaan sarana prasarana berkualitas dengan standar internasional.
                            </li>
                            <li className="mb-2">
                                Menyelenggrakan pendidikan program Sarjana yang menghasilkan lulusan yang profesional yang berbudaya islami dan berkemampuan IPTEKS berdasarkan sumber daya 
                                dan lingkungan yang kompetitif di bidang Akuntansi dan Manajemen yang bereputasi internasional.
                            </li>
                            <li className="mb-2">
                                Menghasilkan kualitas dan kuantitas penelitian di bidang Akuntansi dan Manajemen yang bereputasi 
                                internasional serta berkonstribusi dalam pengembangan IPTEKS
                            </li>
                            <li className="mb-2">
                                Menghasilkan kualitas dan kuantitas pengabdian kepada masyarakat di bidang Akuntansi dan
                                Manajemen yang bereputasi internasional serta berkonstribusi dalam pengembangan IPTEKS
                            </li>
                            <li className="mb-2">
                                Membangun kerjasama dengan stakeholder luar negeri untuk meningkatkan
                                kualitas pelaksanaan Tridharma Perguruan Tinggi.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default VissionMission;

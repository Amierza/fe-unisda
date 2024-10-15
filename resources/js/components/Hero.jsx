import heroImage from "../../../public/storage/assets/hero-image.jpg";
const Hero = () => {
    return (
        <div
            className="w-full h-[500px] md:h-[700px] lg:h-[830px] bg-center bg-cover flex flex-col items-center justify-center text-white"
            style={{ backgroundImage: `url(${heroImage})` }}
            id="home"
        >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                Fakultas <span className="text-color-3">Ekonomi</span>
            </h1>
            <div className="mt-4 text-center">
                <p className="text-lg md:text-2xl lg:text3xl font-light">
                    Universitas Islam Darul Ulum
                </p>
                <p className="text-lg md:text-2xl lg:text3xl font-light">
                    Lamongan
                </p>
            </div>
            <div className="flex gap-4 md:gap-7 lg:gap-10 mt-12">
                <a href="#profile">
                    <button className="py-2 px-7 md:py-3 md:px-10 border border-color-3 lg:py-4 lg:px-13 bg-color-3 rounded-full text-black text-sm md:text-lg lg:text-xl hover:border-color-3 hover:bg-transparent hover:text-color-3">
                        Visi & Misi
                    </button>
                </a>
                <a href="#informasi">
                    <button className="py-2 px-7 md:py-3 md:px-10 lg:py-4 lg:px-13 border border-color-3 rounded-full text-color-3 text-sm md:text-lg lg:text-xl hover:bg-color-3 hover:text-black">
                        Informasi
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Hero;

import KataMereka2 from "../../../public/storage/assets/kata_mereka_2.png";
import KataMerekaCard from "../components/KataMerekaCard";
import LinkNews from "../components/LinkNews";
import Search from "../components/Search";
const KataMereka = ({ data, latestNews, newsDisplayForAYear }) => {
    return (
        <div>
            <div className="w-full pt-9 px-8 pb-40 lg:px-48 lg:pt-20">
                <h1 className="text-color-2 font-bold text-3xl lg:text-4xl">
                    Kata Mereka
                </h1>
                <div className="w-full h-[1px] md:h-[2px] bg-color-1 mb-3 md:mb-6 mt-3"></div>
                <img src={KataMereka2} alt="Akuntansi" className="mt-6" />
                <div className="pt-6">
                    <h1 className="text-lg font-semibold mb-3 lg:text-2xl">
                        Kata Mereka
                    </h1>
                    <p className="font-light text-lg">
                        Alumni Fakultas Ekonomi Universitas Islam Darul ‘Ulum
                        Lamongan.
                    </p>
                </div>
                <div className="w-full h-[1px] md:h-[2px] bg-color-1 mb-3 md:mb-6 mt-4"></div>
                {data.map((item, index) => (
                    <KataMerekaCard data={item} key={index} />
                ))}
            </div>
            <Search />
            <LinkNews
                latestNews={latestNews}
                newsDisplayForAYear={newsDisplayForAYear}
            />
        </div>
    );
};

export default KataMereka;

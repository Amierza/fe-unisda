const Search = () => {
    return (
        <div className="relative flex items-center justify-center text-white">
            <div className="absolute w-full -top-32 max-w-[600px]">
                <div className="rounded-[50px] bg-gray-300 bg-opacity-20 px-5 py-4">
                    <div className="px-8 py-5 bg-color-2 rounded-[50px] flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-semibold md:text-3xl">
                            Pencarian
                        </h1>
                        <p className="font-light md:mt-3 md:text-lg">
                            Cari sesuatu tentang kami
                        </p>
                        <form
                            action="/search"
                            className="flex w-full items-center justify-center mt-3 md:mt-8"
                        >
                            <input
                                type="text"
                                name="search"
                                className="border-none px-5 py-4 md:py-[1.125rem] text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-l-full sm:text-sm md:text-lg"
                                placeholder="Cari..."
                            />
                            <button className="rounded-r-full px-4 bg-color-3 md:py-4 flex items-center py-3 text-black border-none">
                                <ion-icon
                                    name="search-outline"
                                    class="search"
                                ></ion-icon>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;

const Header = () => {
    return (
        <>
            <div className="text-white">
                <div className="w-full text-sm h-11 bg-color-1 flex items-center justify-center gap-5">
                    <div className="flex gap-2.5 items-center">
                        <ion-icon name="mail-open-outline"></ion-icon>
                        <p className="md:text-sm text-[9px] text-white">
                            fe@unisda.ac.id
                        </p>
                    </div>
                    <div className="flex gap-2.5 items-center">
                        <ion-icon name="call-outline"></ion-icon>
                        <p className="md:text-sm text-[9px] text-white">
                            +62123456789
                        </p>
                    </div>
                    <div className="flex gap-2.5">
                        <p className="md:text-sm text-[9px] text-white">
                            Tentang UNISDA
                        </p>
                    </div>
                    <div className="flex gap-2.5">
                        <p className="md:text-sm text-[9px] text-white">PMB</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

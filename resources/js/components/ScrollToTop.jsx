import { useEffect } from "react";

const ScrollToTop = () => {
    useEffect(() => {
        const handleScrollToTop = () => {
            window.scrollTo(0, 0);
        };
        window.addEventListener("popstate", handleScrollToTop);
        window.scrollTo(0, 0);
        return () => {
            window.removeEventListener("popstate", handleScrollToTop);
        };
    }, []);

    return null;
};

export default ScrollToTop;

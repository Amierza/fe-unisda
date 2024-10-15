import { Router, Route, Routes, useLocation } from "react-router-dom";
import Akuntansi from "./pages/Akuntansi.jsx";
import Footer from "./components/Footer";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Manajemen from "./pages/Manajemen";
import LinkNews from "./components/LinkNews";
import Search from "./components/Search";
import KataMereka from "./pages/KataMereka";
import SOP from "./pages/SOP";
import NewsDetailPages from "./pages/NewsDetailPages";
import ScrollToTop from "./components/ScrollToTop";
import AllNews from "./pages/AllNews";
import ArchiveDetails from "./pages/ArchiveDetails";
import SearchResults from "./pages/SearchResults";
import EconomicsFaculty from "./pages/EconomicsFaculty";
import LandingPage from "./pages/LandingPage.jsx";
import { usePage } from "@inertiajs/inertia-react";

const ConditionalLinkNews = () => {
    const location = useLocation();
    const isNewsPage = location.pathname.startsWith("/news/");
    const isArchivePage = location.pathname.startsWith("/archive/");
    return isNewsPage ||
        isArchivePage ||
        location.pathname === "/fakultas-ekonomi" ||
        location.pathname === "/akuntansi" ||
        location.pathname === "/manajemen" ||
        location.pathname === "/kata-mereka" ||
        location.pathname === "/sop" ||
        location.pathname === "/all-news" ||
        location.pathname === "/search" ? (
        <>
            <Search />
            <LinkNews />
        </>
    ) : null;
};

const App = ({ InertiaApp, ...props }) => {
    return (
        <Router>
            <ScrollToTop />
            <Header1 />
            <Header2 />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route
                    path="/fakultas-ekonomi"
                    element={<EconomicsFaculty />}
                />
                <Route path="/akuntansi" element={<Akuntansi />} />
                <Route path="/manajemen" element={<Manajemen />} />
                <Route path="/kata-mereka" element={<KataMereka />} />
                <Route path="/sop" element={<SOP />} />
                <Route path="/news/:slug" element={<NewsDetailPages />} />
                <Route path="/all-news" element={<AllNews />} />
                <Route
                    path="/archive/:yearParam/:monthParam"
                    element={<ArchiveDetails />}
                />
                <Route path="/search" element={<SearchResults />} />
            </Routes>
            <ConditionalLinkNews />
            <Footer />
        </Router>
    );
};

export default App;

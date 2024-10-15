import Hero from "../components/Hero.jsx";
import News from "../components/News.jsx";
import NewsDetails from "../components/NewsDetails.jsx";
import Performance from "../components/Performance.jsx";
import PortalAccess from "../components/PortalAccess.jsx";
import Structure from "../components/Structure.jsx";
import StudyProgram from "../components/StudyProgram.jsx";
import VissionMission from "../components/VissionMission.jsx";
import WhyChooseEconomics from "../components/WhyChooseEconomics.jsx";
import { usePage } from "@inertiajs/inertia-react";

const LandingPage = () => {
    const { prodis, structures, newss } = usePage().props;
    return (
        <>
            <Hero />
            <News newss={newss} />
            <PortalAccess />
            <WhyChooseEconomics />
            <StudyProgram prodis={prodis} />
            <VissionMission />
            <Performance />
            <Structure structures={structures} />
            <NewsDetails newss={newss} />
        </>
    );
};

export default LandingPage;

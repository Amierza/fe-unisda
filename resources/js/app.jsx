import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp, Head } from "@inertiajs/inertia-react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Header1 from "./components/Header1.jsx";
import Header2 from "./components/Header2.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";
import LinkNews from "./components/LinkNews.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const AppLayout = ({ App, props }) => {
    const currentPath = window.location.pathname;
    return (
        <Router>
            <ScrollToTop />
            <Header1 />
            <Header2 />
            <App {...props} />
            <Footer />
        </Router>
    );
};

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.jsx`,
            import.meta.glob("./pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        createRoot(el).render(<AppLayout App={App} props={props} />);
    },
});

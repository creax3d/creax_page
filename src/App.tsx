import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { FloatingContact } from "./components/FloatingContact";
import { Footer, Nav } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { usePageMeta } from "./components/usePageMeta";
import { accentTokens, type Accent } from "./data/accents";
import { Home } from "./pages/Home";
import { Servicios } from "./pages/Servicios";
import { Portafolio } from "./pages/Portafolio";
import { Tienda } from "./pages/Tienda";
import { Contacto } from "./pages/Contacto";
import { NotFound } from "./pages/NotFound";

export default function App() {
  const location = useLocation();
  const [scrollAccent, setScrollAccent] = useState<Accent | null>(null);
  usePageMeta();

  const routeAccent: Accent = location.pathname.startsWith("/servicios")
    ? "green"
    : location.pathname.startsWith("/tienda")
      ? "fuchsia"
      : "cyan";
  const activeAccent = scrollAccent ?? routeAccent;

  useEffect(() => {
    setScrollAccent(null);
  }, [location.pathname]);

  useEffect(() => {
    const token = accentTokens[activeAccent];
    const root = document.documentElement.style;
    root.setProperty("--action-accent", token.hex);
    root.setProperty("--action-rgb", token.rgb);
    root.setProperty("--action-ink", token.ink);
  }, [activeAccent]);

  return (
    <>
      <ScrollToTop />
      <Nav />
      <main key={location.pathname} className="page-fade">
        <Routes>
          <Route path="/" element={<Home onAccentChange={setScrollAccent} />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <FloatingContact />
      <Footer />
    </>
  );
}

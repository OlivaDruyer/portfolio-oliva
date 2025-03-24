import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Import du Header
import Home from "./pages/Home";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <Router>
        <Header />

      {/* Contenu principal */}
      <main className="pb-16"> {/* Ajout de padding-bottom pour éviter que le menu bas cache le contenu */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

         {/* Footer */}
         <Footer />

      
      {/* Menu en bas (mobile uniquement) */}
      <BottomNav />
    </Router>
  );
}

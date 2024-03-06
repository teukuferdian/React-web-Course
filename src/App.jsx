import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./Components/NavbarComponent";
import FooterComponent from "./Components/FooterComponent";

import Homepage from "./pages/Homepage";
import KelasPage from "./pages/KelasPage";
import Testimonial from "./pages/Testimonial";
import FaqPage from "./pages/FaqPage";
import SyaratKeten from "./pages/SyaratKeten";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={Testimonial} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyaratKeten} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;

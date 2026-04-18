import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Components/Layout";
import Home from "./Home";
import Astrophotography from "./Astrophotography";
import Csync from "./Csync";
import GROWER from "./GROWER";
import GTPL from "./GTPL";
import SSRL from "./SSRL";
import WanderSync from "./WanderSync";
import HospitalDBMS from "./HospitalDBMS";
import ScrollToTop from "./ScrollToTop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Astrophotography" element={<Astrophotography />} />
          <Route path="/CSync" element={<Csync />} />
          <Route path="/GROWER" element={<GROWER />} />
          <Route path="/GTPL" element={<GTPL />} />
          <Route path="/SSRL" element={<SSRL />} />
          <Route path="/WanderSync" element={<WanderSync />} />
          <Route path="/HospitalDBMS" element={<HospitalDBMS />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
);

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import TeamMember from "./pages/TeamMember.jsx";
import Donate from "./pages/Donate.jsx";
import GeneralSecretary from "./pages/GeneralSecretary.jsx";
import Events from "./pages/Events.jsx";
import EmptyPage from "./pages/EmptyPage.jsx";
import Convenor from "./pages/Convenor.jsx";
import AdvisorTeam from "./pages/AdvisorTeam.jsx";
import VideoGallery from "./pages/VideoGallery.jsx";
import StateTeam from "./pages/StateTeam.jsx";
import SitaSakhiSamethi from "./pages/SitaSakhiSamethi.jsx";
import SantSanrakshakMandal from "./pages/SantSanrakshakMandal.jsx";
import ReaserchersTeam from "./pages/ReaserchersTeam.jsx";
import PrintGallery from "./pages/PrintGallery.jsx";
import Press from "./pages/Press.jsx";
import President from "./pages/President.jsx";
import OurAim from "./pages/OurAim.jsx";
import PhotoGallery from "./pages/PhotoGallery.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import JoinOurTeam from "./pages/JoinOurTeam.jsx";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/teamMember" element={<TeamMember />} />
      <Route path="/general-secretary" element={<GeneralSecretary />} />
      <Route path="/events" element={<Events />} />
      <Route path="/emptyPage" element={<EmptyPage />} />
      <Route path="/convenor" element={<Convenor />} />
      <Route path="/advisorteam" element={<AdvisorTeam />} />
      <Route path="/videoGallery" element={<VideoGallery />} />
      <Route path="/stateTeam" element={<StateTeam />} />
      <Route path="/sitaSakhiSamethi" element={<SitaSakhiSamethi />} />
      <Route path="/santSanrakshakMandal" element={<SantSanrakshakMandal />} />
      <Route path="/reaserchersTeam" element={<ReaserchersTeam />} />
      <Route path="/printgallery" element={<PrintGallery />} />
      <Route path="/press" element={<Press />} />
      <Route path="/president" element={<President />} />
      <Route path="/photoGallery" element={<PhotoGallery />} />
      <Route path="/our-aim" element={<OurAim />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/panel" element={<AdminPanel />} />
      <Route path="/join-our-team" element={<JoinOurTeam />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

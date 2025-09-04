import { Route, BrowserRouter as Router, Routes } from "react-router";
import CoreLayout from "@/lib/components/common/CoreLayout";
import Home from "@/pages/home";
import About from "@/pages/about";
import Profile from "@/pages/about/profile";
import Leadership from "@/pages/about/leadership";
import Reports from "@/pages/about/reports";
import Founder from "@/pages/about/founder";
import Work from "@/pages/work";
import Programs from "@/pages/work/programs";
import Education from "@/pages/work/education";
import Health from "@/pages/work/health";
import SickleCell from "@/pages/work/sickleCell";
import Food from "@/pages/work/food";
import SkillsTraining from "@/pages/work/skillsTraining";
import Outreach from "@/pages/work/outreach";
import Locations from "@/pages/locations";
import Contact from "@/pages/contact";
import Media from "@/pages/contact/media";
import Faq from "@/pages/contact/FAQPage";
import Support from "@/pages/support";
import Donation from "@/pages/support/donation";
import Volunteer from "@/pages/support/volunteer";
import Partner from "@/pages/support/partner";
import Advocate from "@/pages/support/advocate";
import GalleryHighlights from "@/pages/locations/galleryHighlights";
import Impact from "@/pages/locations/impact";
import Communities from "@/pages/locations/communities";
import { ScrollToTop } from "@/lib/components/common/ScrollToTop";
import PrivacyPolicy from "@/pages/privacy";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* main pages */}
        <Route path="/" element={<CoreLayout />}>
          <Route index element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* about pages */}
          <Route path="/about" element={<About />} />
          <Route path="/about/profile" element={<Profile />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/reports" element={<Reports />} />
          <Route path="/about/founder" element={<Founder />} />
          {/* work */}
          <Route path="/work" element={<Work />} />
          <Route path="/work/programs" element={<Programs />} />
          <Route path="/work/education" element={<Education />} />
          <Route path="/work/health" element={<Health />} />
          <Route path="/work/sickle-cell" element={<SickleCell />} />
          <Route path="/work/food-security" element={<Food />} />
          <Route path="/work/skills-training" element={<SkillsTraining />} />
          <Route path="/work/outreach" element={<Outreach />} />
          {/* location */}
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/communities" element={<Communities />} />
          <Route path="/locations/impact" element={<Impact />} />
          <Route path="/locations/gallery" element={<GalleryHighlights />} />

          {/* support */}
          <Route path="/support/" element={<Support />} />
          <Route path="/support/donate" element={<Donation />} />
          <Route path="/support/volunteer" element={<Volunteer />} />
          <Route path="/support/partner" element={<Partner />} />
          <Route path="/support/advocate" element={<Advocate />} />
          {/* contact */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/media" element={<Media />} />
          <Route path="/contact/faq" element={<Faq />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

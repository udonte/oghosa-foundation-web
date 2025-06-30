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

const App = () => {
  return (
    <Router>
      <Routes>
        {/* main pages */}
        <Route path="/" element={<CoreLayout />}>
          <Route index element={<Home />} />
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
          <Route path="/work/food" element={<Food />} />
          <Route path="/work/skills-training" element={<SkillsTraining />} />
          <Route path="/work/outreach" element={<Outreach />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

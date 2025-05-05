import { Route, BrowserRouter as Router, Routes } from "react-router";
import CoreLayout from "./lib/components/common/CoreLayout";
import Home from "@/pages/main/home";
import About from "@/pages/main/about";
import Profile from "./pages/main/about/profile";
import Leadership from "@/pages/main/about/leadership";
import Reports from "./pages/main/about/reports";
import Founder from "./pages/main/about/founder";

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
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

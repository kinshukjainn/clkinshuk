import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Devtools from "./components/Devtools";
import CurrentWorkings from "./components/CurrentWorkings";
import SeoInsights from "./components/SeoInsights";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/gears" element={<Devtools />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/latest" element={<CurrentWorkings />} />
        <Route path="/seo-insights" element={<SeoInsights />} />
      </Routes>

      <Footer />
    </>
  );
}

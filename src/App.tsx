import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import HeroSection from "./pages/HeroSection";
import Statistic from "./pages/Statistic";
import Header from "./pages/Header";
import Alert from "./pages/Alert";
import Breadcrumbs from "./pages/Breadcrumbs";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="hero" element={<HeroSection />} />
        <Route path="statistic" element={<Statistic />} />
        <Route path="header" element={<Header />} />
        <Route path="alert" element={<Alert />} />
        <Route path="breadcrumb" element={<Breadcrumbs />} />
      </Route>
    </Routes>
  );
}

export default App;

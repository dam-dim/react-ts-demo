import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { JewelryAccessories } from "./pages/JewelryAccessories";
import { ClothingShoes } from "./pages/ClothingShoes";
import { HomeLiving } from "./pages/HomeLiving";
import { WeddingParty } from "./pages/WeddingParty";
import { ToysEntertainment } from "./pages/ToysEntertainment";
import { CraftSuppliesTools } from "./pages/CraftSuppliesTools";
import { Profile } from "./pages/Profile";
import { ArtCollectibles } from "./pages/ArtCollectibles";
import NavBar from "./components/navbar/NavBar";
import { Header } from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { AppProvider } from "./context/AppContext";

export function App() {
  return (
    <AppProvider>
      <Header />

      <div className="line">
        <hr className="width-centered" />
      </div>

      <NavBar />

      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jewelry-accessories" element={<JewelryAccessories />} />
          <Route path="/clothing-shoes" element={<ClothingShoes />} />
          <Route path="/home-living" element={<HomeLiving />} />
          <Route path="/wedding-party" element={<WeddingParty />} />
          <Route path="/art-collectibles" element={<ArtCollectibles />} />
          <Route path="/toys-entertainment" element={<ToysEntertainment />} />
          <Route
            path="/craft-supplies-tools"
            element={<CraftSuppliesTools />}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      <Footer />
    </AppProvider>
  );
}

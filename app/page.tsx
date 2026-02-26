import Image from "next/image";
import HeroOptionFull from "./components/HeroOptionFull";
import HeroOptionLeftCarousel from "./components/HeroOptionLeftCarousel";
import HeroOptionSplit from "./components/HeroOptionSplit";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MaterialsSection from "./components/MaterialsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Full width hero */}
      <Header />
      <HeroOptionFull />
      <MaterialsSection />
      <Footer />
    </div>
  );
}

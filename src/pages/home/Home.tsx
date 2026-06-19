import Navbar from "../../components/layout/Navbar";
import FeaturePrograms from "./FeaturePrograms";
import Hero from "./HeroSection";
import HowWork from "./HowWork";
import Features from "./Features";
import { CallToAction } from "./CallToAction";
import Footer from "../../components/layout/Footer";

export const Home = () => {
  return (
    <div>

      <Navbar />

      <Hero />

      <HowWork />

      <FeaturePrograms />

      <Features />

      <CallToAction />

      <Footer />
      
    </div>
  );
};

export default Home;

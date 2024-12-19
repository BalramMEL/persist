import GymFinder from "./components/Address"
import Benefits from "./components/Benefits"
import BlogSection from "./components/BlogSection"
import Carousel from "./components/Corousel"
import FAQ from "./components/FAQs"
import FitnessHub from "./components/FitnessHub"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import HorizontalScroller from "./components/HorizontalScroller"
import MissionSection from "./components/Mission"
import NavBar from "./components/NavBar"
import Services from "./components/Services"
import TestimonialSlider from "./components/Testimonials"
import TransformationSlide from "./components/TransformSlide"

function App() {

  return (
    <main className="relative min-h-screen w-screen bg-black overflow-x-hidden">
      <NavBar />
      
      <Hero />

      <Carousel />

      <MissionSection />
      
      <Services />

      <Benefits />

      <FitnessHub />

      <HorizontalScroller />

      <TransformationSlide />

      <TestimonialSlider />

      <GymFinder />

      <BlogSection />

      <FAQ />

      <Footer />
    </main>
  )
}

export default App

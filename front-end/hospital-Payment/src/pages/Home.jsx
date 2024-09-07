import AboutSection from "../components/AboutSection"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import ServicesSection from "../components/ServicesSection"
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <Footer />
    </div>
  )
}

export default Home

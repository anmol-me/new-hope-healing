import MenuBar from "./React Components/menu_bar";
import Hero from "./Sections/Hero";
import AboutReiki from "./Sections/AboutReiki";
import BenefitsOfReiki from "./Sections/BenefitsOfReiki";
import ReikiServices from "./Sections/ReikiServices";
import Testimonials from "./Sections/Testimonials";
import MeetThePractitioner from "./Sections/MeetThePractitioner";
import FAQ from "./Sections/FAQ";
import Footer from "./Sections/Footer";

function App() {
  return (
    <>
      <div>
        {/* <p className="text-sky-400">Paragraph</p>
        <Button>Click me</Button> */}
        <MenuBar />
        <Hero />
        <AboutReiki />
        <BenefitsOfReiki />
        <ReikiServices />
        <Testimonials />
        <MeetThePractitioner />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}

export default App;

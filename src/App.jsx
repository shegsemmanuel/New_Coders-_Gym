import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar"
import BgImage from "./assets/bg.png";
import Equipments from "./components/Equipments/Equipments";
import Banner from "./components/Banner/Banner";

import Img1 from "./assets/2.png";
import Img2 from "./assets/3.png";
import TabComp from "./components/Tab/TabComp";
import Testimonials from "./components/Testimonials/Testimonials";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

const BannerData = {
  image: Img1,
  title: "The Important To Take Care Of Yourself",
  subtitle: 
    "Taking care of yourself is essential for maintaining both physical and mental well-being. By prioritizing self-care, you can boost your energy levels, improve your immune system, and prevent the onset of chronic illnesses. Regular exercise, balanced nutrition, and sufficient sleep are key elements of self-care that help the body function at its best.",
    link: "#",
};

const Banner2Data = {
  image: Img2,
  title: "The Important To Take Care Of Yourself",
  subtitle: 
    "Mental and emotional health is equally important when it comes to self-care. Engaging in activities that bring joy, relaxation, and peace, such as meditation, hobbies, or spending time with loved ones can help reduce anxiety and improve overall happiness. Setting boundaries, practicing mindfulness, and taking breaks from a busy schedule are also vital components of maintaining balance.",
    link: "#",
};


const bgStyle = {
   backgroundImage: `url(${BgImage})`,
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   backgroundPosition: "center", 
   backgroundAttachment: "fixed",
};

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar/>
        <Hero />
      </div>
      <Equipments/>
      <Banner {...BannerData} />
      <TabComp />
      <Banner {...Banner2Data} />
      <Testimonials />
      <Banner2 />
      <Footer />
    </div>  
  );
};

export default App;

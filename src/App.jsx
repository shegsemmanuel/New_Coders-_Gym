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

const BannerData = {
  image: Img1,
  title: "The Important To Take Care Of Yourself",
  subtitle: 
    "The Important To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic molestiae cum ex dolore dolorem quibusdam deleniti quae. Repellendus consequatur iure culpa excepturi eius dolores, placeat necessitatibus itaque dolorem ea officia!.",
    link: "#",
};

const Banner2Data = {
  image: Img2,
  title: "The Important To Take Care Of Yourself",
  subtitle: 
    "The Important To Take Care of Yourself   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic molestiae cum ex dolore dolorem quibusdam deleniti quae. Repellendus consequatur iure culpa excepturi eius dolores, placeat necessitatibus itaque dolorem ea officia!.",
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
    </div>  
  );
};

export default App;

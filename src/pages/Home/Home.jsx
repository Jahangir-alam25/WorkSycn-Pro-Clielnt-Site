import Banner from "./Banner";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Mission from "./Mission";
import Team from "./Team";
import WhyChooseUs from "./WhyChooseUs";
import FAQ from "./FAQ";
import ResourceCategories from "./ResourceCategories";

const Home = () => {
  return (

        <div>
      <Banner />                  {/* Strong first impression */}
      <Services />                {/* Immediately showcase offerings */}
      <WhyChooseUs />             {/* Explain value proposition */}
      <Mission />                 {/* Reinforce company's purpose */}
      <Testimonials />            {/* Build trust with social proof */}
      <ResourceCategories />      {/* Highlight content/resources */}
      <FAQ />                     {/* Address common questions */}
      <Team />                    {/* Humanize company */}
    </div>
  );
};

export default Home;

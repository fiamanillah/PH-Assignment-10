import CategoryList from "../components/CategoryList";
import HomeProducts from "../components/HomeProducts";
import Section from "../components/Section";
import Slider from "../components/Slider";
import Testimonial from "../components/Testimonial";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQ from "../components/FAQ.jsx";

export default function Home() {
  return (
    <Section>
      <div>
        <Slider />
        <CategoryList />
        <HomeProducts />
        <Testimonial />
        <WhyChooseUs />
        <FAQ />
      </div>
    </Section>
  );
}

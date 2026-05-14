import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import AboutPreview from '../components/home/AboutPreview';
import Benefits from '../components/home/Benefits';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import Products from '../components/home/Products';
import Team from '../components/home/Team';
import GalleryPreview from '../components/home/GalleryPreview';
import Pricing from '../components/home/Pricing';
import AppointmentCTA from '../components/home/AppointmentCTA';
import Newsletter from '../components/home/Newsletter';
import { pageTransition } from '../utils/animations';

const Home = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />
      <Services />
      <AboutPreview />
      <Benefits />
      <Stats />
      <Products />
      <Testimonials />
      <Team />
      <GalleryPreview />
      <Pricing />
      <AppointmentCTA />
      <Newsletter />
    </motion.div>
  );
};

export default Home;

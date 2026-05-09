import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

export default function App() {
  return (
    <main className="relative">
      <Background />
      <Navbar />
      <Hero />
      <Services />
      <Expertise />
      <Contact />
      <Footer />
    </main>
  );
}

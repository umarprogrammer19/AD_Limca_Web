import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Flavors from './components/Flavors';
import Health from './components/Health';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import CursorTrail from './components/CursorTrail';
import Chat from './components/chat';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-white">
      <CursorTrail />
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Flavors />
        <Health />
        <Contact />
        <Chat />
      </main>
      <Footer />
    </div>
  );
}

export default App;
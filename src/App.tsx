import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicy";
import { AppSupportPage } from "./pages/AppSupport";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'support'>('home');

  // Listen for hash changes to handle navigation
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#privacy-policy') {
      setCurrentPage('privacy');
    } else if (window.location.hash === '#app-support') {
      setCurrentPage('support');
    } else {
      setCurrentPage('home');
    }
  });

  // Check initial hash
  if (window.location.hash === '#privacy-policy' && currentPage === 'home') {
    setCurrentPage('privacy');
  } else if (window.location.hash === '#app-support' && currentPage === 'home') {
    setCurrentPage('support');
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicyPage />;
  }
  
  if (currentPage === 'support') {
    return <AppSupportPage />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

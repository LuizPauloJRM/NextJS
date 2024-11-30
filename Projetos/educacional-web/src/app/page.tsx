// src/app/home.tsx

import React from 'react';
import IntroSection from './components/intro-section';
// import FeatureSection from './components/feature-section';
// import InvestmentSection from './components/investment-section';
// import FaqSection from './components/faq-section';


const Home = () => {
  
  return (
    
    <main className='pt-20 md:pt-18'>
      <section id ='intro' className='space-y-6 py-0 nd:py-12'>
        <div className='container'>

        </div>
        <h1 className='text-primary'>...</h1>
      </section>
      <section id='about'>
        <h1 className='text-primary'>Sobre</h1>

      </section>
      <section id='feature'>
        <h1 className='text-primary'>...</h1>

      </section>
      <section id='investment'>
        <h1 className='text-primary'>...</h1>

      </section>
      <section id='faq'>
        <h1 className='text-primary'>faq</h1>

      </section>
      <IntroSection />
      { /* <AboutSection /> */ }
      { /* <FeatureSection /> */ }
      { /* <InvestmentSection /> */ }
      { /* <FaqSection /> */ }
    </main>
  );
};

export default Home;

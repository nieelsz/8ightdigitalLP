import React from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Services } from './components/sections/Services';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Services />
      <FAQ />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;

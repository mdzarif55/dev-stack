import { Suspense, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/hero';
import Technologies from './components/Technologies';

const techFetch = async () => {
  const res = fetch('/data.json');
  const data = (await res).json();
  return data;
};

function App() {

  const techPromise = techFetch();

  return (
    <>
      <Navbar/>
      <Hero/>
      <Suspense fallback={<h2>Loading....</h2>}>
        <Technologies techPromise= {techPromise} />
      </Suspense>
      <Footer/>
    </>
  )
}

export default App

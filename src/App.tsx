import { Suspense,  } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import { Toaster } from 'react-hot-toast';

const techFetch = async () => {
  const res = fetch('/data.json');
  const data = (await res).json();
  return data;
};

function App() {

  const techPromise = techFetch();

  return (
    <>
      <Toaster position="bottom-right" />
      <Navbar />
      <Hero />
      <Suspense fallback={<h2>Loading....</h2>}>
        <Technologies techPromise={techPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App

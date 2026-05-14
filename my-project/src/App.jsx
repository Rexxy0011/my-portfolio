import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";
import Experience from "./Components/Experience";
import { Toaster } from "react-hot-toast";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Toaster position="top-center" />
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        </div>

        {/* Teal hero band — full bleed, wraps Navbar + Hero */}
        <div className="relative overflow-hidden bg-[#0E5A6B]">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px]" />
          {/* Radial glow */}
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#ffffff10,transparent)]" />

          <div className="container relative mx-auto px-8">
            <Navbar />
            <Hero />
          </div>
        </div>

        {/* Remaining sections — page-wide dark background shows through */}
        <div className="container mx-auto px-8">
          <Technologies />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;

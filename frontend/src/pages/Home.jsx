import React from "react";
import Hero from "../components/Hero";
import TopNiches from "../components/TopNiches";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <section className="bg-gray-50 min-h-screen animate-fadeIn">
      <Hero />
      <TopNiches />
      <HowItWorks />
    </section>
  );
};

export default Home;

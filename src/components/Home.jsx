import React from "react";
import Hero from "./UI/Hero";
import FAQs from "./UI/FAQs";
import Navbar from "./UI/NavBar";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FAQs />
    </div>
  );
}

export default Home;
